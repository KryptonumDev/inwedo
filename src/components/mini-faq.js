import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"
import Arrow from './../images/faq-arrow.svg'

export default function MiniFaq({ data: { sectionTitle, text, smallText, questionsAndAnswers, image } }) {
    return (
        <Wrapper>
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
                                    <span itemProp='text' dangerouslySetInnerHTML={{ __html: el.answer }}>
                                    </span>
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
        opacity: .5;
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
    border-radius: 8px;
    box-shadow: var(--shadow);
    height: fit-content;

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
    padding-left: clamp(40px, 8.46vw, 90px);
    padding-top: 16px;
    padding-bottom: 16px;

    @media (max-width: 660px){
        padding-left: 30px;
    }

    &::after{
        content: url(${props => props.Arrow});
        position: absolute;
        left: clamp(20px, 3.255vw, 40px);
        top: 24px;
        transition: transform .2s cubic-bezier(0.215, 0.610, 0.355, 1);

        @media (max-width: 660px) {
            left: 0;
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

    summary{
        span{
            color: #495057;
            font-weight: 600;
            font-size: clamp(14px, 2.08vw, 18px);
            line-height: 35px;
        }
    }

    div{
        span{
            margin-top: 16px;
            display: block;
            font-weight: 300;
            font-size: clamp(14px, 1.95vw, 16px);

            p+p{
                margin-top: 16px;
            }
        }
    }
`