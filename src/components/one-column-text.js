import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function OneColumnText({ data: { sectionTitle, subTitle, text, boldText }, alternative }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <h2 className="line h4">{sectionTitle}</h2>
                    <h3 className="h1">{subTitle}</h3>
                    {alternative
                        ? <>
                            <p className="p bold">{text}</p>
                            <p className="p">{boldText}</p>
                        </>
                        : <>
                            <p className="p">{text}</p>
                            <p className="p bold">{boldText}</p>
                        </>
                    }
                </Content>  
            </Container>
        </Wrapper>
    )
}

const Content = styled.div`
    max-width: 740px;
    margin: 0 auto;
`

const Wrapper = styled.section`
    margin-top: var(--margin-section);

    .h4{
        margin-bottom: 16px;
        opacity: .5;
        font-size: clamp(14px, 2.08vw, 18px);
    }

    .h1{
        margin-bottom: clamp(16px, 2.6vw, 24px);
        font-size: clamp(20px, 3.38vw, 32px);
    }

    .p{
        margin-bottom: 16px;
        font-size: clamp(14px, 1.95vw, 16px);
    }

    .bold{
        margin: 0;
        font-weight: 400;
        font-size: clamp(14px, 2.08vw, 18px);
        line-height: 151%;
    }

    .bold + .p{
        margin-top: 16px;
    }
`