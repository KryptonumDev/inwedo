import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'
import { datalayerPush } from "../../helpers/datalayer"

export default ({ title, button }) => (
    <ContentWrapper>
        <Content>
            <Title className="h1" dangerouslySetInnerHTML={{ __html: title }}></Title>
            <Button to={button.url} onClick={() => {datalayerPush(button.datalayerJson)}} className='button-white'>
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
    max-width: 930px;
    margin: 0 auto;
    padding: clamp(64px, ${70 / 768 * 100}vw, 76px) 30px;
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
        font-size: clamp(20px, ${25 / 768 * 100}vw, 30px);
    }
`

const Button = styled(Link)`
    display: block;
    margin: 0 auto;
    width: fit-content;
`