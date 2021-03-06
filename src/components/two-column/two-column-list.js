import React from "react"
import styled from "styled-components"
import { Container } from "../../style"
import Mark from './../../images/list-mark.svg'
import Cirkle from './../../images/cirkle-mark.svg'

export default function TwoColumnFlex({ data: { sectionTitle, subTitle, text, list }, webApp }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <TextPart>
                        {sectionTitle
                            ? <h2 className="line h4">{sectionTitle}</h2>
                            : null}
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
    gap: clamp(32px, 5.2vw, 75px);

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`

const TextPart = styled.div`
    max-width: 610px;

    .h4{
        opacity: .55;
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
    padding: clamp(42px, 6.9vw, 64px) 0 clamp(42px, 6.9vw, 64px) clamp(30px, 6.11vw, 64px);
    position: relative;
    width: 100%;
    max-width: 570px;
    min-width: 500px;
    box-sizing: border-box;

    @media (max-width: 1024px) {
        max-width: 610px;
        padding: clamp(42px, 6.9vw, 64px) clamp(30px, 6.11vw, 64px);
        min-width: unset;
    }

    @media (max-width: 500px){
        width: unset;
    }

    &::before{
        background-color: var(--color-white);
        box-shadow: var(--shadow);
        border-radius: 24px;
        left: 0;
        top: 0;
        bottom: 0;
        width: 50vw;
        position: absolute;
        content: '';
        max-width: 750px;

        @media (max-width: 1024px) {
            width: 100%;
        }
    }

    p{
        font-weight: 500;
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

    p+ul{
        margin-top: 24px;
    }

    p+ol{
        margin-top: 24px;
    }

    ol{
        display: grid;
        grid-gap: 24px;
        li{
            padding-left: 40px;
            font-weight: 300;
            font-size: clamp(14px, 2.08vw, 16px);
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