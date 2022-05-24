import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function Technologies({ data: { sectionTitle, text, cards } }) {
    return (
        <Wrapper>
            <Container>
                <h2 className="h4 line">{sectionTitle}</h2>
                <p className="h1">{text}</p>
                <CardsGrid>
                    {cards.map(el => (
                        <Card>
                            <GatsbyImage className="image" image={el.cardIcon.localFile.childImageSharp.gatsbyImageData} alt={el.cardIcon.altText} />
                            <div>
                                <h3 className="h3">{el.cardTitle}</h3>
                                <p className="p">{el.cardText}</p>
                                <Link className="link" to={el.button.url}>{el.button.name}</Link>
                            </div>
                        </Card>
                    ))}
                </CardsGrid>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);

    .h4{
        margin-bottom: 8px;
    }

    .h1{
        margin-bottom: 48px;
    }
`

const CardsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 64px;
`

const Card = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 32px;
    padding: 64px 24px;
    justify-content: space-between;
    background-color: var(--color-white);
    filter: var(--shadow);
    border-radius: 8px;

    .image{
        width: 115px;
        aspect-ratio: 1/1;
    }

    .h3{
        margin-bottom: 16px;
    }

    .p{
        margin-bottom: 16px;
    }
`