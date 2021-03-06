import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Container } from "../style"
import Arrow from './../images/faq-arrow.svg'
import { Helmet } from "react-helmet"

export default function FAQ({ data: { title, faqElement } }) {

    const [items] = useState(() => {
        const arr = []

        faqElement?.forEach(el => {
            arr.push({
                "@type": "Question",
                "name": el.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": el.answer
                }
            })
        });

        return arr
    })

    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": items
    };

    useEffect(() => {
        const details = document.querySelectorAll(".details");

        details.forEach((targetDetail) => {
            targetDetail.addEventListener("click", () => {
                details.forEach((detail) => {
                    if (detail !== targetDetail) {
                        detail.removeAttribute("open");
                    }
                });
                return false
            });
        });

        return () => {
            details.forEach((targetDetail) => {
                targetDetail.removeEventListener("click", () => {
                    details.forEach((detail) => {
                        if (detail !== targetDetail) {
                            detail.removeAttribute("open");
                        }
                    });
                    return false
                });
            });
        }
    }, [])

    if (!!faqElement) {
        return (
            <Wrapper>
                <Helmet>
                    <script type="application/ld+json">
                        {JSON.stringify(schema)}
                    </script>
                </Helmet>
                <Container>
                    <Title className="h1">{title}</Title>
                    <Repeater>
                        {faqElement.map((el, index) => (
                            <Item className="details" Arrow={Arrow} open={index === 0 ? true : false}>
                                <summary
                                    itemProp='mainEntity'
                                    itemType='https://schema.org/Question'>
                                    <h3 itemProp='name'>
                                        {el.question}
                                    </h3>
                                </summary>
                                <div
                                    itemProp='acceptedAnswer'
                                    itemType='https://schema.org/Answer'>
                                    <span className="p parent" itemProp='text' dangerouslySetInnerHTML={{ __html: el.answer }}>
                                    </span>
                                </div>
                            </Item>
                        ))}
                    </Repeater>
                </Container>
            </Wrapper>
        )
    }

    return null
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
    margin: 0 auto clamp(32px, ${48 / 768 * 100}vw, 64px) auto;
    padding: clamp(8px, 1.5625vw, 16px) 0;

    &.h1{
        font-size: clamp(20px, 3.125vw, 24px);
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
    max-width: 985px;
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
        summary{
            &:hover{
                span{
                    background-size: 0px 2px;
                }
            }
        }
        ::after{
            transform: rotateX(180deg) translateY(-3px);
            
            @media (max-width: 660px) {
                transform: rotateX(180deg) scale(.55) translateY(-3px);
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
        border-radius: 8px;

        padding-left: clamp(50px, 8.46vw, 90px);

        @media (max-width: 660px){
            padding-left: 40px;
        }

        &::-webkit-details-marker{
            display: none;
        }

        h3{
            color: #495057;
            font-weight: 600;
            font-size: clamp(14px, 2.34375vw, 22px);
            line-height: 150%;
            padding: 4px 0;
                
                position: relative;
                padding-bottom: 3px;

                transition: background-size 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
                background: var(--color-accent);
                background-size: 0px 2px;
                background-repeat: no-repeat;
                background-position: left 100%;
        }

        &:hover{
            span{
                background-size: 100px 2px;
            }
        }
    }

    div{
        max-width: 820px;
        padding-left: clamp(50px, 8.46vw, 90px);
        
        @media (max-width: 660px){
            padding-left: 40px;
        }

        .parent{
            margin-top: 24px;
            display: grid;
            grid-gap: 16px;

            font-size: clamp(12px, 1.82vw, 16px);

            a{
                font-family: 'Lexend Deca';
                font-style: normal;
                font-weight: 600;
                font-size: clamp(14px, 2.08vw, 16px);
                line-height: 26px;
                background: var(--color-accent);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;

                border-radius: 2px;
                position: relative;
                width: fit-content;

                &::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 0;
                    height: 2px;
                    background: var(--color-accent);
                    transition: width .3s cubic-bezier(0.23, 1, 0.320, 1);
                }

                &:hover{
                    &::after {
                        width: 100%;
                    }
                }
            }

            ul, ol{
                display: grid;
                grid-gap: 16px;
                li{
                    list-style: disc;
                    margin-left: 20px;

                    font-weight: 300;
                    font-size: clamp(14px, 2.08vw, 16px);
                    line-height: 160%;
                    font-feature-settings: 'ss01' on;
                }
            }
        }
    }
`