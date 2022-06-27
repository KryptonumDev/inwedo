import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function CareersTextParts({ data: { sectionTitle, listUnderTitle } }) {
    return (
        <Wrapper>
            <LocContainer>
                <Title>{sectionTitle}</Title>
                <div dangerouslySetInnerHTML={{ __html: listUnderTitle }} />
            </LocContainer>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: clamp(32px, ${48 / 768 * 100}vw, 64px);

    ul{
        padding-left: 24px;
        li{
            list-style: outside;
            font-weight: 300;
            font-size: 16px;
            line-height: 160%;
            font-feature-settings: 'ss01' on;
        }
    }
`

const LocContainer = styled(Container)`
    max-width: 720px;
    box-sizing: unset;
`

const Title = styled.h2`
    position: relative;
    padding: 8px 0 0 0;    
    margin: 0 auto clamp(16px, ${24 / 768 * 100}vw, 32px) auto;
    font-size: clamp(16px, 3.125vw, 24px);
    font-weight: 400;
    line-height: 151%;


    &::before{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 30px;
        height: 2px;
        background-color: var(--color-black);
        opacity: .5;
    }
`
