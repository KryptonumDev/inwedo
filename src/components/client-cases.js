import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function ClientCases({ data: { sectionTitle, clientsCases, card } }) {
    return (
        <Wrapper>
            <Card to={card.cardLink}>
                <GatsbyImage className="image" image={card.cardImage.localFile.childImageSharp.gatsbyImageData} alt={card.cardImage.altText} />
            </Card>
            <Container>
                <h2 className="h4">{sectionTitle}</h2>
                <Clients count={clientsCases.length}>
                    {clientsCases.map(el => (
                        <div className="item">
                            <GatsbyImage className='image' image={el.logoClients.localFile.childImageSharp.gatsbyImageData} alt={el.logoClients.altText} />
                        </div>
                    ))}
                </Clients>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);
    position: relative;

    .h4{
        margin-bottom: 32px;
        text-align: center;
    }
`

const Clients = styled.div`
    filter: grayscale(1);
    display: grid;
    align-items: center;
    grid-template-columns: repeat(${props => props.count}, auto);
    grid-gap: clamp(16px, 4.1vw, 64px);
    width: fit-content;
    margin: 0 auto;

    .item{
        display: flex;
        align-items: center;
        justify-content: center;

        .image{
            width: fit-content;
            height: fit-content;
        }
    }

    @media (max-width: 640px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;
    }

    @media (max-width: 340px) {
        grid-template-columns: 1fr 1fr;
    }
`

const Card = styled(Link)`
    display: block;
    position: absolute;
    right: -16px;
    top: 0;
    border-radius: 24px;
    background-color: var(--color-white);
    filter: var(--shadow);
    padding: 36px 24px;
    display: flex;
    justify-content: center;
    align-items: center;

    .image{
        width: fit-content;
        height: fit-content;
        max-width: 192px;
    }

    @media (max-width: 1400px) {
        .image{
            max-width: 150px;
        }
        padding: 24px 16px;
        right: -8px;
        top: -32px;
    }

    @media (max-width: 1200px) {
        .image{
            max-width: 100px;
        }
        padding: 16px;
        top: -56px;
    }

    @media (max-width: 640px) {
        right: unset;
        left: 50%;
        transform: translateX(-50%);
    }
`