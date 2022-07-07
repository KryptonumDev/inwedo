import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function Services({ data: { card, clientsTitle, clientsItems, sectionTitle, sectionText, items } }) {
    return (
        <Wrapper>
            <Card href={card.cardLink} target="_blank" rel="noopener noreferrer">
                <GatsbyImage className="image" image={card.cardImage.localFile.childImageSharp.gatsbyImageData} alt={card.cardImage.altText} />
            </Card>
            <Container>
                <h2 className="h3 title">{clientsTitle}</h2>
                <Clients count={clientsItems.length}>
                    {clientsItems.map(el => (
                        <div className="item">
                            <GatsbyImage image={el.logoClients.localFile.childImageSharp.gatsbyImageData} alt={el.logoClients.altText} />
                        </div>
                    ))}
                </Clients>
                <h2 className="line h4 title">{sectionTitle}</h2>
                <p className="h1">{sectionText}</p>
                <Repeater>
                    {items.map(el => (
                        <Item to={el.button.url}>
                            <PreviewImg image={el.previewImg.localFile.childImageSharp.gatsbyImageData} alt={el.previewImg.altText} />
                            <ItemContent>
                                <h3 className="line h5">{el.title}</h3>
                                <p className="h3">{el.subTitle}</p>
                                <p className="p">{el.text}</p>
                                <p className="link">{el.button.name}</p>
                            </ItemContent>
                        </Item>
                    ))}
                </Repeater>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-xl);
    position: relative;

    .h3.title{
        margin-bottom: 32px;
        font-size: clamp(18px, 2.734375vw, 24px);

        @media (max-width: 640px) {
            text-align: center;
        }
    }

    .h4.title{
        margin-bottom: clamp(8px, 1.5625vw, 16px);
        color: var(--color-black);
        opacity: .5;
        font-size: clamp(14px, 2.08vw, 18px);
    }

    .h1{
        margin-bottom: clamp(56px, 7.29vw, 64px);
        font-size: clamp(20px, 3.3854vw, 32px);
        max-width: 1040px;
    }
`

const Card = styled.a`
    display: block;
    position: absolute;
    right: -16px;
    top: 0;
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

    @media (max-width: 1240px) {
        .image{
            max-width: 150px;
        }
        padding: 24px 16px;
        right: -8px;
        top: -32px;
    }

    @media (max-width: 1024px) {
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
        border-radius: 8px;
    }
`

const Clients = styled.div`
    margin-bottom: clamp(16px, 5.2vw, 64px);
    filter: grayscale(1);
    display: flex;

    gap: 32px;

    .item{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 640px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;
        padding: 0 50px;
    }

    @media (max-width: 340px) {
        grid-template-columns: 1fr 1fr;
    }
`

const Repeater = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: clamp(32px, ${54 / 1440 * 100}vw, 54px);

    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 32px;
    }

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
        width: fit-content;
        margin: 0 auto;
    }
`

const Item = styled(Link)`
    border-radius: 8px;
    background-color: #fff;
    box-shadow: var(--shadow);

    @media (max-width: 640px) {
        max-width: 500px;    
    }
`

const PreviewImg = styled(GatsbyImage)`
    width: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`

const ItemContent = styled.div`
    padding: 32px 30px clamp(24px, ${36 / 768 * 100}vw, 48px) 30px;

    .h5{
        margin-bottom: 8px;
        font-size: clamp(10px, 1.43vw, 12px);
    }
    .h3{
        margin-bottom: 8px;
        font-size: clamp(20px, 2.86vw, 24px);
    }
    .p{
        margin-bottom: 16px;
        font-size: clamp(14px, 1.95vw, 16px);
    }

    .line{
        padding-left: 24px;
        &::before{
            width: 16px;
        }
    }
`