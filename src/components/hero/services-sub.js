import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../../style"

export default function Hero({ data: { text, pageTitle, button, icon } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <Image>
                        <GatsbyImage image={icon.localFile.childImageSharp.gatsbyImageData} alt={icon.altText} />
                    </Image>
                    <TextPart>
                        <h1 className="h4 line">{pageTitle}</h1>
                        <p className="h1">{text}</p>
                        <Link className="button" to={button.url}>{button.name}</Link>
                    </TextPart>
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    background-color: var(--color-white);
    padding: clamp(90px, 11.71vw, 200px) 0 clamp(0px, ${48 / 1920 * 100}vw, 48px) 0;
    border-radius: 24.5221px;
`

const Content = styled.div`
    display: flex;
    align-items: center;
    gap: clamp(36px, 7.29vw, 128px);

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const Image = styled.div`
    padding: clamp(24px, 4.427vw, 43px) clamp(30px, 5.729vw, 58px);
    background-color: var(--color-white);
    box-shadow: var(--shadow);
    width: fit-content;
    height: fit-content;
    min-width: clamp(100px, 19.27vw, 196px);
    width: clamp(100px, 19.27vw, 196px);
    
    img{
        border-radius: 8px;
    }
`

const TextPart = styled.div`
    max-width: 660px;

    .h4{
        margin-bottom: clamp(12px, 2.083vw, 24px);
        opacity: .55;
        font-size: clamp(14px, 2.083vw, 18px);
    }

    .h1{
        margin-bottom: clamp(16px, 3.6458vw, 40px);
        font-size: clamp(20px, 3.385vw, 32px);
    }

    @media (max-width: 768px){

        .h4{
            width: fit-content;
            margin: 0 auto;
            margin-bottom: clamp(12px, 2.083vw, 24px);
            padding: 16px 0 0;

            &::before{
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                height: 1px;
            }
        }

        .h1{ 
            text-align: center;
        }

        a{
            text-align: center;
            width: fit-content;
            margin: 0 auto;
            margin-bottom: clamp(16px, 3.6458vw, 40px);
        }
    }
`