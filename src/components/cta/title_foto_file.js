import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from 'styled-components'

export default ({ title, button, image, file }) => (
    <ContentWrapper>
        <Content>
            <div className="content">
                <Title className="h1">{title}</Title>
                <Button download href={file} className='button-white'>
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
    box-shadow: drop-shadow(0px 0px 74px rgba(0, 0, 0, 0.04)) drop-shadow(0px 0px 34.2124px rgba(0, 0, 0, 0.0211278)) drop-shadow(0px 0px 19.5756px rgba(0, 0, 0, 0.0149169)) drop-shadow(0px 0px 11.8822px rgba(0, 0, 0, 0.0118235)) drop-shadow(0px 0px 7.15957px rgba(0, 0, 0, 0.00994864)) drop-shadow(0px 0px 3.98691px rgba(0, 0, 0, 0.00826364)) drop-shadow(0px 0px 1.71474px rgba(0, 0, 0, 0.0057075));
    

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