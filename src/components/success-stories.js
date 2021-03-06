import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"
import { datalayerPush } from './../helpers/datalayer'

export default function SuccessStories({ data: { sectionTitle, success }, analytics, location }) {
    return (
        <Wrapper>
            <Container>
                <Stories>
                    <h2 className="h3">{sectionTitle}</h2>
                    {success.map((el, index) => (
                        <Link key={el.caseTitle} onClick={() => {datalayerPush(analytics(el.caseTitle ? el.caseTitle : el.caseLogo.altText, index, location))}} className="flex" to={el.button.url}>
                            <GatsbyImage className="image" image={el.previewImage.localFile.childImageSharp.gatsbyImageData} alt={el.previewImage.altText} />
                            <div className="text">
                                {el.caseLogo
                                    ? <img className="logo" src={el.caseLogo.localFile.publicURL} alt={el.caseLogo.altText} />
                                    : null}
                                {el.caseTitle
                                    ? <h3>{el.caseTitle}</h3>
                                    : null}
                                <p className="p">{el.caseText}</p>
                                <p className="link"> {el.button.name}</p>
                            </div>
                        </Link>
                    ))}
                </Stories>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);
`

const Stories = styled.div`
    display: grid;
    grid-gap: clamp(32px, 6.25vw, 64px);

    .h3{
        text-align: center;
        max-width: 860px;
        margin: 0 auto 0 auto;
        padding-top: 16px;
        position: relative;
        font-size: clamp(16px, 2.86vw, 24px);

        &::before{
            content: "";
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 0;
            width: 40px;
            height: 1px;
            background-color: var(--color-black);
        }
    }

    .flex{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: clamp(32px, 10.41vw, 128px);

        &:hover{
            .link{
                &::after{
                    width: 100%;
                }
            }
            .image{
                img{
                    transform: scale(1.03);
                }
            }
        }

        .image{
                border-radius: 8px;
            img{
                transition: transform .2s cubic-bezier(0.39, 0.575, 0.565, 1);
                border-radius: 8px;
            }
        }

        .text{
            display: flex;
            flex-direction: column;
            justify-content: center;
            max-width: 500px;

            .logo{
                width: max-content;
                max-width: clamp(133px, ${148 / 768 * 100}vw, 165px);
                width: fit-content;
                max-height: 60px;
            }
            img+h3{
                margin-top: 12px;
            }
            h3{
                font-weight: 400;
                font-size: 22px;
                line-height: 30px;

            }
            h3 + div{
                margin-top: 24px;
            }
            .p{
                margin: clamp(8px, 2.08vw, 24px) 0;
                font-size: clamp(14px, 1.95vw, 16px);
            }
        }

        @media (max-width: 850px) {
            grid-template-columns: 1fr;
            grid-gap: 32px;
            max-width: 500px;
            margin: 0 auto;
        }
    }
`