import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function CardsWithTitle({ data: { sectionTitle, text, cards } }) {
    return (
        <Wrapper>
            <Container>
                <h2 className="h2">{sectionTitle}</h2>
                <p className="p">{text}</p>
                <Grid>
                    {cards.map(el => (
                        <Item>
                            <GatsbyImage className="image" image={el.icon.localFile.childImageSharp.gatsbyImageData} alt={el.icon.altText} />
                            <div>
                                <h3 className="h2">{el.cardTitle}</h3>
                                <Link className="link" to={el.button.url}>{el.button.name}</Link>
                            </div>
                        </Item>
                    ))}
                </Grid>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin: var(--margin-section);

    h2{
        text-align: center;
        max-width: 860px;
        margin: 0 auto 0 auto;
        padding-top: 16px;
        position: relative;

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
        margin-bottom: 16px;
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 64px;
`

const Item = styled.div`
    border-radius: 8px;
    filter: var(--shadow);
    background-color: var(--color-white);
    padding: 82px 54px;

    display: grid;
    grid-template-columns: 115px 1fr;
    grid-gap: 32px;

    h3{
        margin-bottom: 16px;
    }

    .image{
        width: 115px;
        aspect-ratio: 1/1;
    }
`