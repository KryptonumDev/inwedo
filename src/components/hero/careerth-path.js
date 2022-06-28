import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

export default function Hero({ data: { image, pageTitle, text, button } }) {
    return (
        <Wrapper>
            <Background image={image.localFile.childImageSharp.gatsbyImageData} alt={image.altText} />
            <Card>
                <h1 className="h1">{pageTitle}</h1>
                <p className="h4">{text}</p>
                <Link className="button" to={button.url}>{button.name}</Link>
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
    max-width: 980px;
    padding: 0 32px;
    width: 100%;
    box-sizing: border-box;

    .h1{
        margin-bottom: 16px;
        color: var(--color-white);
        font-size: clamp(20px, 3.38vw, 32px);
    }

    .h4{
        color: var(--color-white);
        font-size: clamp(14px, 2.08vw, 18px);
        max-width: 730px;
        margin: 0 auto  ;
    }

    .button{
        margin: 32px auto 0 auto;
    }
    
`