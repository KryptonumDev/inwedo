import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from './../../style'

export default function Hero({ data: { pageTitle, textUnderTitle, button, backgroundImage } }) {
    return (
        <Wrapper>
            <Background image={backgroundImage.localFile.childImageSharp.gatsbyImageData} alt={backgroundImage.altText} />
            <Container>
                <Content>
                    <h1>{pageTitle}</h1>
                    <p>{textUnderTitle}</p>
                    <Link className='button' to={button.url}>{button.name}</Link>
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    min-height: 686px;
    position: relative;
    margin-top: 81px;
    display: flex;
`

const Background = styled(GatsbyImage)`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
`

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 950px;
    margin: 0 auto;
    height: 100%;

    h1{
        margin-bottom: 16px;
        color: var(--color-white);
        font-weight: 500;
        font-size: clamp(20px, ${26 / 768 * 100}vw, 32px);
        line-height: 151%;
        text-align: center;
    }

    p{
        margin: 0 auto 32px auto;
        max-width: 524px;
        font-weight: 500;
        font-size: clamp(14px, ${16 / 768 * 100}vw, 18px);
        line-height: 151%;
        text-align: center;
        color: var(--color-white);
    }

    a{

    }
`