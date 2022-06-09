import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function ProcessOptimisation({ data: { sectionTitle, boldText, plainText, optimisationRows } }) {
    return (
        <Wrapper>
            <LocContainer>
                <h2 className="h4 line">{sectionTitle}</h2>
                <p className="h1">{boldText}</p>
                <p className="text">{plainText}</p>
                <Rows className="desctop">
                    {optimisationRows.map(el => (
                        <Row>
                            {el.rowItems.map(innerEl => (
                                <Item>
                                    <GatsbyImage className="image" image={innerEl.optimisationIcon.localFile.childImageSharp.gatsbyImageData} alt={innerEl.optimisationIcon.altText} />
                                    <p>{innerEl.title}</p>
                                </Item>
                            ))}
                        </Row>
                    ))}
                </Rows>
                <Rows className="mobile">
                    {optimisationRows.map(el => (
                        <>
                            {el.rowItems.map(innerEl => (
                                <Item>
                                    <GatsbyImage className="image" image={innerEl.optimisationIcon.localFile.childImageSharp.gatsbyImageData} alt={innerEl.optimisationIcon.altText} />
                                    <p>{innerEl.title}</p>
                                </Item>
                            ))}
                        </>
                    ))}
                </Rows>
            </LocContainer>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);

    .line{
        opacity: .5;
        margin-bottom: 12px;
        font-size: clamp(14px, 2.08vw, 16px);
    }

    .h1{
        margin-bottom: 16px;
        font-size: clamp(20px, 3.38vw, 32px);
    }

    .text{
        font-weight: 300;
        font-size: clamp(14px, 2.21vw, 20px);
        line-height: 151%;
        margin-bottom: clamp(32px, 6.25vw, 64px);
    }
`

const LocContainer = styled(Container)`
    max-width: 1380px;
    padding: 0 70px;

    @media (max-width: 1024px){
        max-width: 100%;
        padding: 0 32px;
    }
`

const Rows = styled.div`
    display: grid;
    grid-gap: 32px;

    &.mobile{
        display: none;
    }

    @media (max-width: 1024px) {
        &.desctop{
            display: none;
        }

        &.mobile{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: clamp(16px, 3.125vw, 36px);
        }
    }

    @media (max-width: 500px) {
        &.mobile{
            grid-template-columns: 1fr;
        }
    }
`

const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 32px;

    &:nth-child(2n){
        margin-right: clamp(-70px, -3vw, 0px);
        margin-left: clamp(0px, 3vw, 70px);
    }

    &:nth-child(2n + 1){
        margin-left: clamp(-70px, -3vw, 0px);
        margin-right: clamp(0px, 3vw, 70px);
    }
`

const Item = styled.div`
    padding: clamp(18px, 2.99vw, 28px) clamp(10px, 1.69vw, 16px);
    background-color: var(--color-white);
    border-radius: 8px;
    box-shadow: var(--shadow);
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: clamp(30px, 5.2vw, 50px);
    align-items: center;
    
    .image{
        width: fit-content;
        height: fit-content;
        max-width: clamp(32px, 5.2vw, 46px);
    }

    p{
        font-weight: 400;
        font-size: clamp(14px, 2.21vw, 20px);
        line-height: 151%;
        margin-bottom: 0;
        text-align: center;
    }

    @media (max-width: 500px) {
        max-width: 330px;
        box-sizing: border-box;
        p{
            text-align: left;
        }
    }
`