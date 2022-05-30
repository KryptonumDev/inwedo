import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function InwedoRole({ data: { sectionTitle, subTitle, text, actions } }) {
    return (
        <Wrapper>
            <Container>
                <TextPart>
                    <h2 className="line h4">{sectionTitle}</h2>
                    <p className="h1">{subTitle}</p>
                    <p className="p">{text}</p>
                </TextPart>
                <Grid count={actions.length}>
                    {actions.map(el => (
                        <Item>
                            <div className="image-wrapper">
                                <GatsbyImage className="image" image={el.actionIcon.localFile.childImageSharp.gatsbyImageData} />
                            </div>
                            <h3 className="h4">{el.actionTitle}</h3>
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

const TextPart = styled.div`
    max-width: 740px;
    margin: 0 auto;

    .h4{
        margin-bottom: 8px;
        opacity:.5;
    }

    .h1{
        margin-bottom: 16px;
    }

    .p{
        margin-bottom: 64px;
    }
`

const Grid = styled.div`
    display: flex;
    gap: 32px;
    width: fit-content;
    margin: 0 auto;
`

const Item = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;

    .h4{
        opacity: 1;
        margin-bottom: 0;
        text-align: center;
    }
    .image-wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;
    }
    .image{
        margin-bottom: 36px;
        width: fit-content;
        max-width: 80px;
        height: fit-content;
    }
`