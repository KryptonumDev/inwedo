import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function SuccessStories({ data: { sectionTitle, success } }) {
    return (
        <Wrapper>
            <Container>
                <Stories>
                    <h2 className="h3">{sectionTitle}</h2>
                    {success.map(el => (
                        <Link className="flex" to={el.button.url}>
                            <GatsbyImage className="image" image={el.previewImage.localFile.childImageSharp.gatsbyImageData} alt={el.previewImage.altText} />
                            <div className="text">
                                {el.caseLogo
                                    ? <GatsbyImage className="logo" image={el.caseLogo.localFile.childImageSharp.gatsbyImageData} alt={el.caseLogo.altText} />
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
        font-size: clamp(20px, 2.86vw, 24px);

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

        .image{
            border-radius: 8px;
        }

        .text{
            display: flex;
            flex-direction: column;
            justify-content: center;

            .logo{
                width: max-content;
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