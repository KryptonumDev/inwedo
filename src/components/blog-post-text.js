import React from "react"
import styled from "styled-components"

export default function Text({ data }) {
    return (
        <Wrapper>
            <Content dangerouslySetInnerHTML={{ __html: data.textField }} />
        </Wrapper>
    )
}

const Wrapper = styled.section`
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
        font-size: 24px;
        line-height: 151%;
    }

    h3{
        font-weight: 400;
        font-size: 18px;
        line-height: 151%;
    }

    p{
        font-weight: 300;
        font-size: 16px;
        line-height: 26px;
        font-feature-settings: 'ss01' on;
    }
`