import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

export default function Hero({ data: { backgroundImage, pageTitle, textUnderTitle } }) {
    return (
        <Wrapper>
            <Background image={backgroundImage.localFile.childImageSharp.gatsbyImageData} alt={backgroundImage.altText} />
            <Card>
                <h1 className="h4">{pageTitle}</h1>
                <p className="h1">{textUnderTitle}</p>
            </Card>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    max-width: 1920px;
    margin: 0 auto;
    margin-top: 81px;
    position: relative;
`

const Background = styled(GatsbyImage)`
    width: 100%;
    height: 100%;
    min-height: 510px;

    &::after{
        content: "";
        background: #000000;
        opacity: 0.34;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
`
const Card = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    text-align: center;
    max-width: 760px;
    padding: 0 32px;
    width: 100%;
    box-sizing: border-box;
    .h4{
        margin-bottom: 8px;
        color: var(--color-white);
        font-size: clamp(14px, 2.08vw, 18px);
    }
    
    .h1{
        color: var(--color-white);
        font-size: clamp(20px, 3.38vw, 32px);
    }
`