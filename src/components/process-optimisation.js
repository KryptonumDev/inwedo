import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function ProcessOptimisation({ data: { sectionTitle, boldText, plainText, optimisationRows } }) {
    return (
        <Wrapper>
            <Container>
                <h2 className="h4 line">{sectionTitle}</h2>
                <p className="h1">{boldText}</p>
                <p className="text">{plainText}</p>
                <Rows>
                    {optimisationRows.map(el => (
                        <Row>
                            {el.rowItems.map(innerEl => (
                                <Item>
                                    <GatsbyImage className="image" image={innerEl.optimisationIcon.localFile.childImageSharp.gatsbyImageData} alt={innerEl.optimisationIcon.altText} />
                                    <p>{innerEl.title}</p>
                                </Item>
                            ))}
                        </Row>
                    ))}
                </Rows>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);

    .line{
        opacity: .5;
        margin-bottom: 12px;
    }

    .h1{
        margin-bottom: 16px;
    }

    .text{
        font-weight: 300;
        font-size: 20px;
        line-height: 151%;
        margin-bottom: 64px;
    }
`

const Rows = styled.div`
    display: grid;
    grid-gap: 32px;
`

const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 32px;

    &:nth-child(2n){
        margin-right: -70px;
        margin-left: 70px;
    }

    &:nth-child(2n + 1){
        margin-left: -70px;
        margin-right: 70px;
    }
`

const Item = styled.div`
    padding: 28px 16px;
    background-color: var(--color-white);
    border-radius: 8px;
    filter: var(--shadow);
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 50px1;
    
    .image{
        width: fit-content;
        height: fit-content;
        max-width: 50px;
    }

    p{
        font-weight: 400;
        font-size: 20px;
        line-height: 151%;
        margin-bottom: 0;
        text-align: center;
    }
`