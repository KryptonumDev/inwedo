import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from './../../style'
import Video from './../../images/careers.mp4'

export default function Hero({ data: { pageTitle, textUnderTitle, button, backgroundImage } }) {
    return (
        <Wrapper>
            <Background>
                <video src={Video} type="video/mp4" loop autoPlay muted playsinline />
                <GatsbyImage image={backgroundImage.localFile.childImageSharp.gatsbyImageData} alt={backgroundImage.altText} />
            </Background>
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
    min-height: 733.5px;
    position: relative;
    margin-top: 81px;
    display: flex;

    @media (max-width: 640px){
        min-height: 660px;
    }
`

const Background = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    right: 0;
    top: 0;
    bottom: 0;
    width: 1304px;
    z-index: -1;

    video{
        z-index: -1;
        width: 1304px;
        height: fit-content;

        @media (max-width: 640px) {
            display: none;
        }
    }

    img{
        display: none;

        @media (max-width: 640px) {
            display: block;
            height: 660px;
            width: 100%;
        }
    }

    &::after{
        position: absolute;
        content: "";
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: #00000064;
    }
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