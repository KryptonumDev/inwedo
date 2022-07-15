import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from 'styled-components'

export default ({ title, button, image }) => (
    <ContentWrapper>
        <Content>
            <Image image={image.localFile.childImageSharp.gatsbyImageData} alt={image.altText} />
            <div className="content">
                <Title className="h1 colored" dangerouslySetInnerHTML={{ __html: title }}></Title>
                <Button to={button.url} className='button'>
                    <span>{button.name}</span>
                </Button>
            </div>
        </Content>
    </ContentWrapper>
)

const ContentWrapper = styled.div`
margin-top: ${props => props.small ? 'clamp(32px, 6.25vw, 64px)' : 'var(--margin-section)'};
    background: var(--color-white);
    border-radius: 24.5221px;
    box-shadow: var(--shadow);
    
    @media (max-width: 1024px) {
        border-radius: 0;
        width: calc(100% + 64px);
        transform: translateX(-32px);
    }

    @media (max-width: 876px){
        box-shadow: unset;
        width: 100%;
        transform: unset;
    }
`

const Content = styled.div`
    padding: clamp(64px, 10.68vw, 81px) clamp(32px, ${54 / 768 * 100}vw, 75px);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 64px;

    .content{
        max-width: 500px;
    }

    @media (max-width: 1024px) {
        padding: clamp(64px, 10.68vw, 81px) 32px;
    }

    @media (max-width: 876px) {
        padding: 0;
        gap: 0;
        flex-direction: column;
        text-align: center;
    }
`

const Image = styled(GatsbyImage)`
    box-shadow: var(--shadow);
    max-width: 508px;
    width: 100%;
    min-width: 400px;

    img{
        border-radius: 8px;
    }

    @media (max-width: 876px) {
        margin-right: 0;
        margin-bottom: 32px;
        min-width: unset;
    }
`

const Title = styled.span`
    color: var(--color-white);
    margin-bottom: 32px;
    display: block;

    h1,h2,h3,h4,h5,h6,p{
        color: var(--color-white);
        font-size: inherit;
        line-height: inherit;
    }

    &.h1{
        font-weight: 600px;
        font-size: clamp(20px, 3.385vw, 24px);
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