import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"
import Mark from './../images/list-mark.svg'

export default function DesignProcess({ data: { sectionTitle, boldText, plainText, imageUnderTextPart, listItems } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <TextPart>
                        <h2 className="h4 line">{sectionTitle}</h2>
                        <p className="h3">{boldText}</p>
                        <p className="h4">{plainText}</p>
                        <GatsbyImage className="image" image={imageUnderTextPart.localFile.childImageSharp.gatsbyImageData} alt={imageUnderTextPart.altText} />
                    </TextPart>
                    <List mark={Mark}>
                        {listItems.map(el => (
                            <li>
                                <h3 className="h3">{el.title}</h3>
                                <p className="p">{el.text}</p>
                            </li>
                        ))}
                    </List>
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
    grid-gap: clamp(48px, 9.375vw, 96px);
    grid-template-columns: 1fr 1fr;

    @media (max-width: 876px) {
        grid-template-columns: 1fr;
    }
`

const TextPart = styled.div`
    .line{
        margin-bottom: 16px;
        opacity: .5;
        font-size: clamp(14px, 2.08vw, 18px);
    }

    .h3{
        margin-bottom: 16px;
        font-size: clamp(20px, 2.86vw, 24px);
    }

    p.h4{
        margin-bottom: clamp(48px, 7.29vw, 64px);
        font-weight: 300;
        font-size: clamp(14px, 2.08vw, 18px);
    }

    .image{
        border-radius: 8px;
        box-shadow: var(--shadow);
        background-color: var(--color-white);

        @media (max-width: 876px){
            display: block;
        }
    }
`

const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 32px;

    .h3{
        margin-bottom: 8px;
        font-size: clamp(14px, 2.47vw, 24px);
    }

    .p{
        font-size: clamp(14px, 1.95vw, 16px);
    }

    li{
        padding-left: 40px; 
        font-feature-settings: 'ss01' on;
        position: relative;

        &::before{
            content: url(${props => props.mark});
            position: absolute;
            left: 0;
            top: 5px;
        }
    }

    @media (max-width: 876px){
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 580px){
        grid-template-columns: 1fr;
        max-width: 400px;
    }
`