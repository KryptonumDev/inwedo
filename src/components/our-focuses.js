import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function OurFocuses({ data: { sectionTitle, subTitle, text, focuses } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <Text>
                        <h2 className="line h4">{sectionTitle}</h2>
                        <p className="h1">{subTitle}</p>
                        <p className="p">{text}</p>
                    </Text>
                    <Grid>
                        {focuses.map(el => (
                            <Item>
                                <GatsbyImage className="image" image={el.focusIconPng.localFile.childImageSharp.gatsbyImageData} alt={el.focusIconPng.altText} />
                                <div>
                                    <h3 className="h4">{el.focusTitle}</h3>
                                    <p className="p">{el.focusText}</p>
                                </div>
                            </Item>
                        ))}
                    </Grid>
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);
`

const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px 64px;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`

const Text = styled.div`
    max-width: 530px;
    .h4{
        margin-bottom: 16px;
        opacity: .5;
        font-size: clamp(14px, 2.08vw, 18px);
    }

    .h1{
        margin-bottom: clamp(16px, 2.6vw, 24px);
        font-size: clamp(20px, 3.38vw, 32px);
    }

    .p{
        font-size: clamp(14px, 1.95vw, 16px);
    }

    @media (max-width: 1024px){
        max-width: 800px;
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
        max-width: 330px;
    }
`

const Item = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 16px;

    .h4{
        margin-bottom: 12px;
        font-size: clamp(14px, 2.08vw, 18px);
    }

    .p{
        font-size: clamp(14px, 1.95vw, 16px);
    }

    .image{
        width: fit-content;
        height: fit-content;
    }
`