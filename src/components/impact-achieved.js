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
        margin: 0 auto 64px auto;

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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 64px;
`

const Item = styled.div`
    span{
        font-weight: 600;
        font-size: 48px;
        line-height: 50px;
        max-height: 50px;
        text-align: center;
        display: block;
        width: fit-content;
        margin: 0 auto;
        margin-bottom: 30px;
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
        filter: var(--shadow);
    }
`