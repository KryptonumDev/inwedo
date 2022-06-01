import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'

export default ({ title, button }) => (
    <ContentWrapper>
        <Content>
            <Title className="h1">{title}</Title>
            <Button to={button.url} className='button-white'>
                <span className="colored">{button.name}</span>
            </Button>
        </Content>
    </ContentWrapper>
)

const ContentWrapper = styled.div`
    background: var(--color-accent);
    border-radius: 24px;
    filter: var(--shadow);

    @media (max-width: 1024px) {
        border-radius: 0;
        width: calc(100% + 64px);
        transform: translateX(-32px);
    }
`

const Content = styled.div`
    max-width: 756px;
    margin: 0 auto;
    padding: clamp(54px, 10.68vw, 100px) 30px;
`

const Title = styled.h2`
    color: var(--color-white);
    text-align: center;
    margin-bottom: 32px;

    &.h1{
        font-weight: 600px;
        font-size: clamp(20px, 3.385vw, 32px);
    }
`

const Button = styled(Link)`
    display: block;
    margin: 0 auto;
    width: fit-content;
`