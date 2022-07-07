import React, { useRef } from "react"
import styled from "styled-components"
import { Container } from "../style"
import { motion } from "framer-motion"
import { GatsbyImage } from "gatsby-plugin-image"

export default function TestomontialsAnimated({ data: { text, seectionTitle, testomontialsFirstRow, testomontialsSecondRow, card } }) {
    const constraintsRef = useRef(null);
    return (
        <Wrapper>
            <Container>
                <Text className="h3">{text}</Text>
                <Title className="h4">{seectionTitle}</Title>
                <Card href={card.cardLink} target="_blank" rel="noopener noreferrer">
                    <GatsbyImage className="image" image={card.cardImage.localFile.childImageSharp.gatsbyImageData} alt={card.cardImage.altText} />
                </Card>
                <Row ref={constraintsRef}>
                    <motion.div drag='x' dragConstraints={constraintsRef} className="slider">
                        {testomontialsFirstRow.map(el => (
                            <Item>
                                <div className="flex">
                                    <GatsbyImage className="image" image={el.autorImg.localFile.childImageSharp.gatsbyImageData} alt={el.autorImg.altText} />
                                    <div>
                                        <p className="name">{el.authorName}</p>
                                        <p className="position">{el.authorPosition}</p>
                                    </div>
                                </div>
                                <p className="p">{el.testomontial}</p>
                            </Item>
                        ))}
                    </motion.div>
                    <motion.div drag='x' dragConstraints={constraintsRef} className="slider2">
                        {testomontialsSecondRow.map(el => (
                            <Item>
                                <div className="flex">
                                    <GatsbyImage className="image" image={el.autorImg.localFile.childImageSharp.gatsbyImageData} alt={el.autorImg.altText} />
                                    <div>
                                        <p className="name">{el.authorName}</p>
                                        <p className="position">{el.authorPosition}</p>
                                    </div>
                                </div>
                                <p className="p">{el.testomontial}</p>
                            </Item>
                        ))}
                    </motion.div>
                </Row>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    position: relative;
    margin: 0 auto;
    max-width: 1920px;
    margin-top: var(--margin-section);
`

const Text = styled.p`
    text-align: center;
    position: relative;
    padding: 16px 0 0 0;    
    max-width: 850px;
    margin: 0 auto 16px auto;

    &.h3{
        font-size: clamp(16px, 2.86vw, 24px);
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

const Title = styled.h2`
    opacity: .5;
    text-align: center;
    max-width: 850px;
    margin: 0 auto 64px auto;

    &.h4{
        font-size: clamp(14px, 2.08vw, 18px);
    }

    @media (max-width: 1240px){
        margin-bottom: 10px;
    }
`

const Row = styled.div`
    display: grid;
    grid-gap: clamp(20px, 3.38vw, 64px);

    .slider{
        width: clamp(1057px, 169vw, 1681px);
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: clamp(20px, 3.38vw, 32px);

        @media (max-width: 400px) {
            width: 960px;
        }

        @media (max-width: 360px) {
            width: 900px;
        }
    }

    .slider2{
        position: relative;
        left: -25%;
        width: clamp(1057px, 169vw, 1681px);
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: clamp(20px, 3.38vw, 32px);

        @media (max-width: 400px) {
            width: 960px;
        }

        @media (max-width: 360px) {
            width: 900px;
        }
    }
`

const Item = styled.div`
    padding: clamp(24px, 4.29vw, 42px) clamp(42px, 7.8125vw, 78px);
    width: 100%;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 24px;
    box-shadow: var(--shadow);

    @media (max-width: 360px) {
        padding: 16px 30px;
    }

    .flex{
        display: flex;
        align-items: center;
        margin-bottom: 16px;

        .image{
            margin-right: clamp(16px, 5.2vw, 24px);
            max-width: clamp(60px, 23.43vw, 68px);
            width: 100%;

            img{
                border-radius: 50%;
            }
        }

        .name{
            font-weight: 500;
            font-size: clamp(16px, 1.82vw, 24px);
            line-height: 151%;

            @media (max-width: 360px) {
            
            }
        }

        .position{
            font-weight: 400;
            font-size: clamp(14px, 1.5625vw, 18px);
            line-height: 151%;

            @media (max-width: 360px) {
               
            }
        }

        /* @media (max-width: 640px) {
            flex-direction: column;
            align-items: flex-start;
            .image{
                margin-right: 0;
                margin-bottom: 32px;
            }
        } */
    }
`

const Card = styled.a`
    display: block;
    position: absolute;
    right: -16px;
    top: 0;
    border-radius: 24px;
    background-color: #fff;
    box-shadow: var(--shadow);
    padding: 36px 24px;
    display: flex;
    justify-content: center;
    align-items: center;

    .image{
        width: fit-content;
        height: fit-content;
        max-width: 192px;
    }

    @media (max-width: 1240px) {
        position: relative;
        .image{
            max-width: 150px;
        }
        padding: 24px 16px;
        left: 100%;
        transform: translateX(-80%);
        position: relative;
        display: block;
        width: fit-content;
        margin-bottom: 16px;
    }

    @media (max-width: 1024px) {
        .image{
            max-width: 100px;
        }
        padding: 16px;
        border-radius: 8px;
    }
`