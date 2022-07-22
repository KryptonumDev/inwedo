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

    font-weight: 300;
    font-size: clamp(14px, 2.08vw, 16px);
    line-height: 160%;
    font-feature-settings: 'ss01' on;

    video{
        width: 100%;
        height: fit-content;
    }

    iframe{
        width: 100% !important;
        video{
            width: 100% !important;
        }
    }

    figure{
        width: 100% !important;
        border-radius: 8px;
        figcaption{
            margin-top: 8px;
            font-weight: 300;
            font-size: clamp(10px, 1.43vw, 12px);
            line-height: 220%;
            font-feature-settings: 'ss01' on;
        }
    }

    .wp-video{
        width: 100% !important;
    }

    h1, h2{
        font-weight: 400;
        font-size: clamp(16px, 3.125vw, 24px);
        line-height: 151%;
    }

    h3, h4, h5, h6{
        font-weight: 400;
        font-size: clamp(16px, 2.34vw, 18px);
        line-height: 151%;
    }

    p, div{
        font-weight: 300;
        font-size: clamp(14px, 2.08vw, 16px);
        line-height: 160%;
        font-feature-settings: 'ss01' on;
    }

    strong{
        font-weight: inherit;
        font-size: inherit;
        line-height: inherit;
        font-weight: 700;
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

        strong, b{
            background: var(--color-accent);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
        }
    }

    ul, ol{
        display: grid;
        grid-gap: 16px;
        li{
            list-style: auto;
            margin-left: 20px;

            font-weight: 300;
            font-size: clamp(14px, 2.08vw, 16px);
            line-height: 160%;
            font-feature-settings: 'ss01' on;
        }
    }

    blockquote{
        margin: 0 0 0 48px;

        p+p{
            margin-top: 16px;
        }
    }
`