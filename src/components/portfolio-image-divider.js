import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function ImageDivider({ data: { imageDivider } }) {
    return (
        <Wrapper>
            <GatsbyImage className="image" image={imageDivider.localFile.childImageSharp.gatsbyImageData} />
        </Wrapper>
    )
}

const Wrapper = styled.section`
    width: fit-content;
    margin: 0 auto;
    margin-top: var(--margin-section);
    .image{
        width: 100vw;
        height: fit-content;
        height: clamp(316px, 50vw, 460px);
    }
`