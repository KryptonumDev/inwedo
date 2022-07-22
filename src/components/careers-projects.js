import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function ProjectsYouCanWorkOn({ data: { sectionTitle, seoTitle, boldText, plainText, projects } }) {
    return (
        <Wrapper>
            <Container>
                <Title>{sectionTitle}</Title>
                <Flex>
                    <div className="text">
                        <h3 className="h4 line">{seoTitle}</h3>
                        <p className="h2">{boldText}</p>
                        <p className="p">{plainText}</p>
                    </div>
                    <Grid>
                        {projects.map(el => (
                            <img className="image" src={el.logo.localFile.publicURL} alt={el.logo.altText} />
                        ))}
                    </Grid>
                </Flex>
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

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 32px;

    @media (max-width: 640px){
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 32px;
    }

    .text{
        max-width: 560px;

        .line{
            opacity: .55;
            margin-bottom: 16px;
            font-size: clamp(14px, ${16 / 768 * 100}vw, 18px);
        }

        .h2{
            margin-bottom: 16px;
            font-size: clamp(20px, ${22 / 768 * 100}vw, 24px);
        }

        .p{
            font-size: clamp(14px, ${16 / 768 * 100}vw, 18px);
        }
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 48px;
    min-width: fit-content;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 640px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    .image{
        width: fit-content;
        height: fit-content;
        display: block;
            max-height: 34px;
            width: fit-content;

        &:nth-child(1){
            margin-left: -10px;
            @media (max-width: 1024px){
                margin-left: -10px;
            }
        }

        &:nth-child(2){
            margin-left: -10px;
            @media (max-width: 1024px){
                margin-left: -10px;
            }
        }

        &:nth-child(3){
            margin-left: -10px;
            @media (max-width: 1024px){
                margin-left: 0;
            }
            @media (max-width: 640px) {
                margin-left: -10px;
            }
        }

        &:nth-child(4){
            margin-right: -10px;
            @media (max-width: 1024px){
                margin-right: 0;
            }
            @media (max-width: 640px) {
                margin-right: -10px;
            }
        }

        &:nth-child(5){
            margin-right: -15px;
            @media (max-width: 1024px){
                margin-right: -15px;
            }
            @media (max-width: 640px) {
                margin-right: -10px;
            }
        }

        &:nth-child(6){
            margin-right: -10px;
            @media (max-width: 1024px){
                margin-right: -10px;
            }
        }
    }
`