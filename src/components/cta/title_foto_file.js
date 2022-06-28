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
                    <span className="colored">{button}</span>
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
    }
`

const Image = styled(GatsbyImage)`
    border-radius: 8px;
    box-shadow: var(--shadow);
    width: fit-content;
    margin-left: 18px;

    @media (max-width: 768px) {
        margin-left: 0;
        margin-bottom: 24px;
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

const Button = styled.a`
    display: block;
    width: fit-content;

    span{
        font-weight: 400;
        font-size: clamp(14px, 1.95vw, 16px);
        line-height: 151%;
    }

    @media (max-width: 768px){
        margin: 0 auto;
    }
`