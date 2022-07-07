import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

export default function Image({ data, index }) {
    return (
        <Wrapper id={index}>
            <Content image={data.image.localFile.childImageSharp.gatsbyImageData} alt={data.image.altText} />
            {data.imageAnnotation
                ? <Text>{data.imageAnnotation}</Text>
                : null}
        </Wrapper>
    )
}

const Wrapper = styled.section`
    max-width: 794px;
    padding: 0 32px;
    box-sizing: border-box;
    margin: 0 auto;
    margin-top: clamp(32px, 6.25vw, 64px);
`

const Content = styled(GatsbyImage)`
    width: 100%;
    height: fit-content;
    max-height: 1000px;
    max-width: fit-content;

    img{
        border-radius: 8px;
    }
`

const Text = styled.p`
    margin-top: 8px;
    font-weight: 300;
    font-size: clamp(10px, 1.43vw, 12px);
    line-height: 220%;
    font-feature-settings: 'ss01' on;
`