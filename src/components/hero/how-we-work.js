import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../../style"

export default function Hero({ data: { text, pageTitle, subTitle, button, image } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <TextPart>
                        <h1 className="h4 line">{pageTitle}</h1>
                        <p className="h1">{subTitle}</p>
                        <p className="h4">{text}</p>
                        <Link className="button" to={button.url}>{button.name}</Link>
                    </TextPart>
                    <Image image={image.localFile.childImageSharp.gatsbyImageData} alt={image.altText} />
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    background-color: var(--color-white);
    padding: clamp(120px, 20.83vw, 200px) 0 100px 0;
    border-radius: 24.5221px;
    box-shadow: drop-shadow(0px 76px 74px rgba(0, 0, 0, 0.02));

    @media (max-width: 768px) {
        padding-bottom: 0;
        background-color: transparent;
        box-shadow: unset;
    }
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: clamp(32px, 8.3vw, 96px);

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        max-width: 600px;
        margin: 0 auto;
    }
`

const Image = styled(GatsbyImage)`
    border-radius: 8px;
    box-shadow: var(--shadow);
    width: 100%;
    height: fit-content;
    max-width: 588px;
`

const TextPart = styled.div`
    max-width: 620px;
    width: 100%;

    h1{
        margin-bottom: 16px;
        opacity: .5;
        font-size: clamp(14px, 2.08vw, 18px);
    }

    .h1{
        margin-bottom: 16px;
        font-size: clamp(20px, 2.86vw, 24px);
    }

    p.h4{
        margin-bottom: 32px;
        font-size: clamp(16px, 2.21vw, 18px);
    }
`