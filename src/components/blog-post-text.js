import React from "react"
import styled from "styled-components"

export default function Text({ data, index }) {
    return (
        <Wrapper id={index}>
            <Content dangerouslySetInnerHTML={{ __html: data.textField }} />
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: clamp(32px, 6.25vw, 64px);
`

const Content = styled.div`
    max-width: 794px;
    padding: 0 32px;
    box-sizing: border-box;
    margin: 0 auto;
    display: grid;
    grid-gap: 16px;

    h2{
        font-weight: 400;
        font-size: clamp(16px, 3.125vw, 24px);
        line-height: 151%;
    }

    h3{
        font-weight: 400;
        font-size: clamp(16px, 2.34vw, 18px);
        line-height: 151%;
    }

    p{
        font-weight: 300;
        font-size: clamp(14px, 2.08vw, 16px);
        line-height: 160%;
        font-feature-settings: 'ss01' on;
    }
        
    a{
        font-weight: 700;
        color: #0B5CD6;
        
        &.button {
            color: #fff;
        }
        &.btn{
            color: #fff;
        }
    }

    ul, ol{
        display: grid;
        grid-gap: 16px;
        li{
            list-style: disc;
            margin-left: 20px;

            font-weight: 300;
            font-size: clamp(14px, 2.08vw, 16px);
            line-height: 160%;
            font-feature-settings: 'ss01' on;
        }
    }
`