import React from "react"
import styled from "styled-components"
import { Container } from "../style"
import Arrow from './../images/faq-arrow.svg'

export default function FAQ({ data: { title, faqElement } }) {
    return (
        <Wrapper>
            <Container>
                <Title className="h1">{title}</Title>
                <Repeater>
                    {faqElement.map((el, index) => (
                        <Item Arrow={Arrow} open={index === 0 ? true : false}>
                            <summary
                                itemProp='mainEntity'
                                itemType='https://schema.org/Question'>
                                <span itemProp='name'>
                                    {el.question}
                                </span>
                            </summary>
                            <div
                                itemProp='acceptedAnswer'
                                itemType='https://schema.org/Answer'>
                                <span itemProp='text' dangerouslySetInnerHTML={{ __html: el.answer }}>
                                </span>
                            </div>
                        </Item>
                    ))}
                </Repeater>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);

        details > summary {
          list-style: none;
        }
        
        details > summary::-webkit-details-marker {
          display: none;
        }
`

const Title = styled.h2`
    text-align: center;
    position: relative;
    max-width: 850px;
    margin: 0 auto 64px auto;
    padding: clamp(8px, 1.5625vw, 16px) 0;

    &.h1{
        font-size: clamp(18px, 3.125vw, 32px);
    }

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

const Repeater = styled.div`
    margin: 0 auto;
    max-width: 1040px;
`

const Item = styled.details`
    position: relative;
    padding-bottom: clamp(20px, 3.385vw, 32px);

    &::after{
        content: url(${props => props.Arrow});
        position: absolute;
        left: clamp(20px, 3.255vw, 40px);
        top: 38px;
        transition: transform .2s cubic-bezier(0.215, 0.610, 0.355, 1);
        pointer-events: none;

        @media (max-width: 660px) {
            left: 10px;
            top: 22px;
            transform: scale(.55);
        }
    }
    
    &[open]{
        ::after{
            transform: rotateX(180deg);
            
            @media (max-width: 660px) {
                transform: rotateX(180deg) scale(.55);
            }
        }
    }


    &:first-child{
        padding-top: clamp(20px, 3.385vw, 32px);
        margin-top: clamp(-32px, -3.385vw, -20px);
    }

    &:nth-child(n + 2){
        padding-top: clamp(20px, 3.385vw, 32px);

        &::before{
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            height: 1px;
            opacity: .1;
            background-color: #000000;
        }
    }

    summary{
        cursor: pointer;

        padding-left: clamp(50px, 8.46vw, 90px);

        @media (max-width: 660px){
            padding-left: 40px;
        }

        &::-webkit-details-marker{
            display:none;
        }

        span{
            color: #495057;
            font-weight: 600;
            font-size: clamp(14px, 2.34375vw, 22px);
            line-height: 150%;

        }
    }

    div{

        padding-left: clamp(50px, 8.46vw, 90px);
        
        @media (max-width: 660px){
            padding-left: 40px;
        }

        span{
            margin-top: 24px;
            margin-bottom: 16px;    
            display: block;

            font-size: clamp(12px, 1.82vw, 16px);

            p+p{
                margin-top: 16px;
            }
        }
    }
`