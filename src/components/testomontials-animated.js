import React, { useRef } from "react"
import styled from "styled-components"
import { Container } from "../style"
import { motion } from "framer-motion";
import { GatsbyImage } from "gatsby-plugin-image";

export default function TestomontialsAnimated({ data: { text, seectionTitle, testomontialsFirstRow, testomontialsSecondRow } }) {
    const constraintsRef = useRef(null);
    return (
        <Wrapper>
            <Container>
                <Text className="h3">{text}</Text>
                <Title className="h4">{seectionTitle}</Title>
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
`

const Row = styled.div`
    display: grid;
    grid-gap: clamp(20px, 3.38vw, 64px);

    .slider{
        width: clamp(1057px, 169vw, 1681px);
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: clamp(20px, 3.38vw, 32px);
    }

    .slider2{
        position: relative;
        left: -25%;
        width: clamp(1057px, 169vw, 1681px);
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: clamp(20px, 3.38vw, 32px);
    }
`

const Item = styled.div`
    padding: clamp(24px, 4.29vw, 42px) clamp(42px, 7.8125vw, 78px);
    width: 100%;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 24px;
    box-shadow: var(--shadow);

    .flex{
        display: flex;
        align-items: center;
        margin-bottom: 16px;

        .image{
            margin-right: 32px;
        }

        .name{
            font-weight: 400;
            font-size: clamp(12px, 1.82vw, 14px);
            line-height: 21px;
        }

        .position{
            font-weight: 300;
            font-size: clamp(10px, 1.5625vw, 12px);
            line-height: 16px;
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