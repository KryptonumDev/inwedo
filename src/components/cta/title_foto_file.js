import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from 'styled-components'

export default ({ title, button, image, downloadFile }) => (
    <ContentWrapper>
        <Content>
            <div className="content">
                <Title className="h1">{title}</Title>
                <Button download href={downloadFile.localFile.publicURL} className='button-white'>
                    <span>{button}</span>
                </Button>
            </div>
            <Image image={image.localFile.childImageSharp.gatsbyImageData} alt={image.altText} />
        </Content>
    </ContentWrapper>
)

const ContentWrapper = styled.div`
    background: var(--color-accent);
    border-radius: 24.5221px;
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
    padding: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    .content{
        max-width: 480px;
    }

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        text-align: center;
        padding: 48px 28px 64px;
    }
`

const Image = styled(GatsbyImage)`
    box-shadow: var(--shadow);
    width: fit-content;
    margin-left: 18px;

    img{
        border-radius: 8px;
    }

    @media (max-width: 768px) {
        margin: 0 60px 24px 60px;
    }

    @media (max-width: 350px) {
        margin: 0 0 24px 0;
    }
`

const Title = styled.h2`
    color: var(--color-white);
    margin-bottom: 32px;

    &.h1{
        font-weight: 600;
        font-size: clamp(20px, 3.385vw, 38px);
    }
`

const Button = styled.a`
    display: block;
    width: fit-content;

    span{
        font-weight: 400;
        font-size: clamp(14px, 1.95vw, 16px);
        line-height: 151%;
        color: #495057;
        letter-spacing: 0.01em;
    }

    @media (max-width: 768px){
        margin: 0 auto;
    }
`