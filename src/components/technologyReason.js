import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function ReasonsToUse({ data: { sectionTitle, reasons } }) {
    return (
        <Wrapper>
            <Container>
                <h2 className="h2">{sectionTitle}</h2>
                <Grid>
                    {reasons.map(el => (
                        <Item>
                            <GatsbyImage className="image" image={el.reasonIcon.localFile.childImageSharp.gatsbyImageData} alt={el.reasonIcon.altText} />
                            <h3>{el.reasonTitle}</h3>
                        </Item>
                    ))}
                </Grid>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);

    .h2{
        font-size: clamp(16px, 2.6vw, 24px);
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: clamp(16px, 3.125vw, 32px);
    margin-top: 32px;

    @media (max-width: 876px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 540px) {
        grid-template-columns: 1fr;
    }
`

const Item = styled.div`
    border-radius: 8px;
    background-color: var(--color-white);
    filter: var(--shadow);
    padding: 32px 29px;

    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 32px;
    align-items: center;

    .image{
        width: fit-content;
        height: fit-content;
        max-width: 32px;
    }

    h3{
        font-weight: 400;
        font-size: clamp(14px, 2.21vw, 20px);
        line-height: 151%;
    }
`