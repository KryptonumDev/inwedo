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
    padding: 200px 0 100px 0;
    border-radius: 24.5221px;
    filter: drop-shadow(0px 76px 74px rgba(0, 0, 0, 0.02));
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 128px;
`

const Image = styled.div`
    padding: 43px 58px;
    background-color: var(--color-white);
    border-radius: 8px;
    filter: var(--shadow);
`

const TextPart = styled.div`
    max-width: 780px;

    .h4{
        margin-bottom: 24px;
        opacity: .5;
    }

    .h1{
        margin-bottom: 40px;
    }
`