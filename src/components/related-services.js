import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function RelatedServices({ data: { sectionTitle, services } }) {
    return (
        <Wrapper>
            <Container>
                <Title className="h2">{sectionTitle}</Title>
                <Grid>
                    {services.map(el => (
                        <Item>
                            <ImageWrapper>
                                <GatsbyImage className="image" image={el.servisIcon.localFile.childImageSharp.gatsbyImageData} alt={el.servisIcon.altText} />
                            </ImageWrapper>
                            <h3 className="h2">{el.servisTitle}</h3>
                            <p className="h4">{el.servisText}</p>
                            <Link className="link" to={el.button.url}>{el.button.name}</Link>
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
    max-width: 850px;
    margin: 0 auto clamp(32px, 6.25vw, 64px) auto;

    &.h2{
        font-size: clamp(20px, 2.86vw, 24px);
    }

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
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: clamp(16px, 7.29vw, 96px);

    @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 480px) {
        grid-template-columns: 1fr;
        max-width: 280px;
        margin: 0 auto;
        text-align: center;
    }
`

const Item = styled.div`

    .h2{
        margin-bottom: 16px;
        font-weight: 400;
        font-size: clamp(16px, 2.6vw, 24px);
    }

    .h4{
        margin-bottom: 16px;
        font-size: clamp(14px, 2.08vw, 18px);
    }

`

const ImageWrapper = styled.div`
    border-radius: 8px;
    background-color: var(--color-white);
    filter: var(--shadow);
    width: fit-content;
    margin-bottom: 30px;
    width: 120px;
    height: 104px;
    display: flex;
    justify-content: center;
    align-items: center;

    .image{
        max-width: 80px;
        width: fit-content;
        height: fit-content;
    }

    @media (max-width: 480px){
        margin: 0 auto;
        margin-bottom: 30px;
    }
`