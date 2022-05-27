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
    grid-gap: 64px;
    grid-template-columns: 1fr 1fr;
`

const Grid = styled.div`
    display: grid;
    grid-gap: 24px;
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
        margin-bottom: 50px;
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
            }

            &::before{
                content: url(${props => props.mark});
                position: absolute;
                left: 0;
                top: 5px;
            }
        }
`