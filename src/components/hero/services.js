import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../../style"
import { datalayerPush } from '../../helpers/datalayer'

export default function Hero({ data: { text, pageTitle, button, image }, location, analytics }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <Image image={image.localFile.childImageSharp.gatsbyImageData} alt={image.altText} />
                    <TextPart>
                        <h1 className="h4 line">{pageTitle}</h1>
                        <div className="h1" dangerouslySetInnerHTML={{ __html: text }}></div>
                        <Link onClick={() => { datalayerPush(analytics(location)) }} className="button" to={button.url}>{button.name}</Link>
                    </TextPart>
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    background-color: var(--color-white);
    padding: clamp(90px, 11.71vw, 200px) 0 clamp(40px, 9.765vw, 110px) 0;
    border-radius: 24.5221px;
    box-shadow: var(--shadow);
    position: relative;
    z-index: 999;
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: clamp(36px, 7.29vw, 92px);

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const Image = styled(GatsbyImage)`
    box-shadow: var(--shadow);
    width: fit-content;
    height: fit-content;
    min-width: 300px;
    border-radius: 8px 100px 0px 8px;
    
    img{
        border-radius: 8px 100px 0px 8px;
    }

    @media (max-width: 768px){
        min-width: unset;
        border-radius: 8px;
        
        img{
            border-radius: 8px;
        }
    }
`

const TextPart = styled.div`
    max-width: 780px;

    .h4{
        margin-bottom: clamp(12px, 2.083vw, 24px);
        opacity: .55;
        font-size: clamp(14px, 2.083vw, 18px);
    }

    .h1{
        margin-bottom: clamp(16px, 3.6458vw, 40px);

        h1,h2,h3,h4,h5,h6,p{
            font-size: clamp(20px, 3.385vw, 32px);
        }
    }

    @media (max-width: 768px){

        .h4{
            width: fit-content;
            margin: 0 auto;
            margin-bottom: clamp(12px, 2.083vw, 24px);
        }

        .h1{ 
            text-align: center;
        }

        a{
            text-align: center;
            width: fit-content;
            margin: 0 auto;
            margin-bottom: clamp(16px, 3.6458vw, 40px);
        }
    }
`