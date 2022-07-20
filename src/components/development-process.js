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
                                <img className="image" src={el.stepIcon.localFile.publicURL} alt={el.stepIcon.altText} />
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
    margin: 0 auto clamp(32px, 5.46vw, 50px) auto;
    padding-top: 16px;
    position: relative;

    &.h2{
        font-size: clamp(20px, 2.86vw, 24px);
    }

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

    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr;
        width: fit-content;
        margin: 0 auto;

        &::before{
            display: none;
        }
    }

    @media (max-width: 500px) {
        grid-template-columns: 1fr 1fr;
    }
`

const Item = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    .h4{
        font-size: clamp(14px, 2.08vw, 18px);
        text-align: center;
    }

    @media (max-width: 1024px) {
        width: fit-content;
        margin: 0 auto;
    }

    .image-wrap{
        width: clamp(64px, 9.765vw, 86px);
        height: clamp(64px, 9.765vw, 86px);
        border-radius: 8px;
        background-color: #fff;
        z-index: 10;
        box-shadow: var(--shadow);
        margin-bottom: clamp(24px, 5.46vw, 60px);
        display: flex;
        justify-content: center;
        align-items: center;

        .image{
            width:  clamp(30px, 4.8vw, 44px);
            height:  clamp(30px, 4.8vw, 44px);
        }
    }
`