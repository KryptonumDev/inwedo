import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'

export default ({ title, text, button }) => (
    <ContentWrapper>
        <Content>
            <Title className="h1">{title}</Title>
            <Text className="h4" dangerouslySetInnerHTML={{__html: text}}/>
            <Button to={button.url} className='button-white'>
                <span className="colored">{button.name}</span>
            </Button>
        </Content>
    </ContentWrapper>
)

const ContentWrapper = styled.div`
margin-top: ${props => props.small ? 'clamp(32px, 6.25vw, 64px)' : 'var(--margin-section)'};
    background: var(--color-accent);
    border-radius: 24px;
    box-shadow: var(--shadow);

    @media (max-width: 1024px) {
        border-radius: 0;
        width: calc(100% + 64px);
        transform: translateX(-32px);
    }

    *:focus-visible{
        outline-color: #fff;
    }
`

const Content = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 75px 30px;
`

const Title = styled.span`
    color: var(--color-white);
    text-align: center;
    margin-bottom: 24px;
    display: block;

    &.h1{
        font-weight: 600;
        font-size: clamp(20px, 3.385vw, 32px);
    }
`

const Text = styled.div`
    color: var(--color-white);
    text-align: center;
    margin-bottom: 32px;

    &.p{
        font-size: clamp(14px, 2.083vw, 18px);
    }

    h1,h2,h3,h4,h5,h6,p{
        font-size: inherit;
        line-height: inherit;
    }
`

const Button = styled(Link)`
    display: block;
    margin: 0 auto;
    width: fit-content;
`