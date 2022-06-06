import React from "react"
import styled from "styled-components"
import { Container } from "../../style"
import Mark from './../../images/list-mark.svg'
import Cirkle from './../../images/cirkle-mark.svg'

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
                    <Card cirkle={Cirkle} mark={Mark} dangerouslySetInnerHTML={{ __html: list }} />
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

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`

const TextPart = styled.div`
    max-width: 600px;

    .h4{
        opacity: .5;
        margin-bottom: 16px;
        font-size: clamp(14px, 2.08vw, 18px);
    }

    .h1{
        margin-bottom: clamp(16px, 2.6vw, 24px);
        font-size: clamp(20px, 2.86vw, 24px);
    }

    .p{
        font-size: clamp(14px, 1.95vw, 16px);
    }
`

const Card = styled.div`
    padding: clamp(42px, 6.9vw, 64px) clamp(30px, 6.11vw, 64px);
    position: relative;
    min-width: fit-content;
    width: 100%;
    max-width: 600px;

    @media (max-width: 500px){
        width: unset;
    }

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

        @media (max-width: 1024px) {
            width: 100%;
        }
    }

    p{
        margin-bottom: 24px;
        font-weight: 400;
        font-size: clamp(14px, 2.08vw, 18px);
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
            font-size: clamp(14px, 1.95vw, 16px);
            line-height: 150%;
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

    ol{
        display: grid;
        grid-gap: 24px;
        li{
            padding-left: 40px;
            font-weight: 300;
            font-size: clamp(14px, 1.95vw, 16px);
            line-height: 150%;
            font-feature-settings: 'ss01' on;
            position: relative;

            &::before{
                content: url(${props => props.cirkle});
                position: absolute;
                left: 0;
                top: 0;
            }
        }
    }
`