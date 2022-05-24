import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function ImageDivider({ data: { sectionTitle, imageDivider } }) {
    return (
        <Wrapper>
            <Container>
                <h2 className="h2">{sectionTitle}</h2>
                <GlassCard>
                    <GatsbyImage className="image" image={imageDivider.localFile.childImageSharp.gatsbyImageData} alt={imageDivider.altText} />
                </GlassCard>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);

    h2{
        text-align: center;
        max-width: 860px;
        margin: 0 auto 0 auto;
        padding-top: 16px;
        position: relative;

        &::before{
            content: "";
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 0;
            width: 40px;
            height: 1px;
            background-color: var(--color-black);
        }
    }
`

const GlassCard = styled.div`
    border-radius: 24px;
    background-color: var(--color-white);
    filter: var(--shadow);
    margin-top: 32px;
    padding: 16px 64px;
    display: flex;
    justify-content: center;
    align-items: center;
`