import React from "react"
import styled from "styled-components"
import { Container } from "../../style"

export default function Hero({ data: { pageTitle, boldText, plainText } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <TextPart>
                        <h1 className="h4 line">{pageTitle}</h1>
                        <p className="h1">{boldText}</p>
                        <p className="h3">{plainText}</p>
                    </TextPart>
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    background-color: var(--color-white);
    padding: 160px 0 64px 0;
    border-radius: 24.5221px;
    box-shadow: drop-shadow(0px 76px 74px rgba(0, 0, 0, 0.02));
`

const Content = styled.div`

`

const TextPart = styled.div`
    max-width: 640px;

    .h4{
        margin-bottom: 16px;
        opacity: .5;
    }

    .h1{
        margin-bottom: 16px;
        font-weight: 700;
    }
`