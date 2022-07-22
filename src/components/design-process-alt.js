import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"
import Mark from './../images/list-mark.svg'

export default function DesignProcess({ data: { sectionTitle, boldText, plainText, imageUnderTextPart, listItems, listTitle } }) {
    return (
        <Wrapper>
            <Container>
                <h2 className="h4 line">{sectionTitle}</h2>
                <Content>
                    <TextPart>
                        <p className="h3">{boldText}</p>
                        <p className="h4">{plainText}</p>
                        <GatsbyImage className="image" image={imageUnderTextPart.localFile.childImageSharp.gatsbyImageData} alt={imageUnderTextPart.altText} />
                    </TextPart>
                    <div>
                        <ListTitle className="h2">{listTitle}</ListTitle>
                        <List mark={Mark}>
                            {listItems.map(el => (
                                <li>
                                    <img className="image" src={el.listIcon.localFile.publicURL} alt={el.listIcon.altText} />
                                    <div>
                                        <h4 className="h3">{el.title}</h4>
                                        <p className="p">{el.text}</p>
                                    </div>
                                </li>
                            ))}
                        </List>
                    </div>
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);
    .line{
        margin-bottom: 16px;
        opacity: .55;
        font-size: clamp(14px, 2.08vw, 18px);
        line-height: 24px;
        max-width: calc(50% - clamp(24px,4.8325vw,48px));
        box-sizing: border-box;

        @media (max-width: 876px) {
            max-width: 100%;
        }
    }
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
    max-width: 507px;

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
        box-shadow: var(--shadow);
        background-color: var(--color-white);
        img{
            border-radius: 8px;
        }

        @media (max-width: 876px){
            display: block;
        }
    }
`

const ListTitle = styled.h3`
    font-size: clamp(16px, 2.47vw, 24px) !important;
`

const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: clamp(32px, 6.25vw, 64px);
    margin-top: clamp(32px, 6.25vw, 64px);

    .h3{
        margin-bottom: 8px;
        font-size: clamp(14px, 2.08vw, 20px);
    }

    .p{
        font-size: clamp(14px, 1.95vw, 16px);
    }

    li{
        font-feature-settings: 'ss01' on;
        position: relative;
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 32px;

        .image{
            width: 48px;
            height: 48px;
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