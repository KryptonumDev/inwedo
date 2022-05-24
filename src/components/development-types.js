import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function DevelopmentTypes({ data: { sectionTitle, text, types } }) {
    return (
        <Wrapper>
            <Container>
                <h2 className="h4 line">{sectionTitle}</h2>
                <p className="h3">{text}</p>
                <TypesGrid>
                    {types.map(el => (
                        <TypesItem>
                            <Image>
                                <GatsbyImage className="image" image={el.typeIcon.localFile.childImageSharp.gatsbyImageData} alt={el.typeIcon.altText} />
                            </Image>
                            <h3 className="h2">{el.typeTitle}</h3>
                            <p className="h4">{el.typeText}</p>
                            <Link className='link' to={el.button.url}>{el.button.name}</Link>
                        </TypesItem>
                    ))}
                </TypesGrid>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);

    .h4.line{
        opacity: .5;
    }

    p.h3{
        max-width: 800px;
    }
`

const TypesGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 768px;
    grid-gap: 96px;
    margin: 64px auto 0 auto;
`

const TypesItem = styled.div`
    max-width: 336px;

    .h2{
        margin-bottom: 16px;
    }

    .h4{
        margin-bottom: 16px;
    }
`

const Image = styled.div`
    width: fit-content;
    margin-bottom: 32px;
    padding: 12px 18px;
    border-radius: 8px;
    background-color: var(--color-white);
    filter: var(--shadow);

    .image{
        width: 100%;
        max-width: 64px;
        aspect-ratio: 1/1;
    }
`