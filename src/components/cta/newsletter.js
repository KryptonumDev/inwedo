import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'
import Newsletter from "../forms/newsletter"

export default ({ title, form }) => (
    <ContentWrapper>
        <Content>
            <Title>{title}</Title>
            <Newsletter data={form}/>
        </Content>
    </ContentWrapper>
)

const ContentWrapper = styled.div`
margin-top: ${props => props.small ? 'clamp(32px, 6.25vw, 64px)' : 'var(--margin-section)'};
    background: var(--color-white);
    border-radius: 24.5221px;
    box-shadow: var(--shadow);

    @media (max-width: 1024px) {
        border-radius: 0;
        width: calc(100% + 64px);
        transform: translateX(-32px);
    }

    *:focus-visible{
        outline-color: #0B61D6;
    }
`

const Content = styled.div`
    max-width: 850px;
    margin: 0 auto;
    padding: clamp(64px, 10.68vw, 100px) 30px;
`

const Title = styled.span`
    text-align: center;
    margin-bottom: 32px;
    font-weight: 400;
    font-size: clamp(16px, ${20/768*100}vw, 24px);
    line-height: 151%;
    margin-bottom: 48px;
    display: block;
`

const Button = styled(Link)`
    display: block;
    margin: 0 auto;
    width: fit-content;
    background: var(--color-accent);

    span{
        color: var(--color-white);
    }
`