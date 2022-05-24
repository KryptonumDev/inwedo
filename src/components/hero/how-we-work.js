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
    padding: 200px 0 100px 0;
    border-radius: 24.5221px;
    filter: drop-shadow(0px 76px 74px rgba(0, 0, 0, 0.02));
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 90px;
`

const Image = styled(GatsbyImage)`
    border-radius: 8px;
    filter: var(--shadow);
`

const TextPart = styled.div`
    max-width: 620px;

    h1{
        margin-bottom: 16px;
        opacity: .5;
    }

    .h1{
        margin-bottom: 16px;
    }

    p.h4{
        margin-bottom: 32px;
    }
`