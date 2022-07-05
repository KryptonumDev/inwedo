import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React, { useRef } from "react"
import styled from "styled-components"
import { Container } from "../style"
import Quote from './../images/quote.png'
import { motion } from "framer-motion"

export default function MeetUs({ data: { link, icons, image, testomontialsFirstRow, testomontialsSecondRow, sectionTitle, seoTitle, boldText, plainText } }) {
    const constraintsRef = useRef(null);
    return (
        <Wrapper>
            <Container>
                <Title>{sectionTitle}</Title>
                <Flex to={link.url}>
                    <GatsbyImage className="image" image={image.localFile.childImageSharp.gatsbyImageData} alt={image.altText} />
                    <div>
                        <h3 className="line h4">{seoTitle}</h3>
                        <p className="h3">{boldText}</p>
                        <div className="p" dangerouslySetInnerHTML={{ __html: plainText }}></div>
                        <div className="flex">
                            <span className="link">{link.name}</span>
                            {icons.map(el => (
                                <GatsbyImage className="logo" image={el.icon.localFile.childImageSharp.gatsbyImageData} alt={el.icon.altText} />
                            ))}
                        </div>
                    </div>
                </Flex>
                <div ref={constraintsRef} >
                    <FirstRow drag='x' dragConstraints={constraintsRef}>
                        {testomontialsFirstRow.map(el => (
                            <Item quote={Quote}>
                                <p>{el.testomontialText}</p>
                            </Item>
                        ))}
                    </FirstRow>
                    <SecondRow drag='x' dragConstraints={constraintsRef}>
                        {testomontialsSecondRow.map(el => (
                            <Item quote={Quote}>
                                <p>{el.testomontialText}</p>
                            </Item>
                        ))}
                    </SecondRow>
                </div>
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
    padding: 16px 0 0 0;    
    max-width: 540px; 
    margin: 0 auto clamp(32px, 6.25vw, 64px) auto;
    font-size: clamp(16px, 3.125vw, 24px);
    font-weight: 400;
    line-height: 151%;


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

const Flex = styled(Link)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: clamp(32px, ${72 / 768 * 100}vw, 128px);

    .image{
        box-shadow: var(--shadow);
        height: fit-content;
        img{
            border-radius: 8px;
        }
    }

    .flex{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 32px;
    }

    .h4{
        opacity: .5;
        margin-bottom: 16px;
        font-size: clamp(14px, ${16 / 768 * 100}vw, 18px);
    }

    .h3{
        margin-bottom: 16px;
        font-size: clamp(20px, ${2 / 768 * 100}vw, 24px);
    }

    .p{
        margin-bottom: 16px;
        font-size: clamp(14px, ${16 / 768 * 100}vw, 18px);
    }

    span{
        display: block;
    }

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        grid-gap: 32px;
        max-width: 570px;
        margin: 48px auto 0 auto;
    }
`

const FirstRow = styled(motion.div)`
    margin-top: clamp(64px, ${92 / 768 * 100}vw, 128px);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    width: max-content;
`

const SecondRow = styled(motion.div)`
    margin-top: 64px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 32px;
    width: max-content;
    position: relative;
    left: -25%;
`

const Item = styled.div`
    width: 593px;
    box-sizing: border-box;
    padding: clamp(42px, ${60 / 768 * 100}vw, 78px) clamp(92px, ${110 / 768 * 100}vw, 128px) 32px clamp(48px, ${58 / 768 * 100}vw, 68px);
    box-shadow: var(--shadow);
    background-color: #fff;
    border-radius: 24px;
    height: fit-content;
    position: relative;

    &::after{
        content: url(${props => props.quote});
        position: absolute;
        right: 40px;
        top: 40px;

        @media (max-width: 1024px) {
            transform: scale(.6);
            right: 30px;
            top: 20px;
        }
    }

    p{
        font-weight: 300;
        font-size: 16px;
        line-height: 160%;
    }

    @media (max-width: 639px) {
        width: calc(100vw - 88px);
        min-width: 430px;
    }
`