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
    min-height: 570px;
    margin: 0 auto;
    margin-top: 81px;
    position: relative;
`

const Background = styled(GatsbyImage)`
    width: 100%;
    height: 100%;

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
    margin: 0 auto;
    .h4{
        margin-bottom: 8px;
        color: var(--color-white);
    }
    
    .h1{
        color: var(--color-white);
    }
`