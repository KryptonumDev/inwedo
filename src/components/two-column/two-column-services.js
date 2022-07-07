import React from "react"
import styled from "styled-components"
import { Container } from "../../style"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function TwoColumnFlex({ data: { image, title, subTitle, text, button } }) {
    return (
        <Wrapper>
            <Container>
                <Flex to={button.url}>
                    <div className="image">
                        <Image image={image.localFile.childImageSharp.gatsbyImageData} alt={image.altText} />
                    </div>
                    <div className="text">
                        <h2 className="h1 line">{title}</h2>
                        <p className="h4">{subTitle}</p>
                        <p className="p">{text}</p>
                        <p className="link">{button.name}</p>
                    </div>
                </Flex>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);
`

const Flex = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: clamp(50px, 10.15vw, 128px);
    margin-bottom: clamp(48px, 9.375vw, 96px);

    &:hover{
        .link{
            &::after{
                background-color: #fff;
            }
        }
    }

    .image{
        background-color: var(--color-white);
        box-shadow: var(--shadow);
        border-radius: 24px;
        padding: clamp(16px, 4.94vw, 54px) clamp(24px, 5.20vw, 64px);
        width: clamp(93px, 20vw, 208px);
        min-width: clamp(93px, 20vw, 208px);
    }

    .text{
        max-width: 680px;

        .h1{
            margin-bottom: clamp(8px, 2.08vw, 24px);
            font-size: clamp(20px, 3.38vw, 32px);

            padding-left: clamp(32px, ${44 / 768 * 100}vw, 56px);

            &::before{
                width: clamp(16px, ${28 / 768 * 100}vw, 40px);

                @media (max-width: 768px) {
                    height: 1px;
                }
            }
        }
        .h4{
            margin-bottom: clamp(12px, 1.82vw, 16px);
            font-size: clamp(14px, ${16 / 768 * 100}vw, 18px);
        }
        .p{
            margin-bottom: clamp(12px, 2.08vw, 24px);
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`

const Image = styled(GatsbyImage)`
    width: fit-content;
    height: fit-content;
    max-width: 210px;
`