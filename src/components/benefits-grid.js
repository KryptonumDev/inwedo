import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function BenefitsGrid({ data: { benefits } }) {
    return (
        <Wrapper>
            <Container>
                <Grid>
                    {benefits.map(el => (
                        <Item>
                            <GatsbyImage className="image" image={el.benefitIcon.localFile.childImageSharp.gatsbyImageData} alt={el.benefitIcon.altText} />
                            <div>
                                <h3 className="">{el.benefitTitle}</h3>
                                <p>{el.benefitText}</p>
                            </div>
                        </Item>
                    ))}
                </Grid>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: clamp(32px, 6.25vw, 64px);
    max-width: 1050px;
    margin: 0 auto;

    @media (max-width: 580px) {
        grid-template-columns: 1fr;
        max-width: 400px;
    }
`

const Item = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 16px;

    h3{
        font-weight: 400;
        font-size: clamp(14px, 2.21w, 20px);
        line-height: 151%;
        margin-bottom: 12px;
    }

    p{
        font-weight: 300;
        font-size: clamp(14px, 2.08vw, 18px);
        line-height: 151%;
    }

    .image{
        width: fit-content;
        height: fit-content;
    }
`