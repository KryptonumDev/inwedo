import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'

export default ({ title, form }) => (
    <ContentWrapper>
        <Content>
            <Title>{title}</Title>
            {/* form */}
        </Content>
    </ContentWrapper>
)

const ContentWrapper = styled.div`
    background: var(--color-white);
    border-radius: 24.5221px;
    box-shadow: var(--shadow);
`

const Content = styled.div`
    max-width: 850px;
    margin: 0 auto;
    padding: 100px 30px;
`

const Title = styled.h2`
    text-align: center;
    margin-bottom: 32px;
    font-weight: 400;
    font-size: 24px;
    line-height: 151%;
    margin-bottom: 48px;
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