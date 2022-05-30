import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from 'styled-components'

export default ({ title, text, image, from }) => (
    <ContentWrapper>
        <Content>
            <div className="content">
                <Title className="h1">{title}</Title>
                <Text className="h4">{text}</Text>
                {/* <Button download href={file} className='button-white'>
                    <span>{button}</span>
                </Button> */}
            </div>
            <Image image={image.localFile.childImageSharp.gatsbyImageData} alt={image.altText} />
        </Content>
    </ContentWrapper>
)

const ContentWrapper = styled.div`
    background: var(--color-accent);
    border-radius: 24.5221px;
    filter: drop-shadow(0px 0px 74px rgba(0, 0, 0, 0.04)) drop-shadow(0px 0px 34.2124px rgba(0, 0, 0, 0.0211278)) drop-shadow(0px 0px 19.5756px rgba(0, 0, 0, 0.0149169)) drop-shadow(0px 0px 11.8822px rgba(0, 0, 0, 0.0118235)) drop-shadow(0px 0px 7.15957px rgba(0, 0, 0, 0.00994864)) drop-shadow(0px 0px 3.98691px rgba(0, 0, 0, 0.00826364)) drop-shadow(0px 0px 1.71474px rgba(0, 0, 0, 0.0057075));;
`

const Content = styled.div`
    padding: 100px;
    display: flex;
    justify-content: space-between;
    gap: 64px;
    align-items: center;

    .content{
        max-width: 650px;
    }
`

const Image = styled(GatsbyImage)`
    border-radius: 8px;
    filter: var(--shadow);
    min-width: fit-content;
    height: fit-content;
    margin-left: 18px;
`

const Title = styled.h2`
    color: var(--color-white);
    margin-bottom: 16px;
    max-width: 600px;
`

const Text = styled.p`
    color: var(--color-white);
    margin-bottom: 48px;
    max-width: 600px;
`

const Button = styled.a`
    display: block;
    width: fit-content;

    span{
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
`