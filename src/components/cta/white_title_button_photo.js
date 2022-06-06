import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from 'styled-components'

export default ({ title, button, image }) => (
    <ContentWrapper>
        <Content>
            <Image image={image.localFile.childImageSharp.gatsbyImageData} alt={image.altText} />
            <div className="content">
                <Title className="h1 colored">{title}</Title>
                <Button to={button.url} className='button'>
                    <span>{button.name}</span>
                </Button>
            </div>
        </Content>
    </ContentWrapper>
)

const ContentWrapper = styled.div`
    background: var(--color-white);
    border-radius: 24.5221px;
    filter: drop-shadow(0px 0px 74px rgba(0, 0, 0, 0.04)) drop-shadow(0px 0px 34.2124px rgba(0, 0, 0, 0.0211278)) drop-shadow(0px 0px 19.5756px rgba(0, 0, 0, 0.0149169)) drop-shadow(0px 0px 11.8822px rgba(0, 0, 0, 0.0118235)) drop-shadow(0px 0px 7.15957px rgba(0, 0, 0, 0.00994864)) drop-shadow(0px 0px 3.98691px rgba(0, 0, 0, 0.00826364)) drop-shadow(0px 0px 1.71474px rgba(0, 0, 0, 0.0057075));
    
    @media (max-width: 1024px) {
        border-radius: 0;
        width: calc(100% + 64px);
        transform: translateX(-32px);
    }
`

const Content = styled.div`
    padding: clamp(64px, 10.68vw, 100px) 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 876px) {
        flex-direction: column;
        text-align: center;
    }
`

const Image = styled(GatsbyImage)`
    border-radius: 8px;
    filter: var(--shadow);
    max-width: 435px;
    width: 100%;
    margin-right: clamp(32px, 9.375vw, 128px);

    @media (max-width: 876px) {
        margin-right: 0;
        margin-bottom: 32px;
    }
`

const Title = styled.h2`
    color: var(--color-white);
    margin-bottom: 32px;

    &.h1{
        font-weight: 600px;
        font-size: clamp(20px, 3.385vw, 32px);
    }
`

const Button = styled(Link)`
    display: block;
    width: fit-content;
    background: var(--color-accent);

    span{
        color: var(--color-white);
    }

    @media (max-width: 876px) {
        margin: 0 auto;
    }
`