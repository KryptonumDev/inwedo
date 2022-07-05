import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"
import Mark from './../images/cirkle-mark.svg'

export default function DesignProcess({ data: { sectionTitle, subTitle, text, imageUnderTextPart, listOnRightSide } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <TextPart>
                        <h2 className="h4 line">{sectionTitle}</h2>
                        <p className="h3">{subTitle}</p>
                        <p className="h4">{text}</p>
                        <GatsbyImage className="image" image={imageUnderTextPart.localFile.childImageSharp.gatsbyImageData} alt={imageUnderTextPart.altText} />
                    </TextPart>
                    <Grid>
                        <List mark={Mark}>
                            {listOnRightSide.leftItems.map(el => (
                                <li>
                                    <h3 className="h4">{el.title}</h3>
                                    <p className="p">{el.text}</p>
                                </li>
                            ))}
                        </List>
                        <List mark={Mark}>
                            {listOnRightSide.rightItems.map(el => (
                                <li>
                                    <h3 className="h4">{el.title}</h3>
                                    <p className="p">{el.text}</p>
                                </li>
                            ))}
                        </List>
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
    grid-gap: clamp(48px, 7.29vw, 64px);
    grid-template-columns: 1fr 1fr;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`

const Grid = styled.div`
    display: grid;
    grid-gap: 24px;
    grid-template-columns: 1fr 1fr;
    margin-top: 40px;

    @media (max-width: 1024px) {
        margin-top: 0;
    }

    @media (max-width: 540px) {
        grid-template-columns: 1fr;
    }
`

const TextPart = styled.div`
    .line{
        margin-bottom: 16px;
        opacity: .5;
        font-size: clamp(14px, 2.08vw, 18px);
        line-height: 24px;
    }

    .h3{
        margin-bottom: 16px;
        font-size: clamp(20px, 3.38vw, 32px);
    }

    p.h4{
        margin-bottom: 50px;
        font-weight: 300;
        font-size: clamp(14px, 2.47vw, 24px);
    }

    .image{
        box-shadow: var(--shadow);
        background-color: var(--color-white);
        img{
            border-radius: 8px;
        }

        @media (max-width: 1024px){
            display: block;
        }
    }
`

const List = styled.ul`
    display: grid;
    grid-gap: 32px;

    .h3{
        margin-bottom: 8px;
    }

        li{
            padding-left: 30px;
            font-feature-settings: 'ss01' on;
            position: relative;

            h3{
                margin-bottom: 8px;
                font-size: clamp(14px, 2.08vw, 18px);
            }

            p{
                font-size: clamp(14px, 1.95vw, 16px);
            }

            &::before{
                content: url(${props => props.mark});
                position: absolute;
                left: 0;
                top: 5px;
            }
        }
`