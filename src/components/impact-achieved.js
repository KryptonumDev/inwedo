import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function ImpactAchieved({ data: { sectionTitle, impacts } }) {
    return (
        <Wrapper>
            <Container>
                <h2 className="h3">{sectionTitle}</h2>
                <Grid>
                    {impacts.map(el => (
                        <Item>
                            <span className="colored">{el.impactNumber}</span>
                            <p>{el.impactText}</p>
                        </Item>
                    ))}
                </Grid>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);

    h2{
        text-align: center;
        position: relative;
        padding: 16px 0 0 0;    
        max-width: 850px; 
        margin: 0 auto clamp(32px, 6.25vw, 64px) auto;
        
        &.h3{
            font-size: clamp(16px, 3.125vw, 24px);
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
    }
`

const Grid = styled.div`
    display: flex;
    justify-content:center;
    gap: 64px;

    @media (max-width: 1024px) {
        flex-wrap: wrap;
    }
`

const Item = styled.div`
    width: 100%;

    @media (max-width: 1024px){
        width: 42%;
    }

    @media (max-width: 480px) {
        width: 100%;
        max-width: 260px;
        height: fit-content;
    }

    span{
        font-weight: 600;
        font-size: clamp(32px, 5.2vw, 48px);
        line-height: 50px;
        max-height: 50px;
        text-align: center;
        display: block;
        width: fit-content;
        margin: 0 auto;
        margin-bottom: clamp(20px, 3.25vw, 30px);
        white-space: nowrap;
    }

    p{
        height: calc(100% - 128px);
        padding: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-radius: 8px;
        background-color: var(--color-white);
        box-shadow: var(--shadow);
        font-size: clamp(12px, 1.95vw, 18px);
    }
`