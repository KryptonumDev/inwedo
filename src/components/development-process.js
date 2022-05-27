import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function DevelopmentProcess({ data: { sectionTitle, processSteps } }) {
    return (
        <Wrapper>
            <Container>
                <Title className="h2">{sectionTitle}</Title>
                <Flex count={processSteps.length}>
                    {processSteps.map(el => (
                        <Item>
                            <div className="image-wrap">
                                <GatsbyImage className="image" image={el.stepIcon.localFile.childImageSharp.gatsbyImageData} alt={el.stepIcon.altText} />
                            </div>
                            <h3 className="h4">{el.stepTitle}</h3>
                        </Item>
                    ))}
                </Flex>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);
`

const Title = styled.h2`
    text-align: center;
    max-width: 860px;
    margin: 0 auto 50px auto;
    padding-top: 16px;
    position: relative;

    &::before{
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 0;
        width: 40px;
        height: 1px;
        background-color: var(--color-black);
    }
`

const Flex = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.count}, 1fr);
    grid-gap: 32px;
    position: relative;

    &::before{
        content: "";
        position: absolute;
        left: 60px;
        right: 60px;
        top: 43px;
        height: 1px;
        background: var(--color-accent);
        opacity: .1;
    }
`

const Item = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    .image-wrap{
    width: 86px;
    aspect-ratio: 1/1;
    border-radius: 8px;
    background-color: var(--color-white);
    filter: var(--shadow);
    margin-bottom: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

        .image{
            width: fit-content;
            height: fit-content;
            max-width: 43px;
        }
    }
`