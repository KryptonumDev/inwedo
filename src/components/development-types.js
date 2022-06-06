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
                        <TypesItem to={el.button.url}>
                            <Image>
                                <GatsbyImage className="image" image={el.typeIcon.localFile.childImageSharp.gatsbyImageData} alt={el.typeIcon.altText} />
                            </Image>
                            <h3 className="h2">{el.typeTitle}</h3>
                            <p className="h4">{el.typeText}</p>
                            <p className='link' >{el.button.name}</p>
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
        margin-bottom: clamp(8px, 1.5625vw, 16px);
        font-size: clamp(14px, 2.08vw, 18px);
    }

    p.h3{
        max-width: 800px;
        font-size: clamp(20px, 2.86vw, 24px);
    }
`

const TypesGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 768px;
    grid-gap: clamp(32px, 8.3vw, 96px);
    margin: clamp(32px, 6.25vw, 64px) auto 0 auto;

    @media (max-width:480px) {
        grid-template-columns: 1fr;
    }
`

const TypesItem = styled(Link)`
    max-width: 336px;

    .h2{
        margin-bottom: 16px;
        font-size: clamp(16px, 2.6vw, 24px);
    }

    .h4{
        margin-bottom: 16px;
        font-size: clamp(14px, 2.08vw, 18px);
    }

    @media (max-width:480px){
        text-align: center;
        margin: 0 auto;
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

    @media (max-width:480px){
        margin: 0 auto;
        margin-bottom: 32px;
    }
`