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
    grid-gap: 64px 32px;
`

const Text = styled.div`
    max-width: 530px;
    .h4{
        margin-bottom: 16px;
        opacity: .5;
    }

    .h1{
        margin-bottom: 32px;
    }

    .p{
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 48x;
`

const Item = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 16px;

    .h4{
        margin-bottom: 12px;
    }

    .p{

    }

    .image{
        width: fit-content;
        height: fit-content;
    }
`