import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function OurValues({ data: { sectionTitle, values } }) {
    return (
        <Wrapper>
            <Container>
                <Title className="h3">{sectionTitle}</Title>
                <Grid>
                    {values.map(el => (
                        <Card>
                            <GatsbyImage className="image" image={el.valueIcon.localFile.childImageSharp.gatsbyImageData} alt={el.valueIcon.altText} />
                            <div>
                                <h3>{el.valueTitle}</h3>
                                <p className="h4">{el.valueText}</p>
                            </div>
                        </Card>
                    ))}
                </Grid>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);
`

const Title = styled.h2`
    text-align: center;
    position: relative;
    padding: 16px 0;
    max-width: 850px;
    margin: 0 auto 92px auto;

    &::before{
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 0;
        width: 40px;
        height: 1px;
        background-color: var(--color-black);
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px 80px;
`

const Card = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 24px;

    .image{
        width: 80px;
        aspect-ratio: 1/1;
    }

    h3{
        margin-bottom: 12px;
        font-weight: 400;
        font-size: 20px;
        line-height: 151%;
    }

    p{
        font-weight: 300;
    }
`