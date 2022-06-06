import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../../style"

export default function Hero({ data: { author: { userPosition, userName, userBigImage, userAvatar }, description } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <TextPart>
                        <h1 className="h1">{userName}</h1>
                        <h2 className="h4">{userPosition }</h2>
                        <div className="p" dangerouslySetInnerHTML={{ __html: description }}></div>
                    </TextPart>
                    <Image image={userBigImage.localFile.childImageSharp.gatsbyImageData} alt={userBigImage.altText} />
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    background-color: var(--color-white);
    padding: clamp(120px, 20.83vw, 200px) 0 clamp(24px, 6.25vw, 64px) 0;
    border-radius: 24.5221px;
    filter: drop-shadow(0px 76px 74px rgba(0, 0, 0, 0.02));

    @media (max-width: 1024px) {
        padding-bottom: 0;
        background-color: transparent;
        filter: unset;
    }
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: clamp(32px, 5.3vw, 96px);

    @media (max-width: 1024px) {
        flex-direction: column-reverse;
        max-width: 600px;
        margin: 0 auto;
    }
`

const Image = styled(GatsbyImage)`
    border-radius: 8px;
    filter: var(--shadow);
    width: 100%;
    height: fit-content;
    max-width: 530px;

    @media (max-width: 1024px) {
        max-width: 570px;
    }
`

const TextPart = styled.div`
    max-width: 570px;
    width: 100%;

    .h1{
        margin-bottom: 8px;
        font-size: clamp(16px, 2.6vw, 24px);
    }

    .h4{
        margin-bottom: 32px;
        font-size: clamp(14px, 2.08vw, 18px);
        opacity: .5;
    }

    .p{
        font-size: clamp(14px, 2.08vw, 16px);
    }

    a{
        background: var(--color-accent);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }
`