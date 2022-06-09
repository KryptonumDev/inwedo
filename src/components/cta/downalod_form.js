
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from 'styled-components'
import GetForm from "../forms/cta-file"

export default ({ title, text, image, form }) => (
    <ContentWrapper>
        <Content>
            <div className="content">
                <Title className="h1">{title}</Title>
                <Text className="h4">{text}</Text>
                <GetForm data={form}/>
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
    padding: clamp(20px, 7.81vw, 100px);
    display: flex;
    justify-content: space-between;
    gap: clamp(32px, 6.25vw, 64px);
    align-items: center;

    .content{
        max-width: 650px;
        width: 100%;
    }

    @media (max-width: 940px) {
        padding: 60px 30px;
        flex-direction: column-reverse;
        text-align: center;
    }
`

const Image = styled(GatsbyImage)`
    border-radius: 8px;
    box-shadow: var(--shadow);
    min-width: fit-content;
    height: fit-content;
`

const Title = styled.h2`
    color: var(--color-white);
    margin-bottom: 16px;
    max-width: 600px;

    &.h1{
        font-weight: 600px;
        font-size: clamp(20px, 3.385vw, 32px);
    }
`

const Text = styled.p`
    color: var(--color-white);
    margin-bottom: 48px;
    max-width: 600px;

    &.p{
        font-size: clamp(14px, 2.083vw, 18px);
    }
`