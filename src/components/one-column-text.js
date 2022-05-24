import React from "react"
import styled from "styled-components"

export default function OneColumnText({ data: { sectionTitle, subTitle, text, boldText } }) {
    return (
        <Wrapper>
            <h2 className="line h4">{sectionTitle}</h2>
            <h3 className="h1">{subTitle}</h3>
            <p className="p">{text}</p>
            <p className="p bold">{boldText}</p>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    max-width: 780px;
    margin: 0 auto;
    margin-top: var(--margin-section);

    .h4{
        margin-bottom: 16px;
        opacity: .5;
    }

    .h1{
        margin-bottom: 24px;
    }

    .p{
        margin-bottom: 16px;
    }

    .bold{
        margin-bottom: 0;
        font-weight: 400;
        font-size: 18px;
        line-height: 151%;
    }
`