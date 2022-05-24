import React from "react"
import styled from "styled-components"
import { Container } from "../../style"
import Mark from './../../images/list-mark.svg'

export default function TwoColumnFlex({ data: { sectionTitle, subTitle, text, list } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <TextPart>
                        <h2 className="line h4">{sectionTitle}</h2>
                        <p className="h1">{subTitle}</p>
                        <p className="p">{text}</p>
                    </TextPart>
                    <Card mark={Mark} dangerouslySetInnerHTML={{ __html: list }} />
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding-top: var(--margin-section);
    overflow-x: hidden;
    padding-bottom: 100px;
    margin-bottom: -100px;
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 32px;
`

const TextPart = styled.div`
    max-width: 600px;

    .h4{
        margin-bottom: 16px;
    }

    .h1{
        margin-bottom: 24px;
    }
`

const Card = styled.div`
    padding: 64px;
    position: relative;

    &::before{
        background-color: var(--color-white);
        filter: var(--shadow);
        border-radius: 24px;
        left: 0;
        top: 0;
        bottom: 0;
        width: 50vw;
        position: absolute;
        content: '';
    }

    p{
        margin-bottom: 24px;
        font-weight: 400;
        font-size: 18px;
        line-height: 151%;
        z-index: 2;
        position: relative;
    }

    ul{
        display: grid;
        grid-gap: 32px;
        li{
            padding-left: 40px;
            font-weight: 300;
            font-size: 16px;
            line-height: 26px;
            font-feature-settings: 'ss01' on;
            position: relative;

            &::before{
                content: url(${props => props.mark});
                position: absolute;
                left: 0;
                top: 0;
            }
        }
    }
`