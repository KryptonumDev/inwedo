import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

export default function Hero({ data: { background, text, pageTitle } }) {
    return (
        <Wrapper>
            <Background image={background.localFile.childImageSharp.gatsbyImageData} alt={background.altText} />
            <Half/>
            <Card>
                <h1 className="line h4">{pageTitle}</h1>
                <h2 className="h1">{text}</h2>
            </Card>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    max-width: 1920px;
    margin: 81px auto -100px auto;
    padding-bottom: 100px;
    overflow: hidden;
    position: relative;
`

const Background = styled(GatsbyImage)`
    width: 100%;
    height: 100%;
    filter: var(--shadow);
`

const Half = styled.div`
    position: absolute;
    bottom: 100px;
    top: 50%;
    left: 0;
    right: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
    opacity: 0.5;

    @media (max-width: 1200px){
        display: none;
    }
`

const Card = styled.div`
    position: absolute;
    width: 100%;
    max-width: 1150px;
    right: -150px;
    top: 50%;
    border-radius: 24px;
    padding: 52px 48px;
    box-sizing: border-box;
    background-color: #cccccc33;

    .h4{
        margin-bottom: 8px;
        color: var(--color-white);
        font-size: clamp(14px, 2.08vw, 18px);
        text-transform: uppercase;
    }
    
    .h1{
        color: var(--color-white);
        font-size: clamp(20px, 3.38vw, 32px);
    }

    @media (max-width: 1200px) {
        position: unset;
        padding: unset;
        max-width: unset;
        background-color: unset;

        .h4{
            color: var(--color-black);
            opacity: .5;
            text-transform: unset;
        }

        .h1{
            color: var(--color-black);
        }

        padding: 32px 32px 0 32px;
    }
`