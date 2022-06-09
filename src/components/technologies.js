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
                        <Card to={el.button.url}>
                            <GatsbyImage className="image" image={el.cardIcon.localFile.childImageSharp.gatsbyImageData} alt={el.cardIcon.altText} />
                            <div>
                                <h3 className="h3">{el.cardTitle}</h3>
                                <p className="p">{el.cardText}</p>
                                <p className="link">{el.button.name}</p>
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
        margin-bottom: clamp(8px, 1.5625vw, 16px);
        opacity: .5;
        font-size: clamp(14px, 2.08vw, 18px);
    }

    .h1{
        margin-bottom: clamp(32px, 5.2vw, 48px);
        font-size: clamp(20px, 2.86vw, 24px);
    }
`

const CardsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: clamp(32px, 6.25vw, 64px);

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const Card = styled(Link)`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: clamp(16px, 3.125vw, 32px);
    padding: clamp(24px, 5.7vw, 64px) 24px;
    justify-content: space-between;
    background-color: var(--color-white);
    box-shadow: var(--shadow);
    border-radius: 8px;

    .image{
        width: clamp(60px, 11.3vw, 115px);
        aspect-ratio: 1/1;
    }

    .h3{
        margin-bottom: clamp(8px, 1.5625vw, 16px);
        font-size: clamp(14px, 2.86vw, 24px);
    }

    .p{
        margin-bottom: clamp(8px, 1.5625vw, 16px);
        font-size: clamp(12px, 1.82vw, 16px);
    }
`