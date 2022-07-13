import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function OurValues({ data: { sectionTitle, ourValues } }) {
    return (
        <Wrapper>
            <Container>
                <Title>{sectionTitle}</Title>
                <Grid>
                    {ourValues.map(el => (
                        <Item>
                            <img className="image" src={el.icon.localFile.publicURL} alt={el.icon.altText} />
                            <div>
                                <h3 className="">{el.title}</h3>
                                <p className="p">{el.text}</p>
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
`

const Title = styled.h2`
    text-align: center;
    position: relative;
    padding: 16px 0 0 0;    
    max-width: 540px; 
    margin: 0 auto clamp(32px, 6.25vw, 64px) auto;
    font-size: clamp(16px, 3.125vw, 24px);
    font-weight: 400;
    line-height: 151%;


    &::before{
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 0;
        width: 40px;
        height: 1px;
        background-color: var(--color-black);
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px clamp(32px, ${32 / 768 * 100}vw, 80px);

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
        max-width: 440px;
    }
`

const Item = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: clamp(16px, ${20 / 768 * 100}vw, 24px);

    h3{
        margin-bottom: 12px;
        font-weight: 400;
        font-size: clamp(14px, ${17 / 768 * 100}vw, 20px);
        line-height: 151%;
    }

    p{
        font-size: clamp(14px, ${16 / 768 * 100}vw, 18px);
    }

    .image{
        max-width: clamp(40px, ${60 / 768 * 100}vw, 80px);
        height: fit-content;
    }
`