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
                    <div>
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
    }

    .h2{
    }

    p.p{
        margin-top: 16px;
    }
`

const Content = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 128px;
    margin-top: 64px;
`

const Image = styled(GatsbyImage)`
    border-radius: 8px;
    filter: var(--shadow);
    width: fit-content;
    height: fit-content;
`

const Item = styled.details`
    position: relative;
    padding-left: 90px;
    padding-top: 16px;
    padding-bottom: 16px;

    &::after{
        content: url(${props => props.Arrow});
        position: absolute;
        left: 40px;
        top: 24px;
        transition: transform .2s cubic-bezier(0.215, 0.610, 0.355, 1);
    }
    
    &[open]{
        ::after{
            transform: rotateX(180deg);
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
            margin-top: 16px;
            display: block;
            font-weight: 300;
            font-size: 18px;

            p+p{
                margin-top: 16px;
            }
        }
    }
`