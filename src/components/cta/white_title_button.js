import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'

export default ({ title, button }) => (
    <ContentWrapper>
        <Content>
            <Title className="h1 colored" dangerouslySetInnerHTML={{__html: title}}></Title>
            <Button to={button.url} className='button'>
                <span>{button.name}</span>
            </Button>
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
`

const Content = styled.div`
    max-width: 930px;
    margin: 0 auto;
    padding: clamp(64px, 10.68vw, 100px) 30px;
`

const Title = styled.span`
    color: var(--color-white);
    text-align: center;
    margin-bottom: 42px;
    display: block;

    h1,h2,h3,h4,h5,h6,p{
        color: var(--color-white);
        font-size: inherit;
        line-height: inherit;
    }

    &.h1{
        font-weight: 600;
        font-size: clamp(20px, 3.385vw, 38px);
    }
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