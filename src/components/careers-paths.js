import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function CareersPaths({ data: { sectionTitle, seoTitle, boldText, plainText, paths } }) {
    return (
        <Wrapper>
            <Container>
                <Title>{sectionTitle}</Title>
                <Content>
                    <div>
                        <h3 className="line h4">{seoTitle}</h3>
                        <p className="h3">{boldText}</p>
                        <div className="p" dangerouslySetInnerHTML={{ __html: plainText }}></div>
                    </div>
                    <div className="grid">
                        {paths.map(el => (
                            <Link className="item" to={el.link.url}>
                                <div className="icon-wrapper">
                                    <GatsbyImage className="icon" image={el.icon.localFile.childImageSharp.gatsbyImageData} alt={el.icon.altText} />
                                </div>
                                <div>
                                    <h4 className="h4">{el.title}</h4>
                                    <p className="link">{el.link.name}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);

    .h4{
        opacity: .55;
        margin-bottom: 16px;
        font-size: clamp(14px, ${16 / 768 * 100}vw, 18px);
    }

    .h3{
        margin-bottom: 16px;
        font-size: clamp(20px, ${2 / 768 * 100}vw, 24px);
    }

    p{
        font-size: clamp(14px, ${16 / 768 * 100}vw, 18px);
    }

    p+p{
        margin-top: 16px;
    }
`

const Title = styled.h2`
    text-align: center;
    position: relative;
    padding: 16px 0 0 0;    
    max-width: 540px; 
    margin: 0 auto clamp(32px, 6.25vw, 64px) auto;
    font-size: clamp(16px, 3.125vw, 24px);
    font-weight: 400;
    line-height: 151%;


    &::before{
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 0;
        width: 40px;
        height: 1px;
        background-color: var(--color-black);
    }
`

const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: clamp(32px, ${64 / 768 * 100}vw, 96px);

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        max-width: 570px;
    }

    .item{
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 32px;
        align-items: center;

        .h4{
            margin-bottom: 8px;
            opacity: 1;
        }

        .icon-wrapper{
            padding: 16px;
            border-radius: 8px;
            background-color: var(--color-white);
            box-shadow: var(--shadow);
            
            .icon{
                width: clamp(64px, ${73 / 768 * 100}vw, 81px);
                height: clamp(64px, ${73 / 768 * 100}vw, 81px);
            }
        }
    }

    .grid{
        display: grid;
        grid-gap: 32px;
    }
`