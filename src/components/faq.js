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
`

const Title = styled.h2`
    text-align: center;
    position: relative;
    padding: 16px 0;
    max-width: 850px;
    margin: 0 auto 64px auto;

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
    margin: 0 100px;
`

const Item = styled.details`
    position: relative;
    padding-left: 90px;
    padding-bottom: 32px;

    &::after{
        content: url(${props => props.Arrow});
        position: absolute;
        left: 40px;
        top: 38px;
        transition: transform .2s cubic-bezier(0.215, 0.610, 0.355, 1);
    }
    
    &[open]{
        ::after{
            transform: rotateX(180deg);
        }
    }


    &:first-child{
        padding-top: 32px;
        margin-top: -32px;
    }

    &:nth-child(n + 2){
        padding-top: 32px;

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
        span{
            color: #495057;
            font-weight: 600;
            font-size: 22px;
            line-height: 35px;
        }
    }

    div{
        span{
            margin-top: 24px;
            margin-bottom: 16px;    
            display: block;

            p+p{
                margin-top: 16px;
            }
        }
    }
`