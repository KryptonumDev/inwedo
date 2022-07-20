import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React, { useEffect } from "react"
import styled from "styled-components"
import { Container } from "../style"
import { datalayerPush } from './../helpers/datalayer'

export default function Services({ data: { card, clientsTitle, clientsItems, sectionTitle, sectionText, items }, analytics }) {

    useEffect(() => {
        datalayerPush(analytics(items))
    }, [analytics, items])

    return (
        <Wrapper>
            <Card>
                <div class='clutch-widget' data-nofollow='true' data-url='https://widget.clutch.co' data-widget-type='2' data-height='45' data-clutchcompany-id='88412'></div>
            </Card>
            <Container>
                <h2 className="h3 title">{clientsTitle}</h2>
                <Clients count={clientsItems.length}>
                    {clientsItems.map(el => (
                        <div className="item">
                            <img src={el.logoClients.localFile.publicURL} alt={el.logoClients.altText} />
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
    position: relative;
    max-width: 1920px;
    margin: 0 auto;
    margin-top: var(--margin-xl);

    @media (max-width: 1024px) {
        margin-top: 20px;
    }

    @media (max-width: 640px){
        margin-top: 8px;
    }

    .h3.title{
        margin-bottom: 32px;
        font-size: clamp(18px, 2.734375vw, 24px);

        @media (max-width: 640px) {
            text-align: center;
        }
    }

    .h4.title{
        margin-bottom: clamp(8px, 1.5625vw, 16px);
        opacity: .55;
        font-size: clamp(14px, 2.08vw, 18px);
    }

    .h1{
        margin-bottom: clamp(56px, 7.29vw, 64px);
        font-size: clamp(20px, ${26 / 768 * 100}vw, 32px);
        max-width: 82%;

        @media (max-width: 640px) {
            max-width: unset;
        }
    }
`

const Card = styled.div`
    display: block;
    position: absolute;
    right: -100px;
    top: 0;
    border-radius: 24px;
    background-color: var(--color-white);
    box-shadow: var(--shadow);
    padding: 36px 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform .2s cubic-bezier(0.39, 0.575, 0.565, 1);

    &:hover{
        transform: translateX(-6px);
    }

    @media (max-width: 1240px) {
        padding: 24px 16px;
        right: -100px;
        top: -32px;
    }

    @media (max-width: 1024px) {
        position: relative;
        right: unset;
        width: fit-content;
        top: unset;
        width: 200px;
        margin: 0 var(--margin-m);
        margin-bottom: 8px;
        &:hover{
            transform: translateY(-3px);
        }
    }

    @media (max-width: 640px) {
        margin: 0 auto 8px auto;
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

        img{
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
        padding: 0 16px;
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
    transition: transform .2s cubic-bezier(0.39, 0.575, 0.565, 1);

    &:hover{
        transform: translateY(-6px);

        .link{
            &::after{
                width: 100%;
            }
        }
    }

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
        text-transform: uppercase;

        &::before{
            height: 1px;
        }
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