import { GatsbyImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function Benefits({ data: { sectionTitle, benefits, showMore } }) {

    const [isHideNeeded] = useState(benefits.length > 6)
    const [isOpened, setIsOpened] = useState(false)

    return (
        <Wrapper>
            <Container>
                <Title>{sectionTitle}</Title>
                <Grid isOpened={isOpened} isHideNeeded={isHideNeeded}>
                    {benefits.map((el, index) => {
                        if (!isOpened && index >= 6) {
                            return null
                        }
                        return (
                            <Item>
                                <GatsbyImage className="image" image={el.icon.localFile.childImageSharp.gatsbyImageData} alt={el.icon.altText} />
                                <div>
                                    <h4>{el.title}</h4>
                                    <p>{el.text}</p>
                                </div>
                            </Item>
                        )
                    })}
                </Grid>
                {isHideNeeded && !isOpened
                    ? <Button onClick={() => { setIsOpened(true) }} className="button">{showMore}</Button>
                    : null}
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


const Grid = styled.div`
    margin-top: 64px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px clamp(32px, ${32 / 768 * 100}vw, 120px);
    position: relative;

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
        margin-top: 48px;
    }

    &::after{
        ${props => props.isHideNeeded && !props.isOpened
        ? null
        : `display: none;`}
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(180deg, rgba(248, 249, 250, 0) 0%, #F8F9FA 100%);
        height: 300px;
    }
`

const Item = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 32px;

    @media (max-width: 640px) {
        max-width: 440px;
    }

    .image{
        max-width: 48px;
        height: fit-content;
    }

    h4{
        margin-bottom: 12px;
        font-weight: 400;
        font-size: clamp(14px, ${17 / 768 * 100}vw, 20px);
        line-height: 151%;
    }

    p{
        font-weight: 300;
        font-size: clamp(14px, ${16 / 768 * 100}vw, 18px);
        line-height: 151%;
    }
`

const Button = styled.button`
    border: none;
    margin: 64px auto 0 auto;
    cursor: pointer;

    @media (max-width: 640px){
        margin-top: 16px;
    }
`