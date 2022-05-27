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
    grid-gap: 100px;
    grid-template-columns: 1fr 1fr;
`

const TextPart = styled.div`
    .line{
        margin-bottom: 16px;
        opacity: .5;
    }

    .h3{
        margin-bottom: 16px;
    }

    p.h4{
        margin-bottom: 64px;
        font-weight: 300;
    }

    .image{
        border-radius: 8px;
        filter: var(--shadow);
        background-color: var(--color-white);
    }
`

const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 32px;

    .h3{
        margin-bottom: 8px;
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
`