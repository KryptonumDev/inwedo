import { Link } from "gatsby"
import React, { useEffect } from "react"
import styled from "styled-components"
import { Container } from "../style"
import { datalayerPush } from './../helpers/datalayer'

export default function CardsWithTitle({ data: { sectionTitle, text, cards }, analytics }) {

    useEffect(() => {
        datalayerPush(analytics.inView(cards))
    }, [])

    return (
        <Wrapper>
            <Container>
                <h2 className="h2">{sectionTitle}</h2>
                <p className="p">{text}</p>
                <Grid>
                    {cards.map((el, index) => (
                        <Item key={el.cardTitle} to={el.button.url} onClick={() => { datalayerPush(analytics.onClick(el, index)) }}>
                            <img className="image" src={el.icon.localFile.publicURL} alt={el.icon.altText} />
                            <div>
                                <h3 className="h2">{el.cardTitle}</h3>
                                <span className="link" >{el.button.name}</span>
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

    h2{
        text-align: center;
        max-width: 860px;
        margin: 0 auto 16px auto;
        padding-top: 16px;
        position: relative;
        font-size: clamp(20px, 2.86vw, 24px);

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

    p{
        text-align: center;
        max-width: 600px;
        margin: 0 auto;
        font-size: clamp(14px, 1.95vw, 16px);
    }
`

const Grid = styled.div`
    margin-top: clamp(32px, 5.46vw, 48px);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: clamp(16px, 5.46vw, 64px);

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`

const Item = styled(Link)`
    border-radius: 8px;
    box-shadow: var(--shadow);
    background-color: var(--color-white);
    padding: clamp(32px, 4.68vw, 82px) clamp(16px, 4.68vw, 56px);

    display: grid;
    grid-template-columns: clamp(60px, 11.32vw, 115px) 1fr;
    grid-gap: clamp(16px, 3.125vw, 32px);
    transition: transform .2s cubic-bezier(0.39, 0.575, 0.565, 1);

    &:hover{
        transform: translateY(-6px);

        .link{
            &::after{
                width: 100%;
            }
        }
    }

    h3{
        margin-bottom: clamp(8px, 1.5625vw, 16px);
        font-size: clamp(14px, 2.47vw, 24px);
    }

    .image{
        width: clamp(60px, 11.32vw, 115px);
        height: clamp(60px, 11.32vw, 115px);
    }
`