import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'

export default ({ title, text, button }) => (
    <ContentWrapper>
        <Content>
            <Title className="h1">{title}</Title>
            <Text className="h4">{text}</Text>
            <Button to={button.url} className='button-white'>
                <span className="colored">{button.name}</span>
            </Button>
        </Content>
    </ContentWrapper>
)

const ContentWrapper = styled.div`
    background: var(--color-accent);
    border-radius: 24.5221px;
    filter: var(--shadow);
`

const Content = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 75px 30px;
`

const Title = styled.h2`
    color: var(--color-white);
    text-align: center;
    margin-bottom: 24px;
`

const Text = styled.p`
    color: var(--color-white);
    text-align: center;
    margin-bottom: 32px;

`

const Button = styled(Link)`
    display: block;
    margin: 0 auto;
    width: fit-content;
`