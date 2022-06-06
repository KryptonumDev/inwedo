import React from "react"
import styled from "styled-components"
import { Container } from "../../style"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function TwoColumnFlex({ data: { image, title, subTitle, text, button }, technology }) {
    return (
        <Wrapper>
            <Container>
                <Flex to={button.url}>
                    <div className="text">
                        {technology
                            ? <h2 className="h1">{title}</h2>
                            : <h2 className="h4 line">{title}</h2>}
                        <p className="h3">{subTitle}</p>
                        <div className="p" dangerouslySetInnerHTML={{ __html: text }}></div>
                        {button.url
                            ? <p className="link">{button.name}</p>
                            : null}
                    </div>
                    <Image className="image" image={image.localFile.childImageSharp.gatsbyImageData} alt={image.altText} />
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
    gap: 40px;

    .image{
        filter: var(--shadow);
        border-radius: 8px;
        width: fit-content;
        height: fit-content;

        @media (max-width: 850px) {
            width: 100%;
        }
    }

    .text{
        max-width: 610px;
        width: 100%;
        .h1{
            margin-bottom: 0;
        }
        
        .h4{
            margin-bottom: 16px;
            opacity: .5;
            font-size: clamp(14px, 2.08vw, 18px);
        }
        .h3{
            margin-bottom: 24px;
            font-size: clamp(20px, 2.86vw, 24px);
        }
        .p{
            margin-bottom: 24px;
            font-size: clamp(14px, 1.95vw, 16px);

            p+p{
                margin-top: 24px;
            }
        }
    }

    @media (max-width: 850px) {
        flex-direction: column-reverse;
        gap: 32px;
        max-width: 500px;
        margin: 0 auto;
    }
`

const Image = styled(GatsbyImage)`
`