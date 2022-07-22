import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

export default function Hero({ data: { pageTitle, text, topImage, button }, location, apply }) {

    let title = pageTitle

    const urlParams = new URLSearchParams(location.search);
    const name = urlParams.get('name')
    
    if(name){
        title = pageTitle.replace('<name>', name)
    } else {
        title = pageTitle.replace(' <name>', '')
    }

    return (
        <Wrapper>
            <GatsbyImage className="image" image={topImage.localFile.childImageSharp.gatsbyImageData} alt={topImage.altText} />
            <div className="content">
                <PageTitle>{title}</PageTitle>
                <Text>{text}</Text>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    position: relative;
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    margin-top: 81px;

    .image{
        width: 100%;
        height: fit-content;
        min-height: 200px;
    }

    .content{
        max-width: 720px;
        padding: 0 24px;
        margin: 0 auto;

        a{
            margin-top: 16px;
        }
    }
`

const PageTitle = styled.h1`
    margin-top: clamp(20px, ${42 / 768 * 100}vw, 64px);
    margin-bottom: clamp(16px, ${20 / 768 * 100}vw, 24px);
    font-weight: 400;
    font-size: clamp(16px, ${24 / 768 * 100}vw, 32px);
    line-height: 151%;
`

const Text = styled.p`
    font-weight: 300;
    font-size: clamp(14px, ${16 / 768 * 100}vw, 18px);
    line-height: 151%;
`