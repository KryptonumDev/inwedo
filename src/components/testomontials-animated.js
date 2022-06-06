import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function TestomontialsAnimated({ data: { text, seectionTitle, testomontialsFirstRow, testomontialsSecondRow } }) {
    return (
        <Wrapper>
            <Container>
                <Text className="h3">{text}</Text>
                <Title className="h4">{seectionTitle}</Title>
            </Container>
            <Row>

            </Row>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);
`

const Text = styled.p`
    text-align: center;
    position: relative;
    padding: 16px 0 0 0;    
    max-width: 850px;
    margin: 0 auto 3px auto;
    font-size: clamp(20px, 2.86vw, 24px);

    &::before{
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 0;
        width: 40px;
        height: 1px;
        background-color: var(--color-black);
    }
`

const Title = styled.h2`
    opacity: .5;
    text-align: center;
    max-width: 850px;
    margin: 0 auto 64px auto;
`

const Row = styled.div`
    margin: 0 auto;
    max-width: 1680px;
    width: calc(100% + 160px);
    transform: translateX(-80px);
`