import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function Services({ data: { clientsTitle, clientsItems, sectionTitle, sectionText, items } }) {
    return (
        <Wrapper>
            <Container>
                <h2 className="h3">{clientsTitle}</h2>
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
                        <Item>
                            <PreviewImg image={el.previewImg.localFile.childImageSharp.gatsbyImageData} alt={el.previewImg.altText} />
                            <ItemContent>
                                <h3 className="line h5">{el.title}</h3>
                                <p className="h3">{el.subTitle}</p>
                                <p className="p">{el.text}</p>
                                <Link className="link" to={el.button.url}>{el.button.name}</Link>
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

    .h3{
        margin-bottom: 32px;
    }

    .title{
        margin-bottom: 16px;
        color: var(--color-black);
        opacity: .5;
    }

    .h1{
        margin-bottom: 64px;
    }
`

const Clients = styled.div`
    margin-bottom: 64px;
    filter: grayscale(1);
    display: flex;

    gap: 32px;

    .item{
        display: flex;
        align-items: center;
    }
`

const Repeater = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
`

const Item = styled.div`
    backdrop-filter: blur(140px);
    border-radius: 8px;
    background-color: #fff;
    filter: var(--shadow);
`

const PreviewImg = styled(GatsbyImage)`
    width: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`

const ItemContent = styled.div`
    padding: 32px 32px 48px 32px;
    .h5{
        margin-bottom: 8px;
    }
    .h3{
        margin-bottom: 8px;
    }
    .p{
        margin-bottom: 16px;
    }

    .line{
        padding-left: 24px;
        &::before{
            width: 16px;
        }
    }
`