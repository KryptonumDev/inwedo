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
    box-shadow: var(--shadow);
    
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
    box-shadow: var(--shadow);
    max-width: 435px;
    width: 100%;
    margin-right: clamp(32px, 9.375vw, 128px);

    img{
        border-radius: 8px;
    }

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