import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function DesignBenefits({ data: { sectionTitle, text, benefits } }) {
    return (
        <Wrapper>
            <Container>
                <Title>
                    <h2 className="line h4">{sectionTitle}</h2>
                    <p className="h2">{text}</p>
                </Title>
                <Grid>
                    {benefits.map(el => (
                        <Item>
                            <GatsbyImage className="image" image={el.benefitIcon.localFile.childImageSharp.gatsbyImageData} alt={el.benefitIcon.altText} />
                            <div>
                                <h3>{el.benefitTitle}</h3>
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
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 48px;
    margin-top: 48px;
`

const Item = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 32px;

    .image{
        max-width: 48px;
        width: fit-content;
        height: fit-content;
    }

    h3{
        font-weight: 400;
        font-size: 20px;
        line-height: 151%;
        margin-bottom: 12px;
    }

    p{
        font-weight: 300;
        font-size: 18px;
        line-height: 151%;
    }
`

const Title = styled.div`
    .line{
        opacity: .5;
        margin-bottom: 16px;
    }
`