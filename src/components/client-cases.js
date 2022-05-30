import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function ClientCases({ data: {sectionTitle, clientsCases} }) {
    return (
        <Wrapper>
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
    grid-gap: 64px;
    width: fit-content;
    margin: 0 auto;

    .item{
        display: flex;
        align-items: center;

        .image{
            width: fit-content;
            height: fit-content;
        }
    }
`