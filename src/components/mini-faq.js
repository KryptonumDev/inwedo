import { GatsbyImage } from "gatsby-plugin-image"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Container } from "../style"
import Arrow from './../images/faq-arrow.svg'
import { Helmet } from "react-helmet"

export default function MiniFaq({ data: { sectionTitle, text, smallText, questionsAndAnswers, image } }) {

    const [items] = useState(() => {
        const arr = []

        questionsAndAnswers.forEach(el => {

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
        const details = document.querySelectorAll("details");

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

    return (
        <Wrapper>
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            </Helmet>
            <Container>
                <h2 className="line h4">{sectionTitle}</h2>
                <p className="h2">{text}</p>
                {smallText
                    ? <p className="p">{smallText}</p>
                    : null}
                <Content>
                    <Image image={image.localFile.childImageSharp.gatsbyImageData} alt={image.altText} />
                    <div className="item">
                        {questionsAndAnswers.map((el, index) => (
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
                                    <h3 itemProp='text' dangerouslySetInnerHTML={{ __html: el.answer }}>
                                    </h3>
                                </div>
                            </Item>
                        ))}
                    </div>
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);
    .h4{
        opacity: .55;
        margin-bottom: 8px;
        font-size: clamp(14px, 2.08vw, 18px);
        max-width: 1000px;
    }

    .h2{
        font-size: clamp(20px, 2.86vw, 24px);
        max-width: 1000px;
    }

    p.p{
        margin-top: 16px;
        font-size: clamp(14px, 1.95vw, 16px);
        max-width: 1000px;
    }
`

const Content = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: clamp(32px, 5vw, 128px);
    margin-top: clamp(32px, 6.25vw, 64px);

    .item{
        max-width: 620px;
    }

    @media (max-width: 876px) {
        grid-template-columns: 1fr;
    }
    
`

const Image = styled(GatsbyImage)`
    box-shadow: var(--shadow);
    height: fit-content;
    
    img{
        border-radius: 8px;
    }

    @media (max-width: 1240px) {
        width: 100%;
        min-width: 400px;
        max-width: fit-content;
    }

    @media (max-width: 876px){
        margin: 0 auto;
        min-width: unset;
    }

    @media (max-width: 660px){
        margin: 0 30px;
    }
`

const Item = styled.details`
    position: relative;
    padding-top: 16px;
    padding-bottom: 16px;

    @media (max-width: 660px){
        padding-bottom: 0;
    }

    &::after{
        content: url(${props => props.Arrow});
        position: absolute;
        left: clamp(0px, 2.25vw, 32px);
        top: 20px;
        transition: transform .2s cubic-bezier(0.215, 0.610, 0.355, 1);
        pointer-events: none;

        @media (max-width: 660px) {
            left: 0;
            top: 18px;
            transform: scale(.75);
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
            transform: rotateX(180deg);
            
            @media (max-width: 660px) {
                transform: rotateX(180deg) scale(.75) translateY(-3px);
            }
        }
    }

    summary{
        padding-left: clamp(32px, ${48 / 768 * 100}vw, 64px);
        cursor: pointer;

        @media (max-width: 660px){
            padding-left: 30px;
        }

        span{
            color: #000;
            font-weight: 500;
            font-size: clamp(14px, 2.08vw, 18px);
            line-height: 28px;
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
        padding-left: clamp(0px, ${16 / 768 * 100}vw, 32px);

        @media (max-width: 660px){
            padding-left: 0;
        }
        h3{
            margin-top: 16px;
            display: block;
            font-weight: 300;
            font-size: clamp(14px, 1.95vw, 16px);

            @media (max-width: 660px){
                margin-top: 8px;
            }

            p+p{
                margin-top: 16px;
            }
        }
    }
`