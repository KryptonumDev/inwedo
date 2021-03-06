import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function ClientCases({ data: { sectionTitle, clientsCases, card } }) {
    return (
        <Wrapper>
            <Card aria-label='link to clatch review' href={card.cardLink} target="_blank" rel="noopener noreferrer">
                <img alt={card.cardImage.altText} src={card.cardImage.localFile.publicURL} />
            </Card>
            <Container>
                <h2 className="h4">{sectionTitle}</h2>
                <Clients count={clientsCases.length}>
                    {clientsCases.map(el => (
                        <div className="item">
                            <img className='image' src={el.logoClients.localFile.publicURL} alt={el.logoClients.altText} />
                        </div>
                    ))}
                </Clients>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: clamp(108px, ${108 / 768 * 100}vw, 128px);
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
            max-height: 60px;
            max-width: clamp(60px, ${76 / 768 * 100}vw, 120px);

            @media (max-width: 640px) {
                max-width: 80%;
            }
        }
    }

    @media (max-width: 640px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;
        max-width: 400px;
    }

    @media (max-width: 340px) {
        grid-template-columns: 1fr 1fr;
    }
`

const Card = styled.a`
    display: block;
    position: absolute;
    right: -16px;
    top: -96px;
    border-radius: 24px;
    background-color: var(--color-white);
    box-shadow: var(--shadow);
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
    }

    @media (max-width: 1200px) {
        .image{
            max-width: 100px;
        }
        padding: 16px;
    }

    @media (max-width: 640px) {
        right: unset;
        left: 50%;
        transform: translateX(-50%);
    }
`