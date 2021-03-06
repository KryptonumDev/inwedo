import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React, { useEffect } from "react"
import styled from "styled-components"
import { Container } from "../style"
import { urlSystem } from './../contstants/urlSystem'
import { datalayerPush } from './../helpers/datalayer'

export default function OtherCaseStudies({ data: { nodes: items }, title, analytics }) {

    useEffect(() => {
        datalayerPush(analytics.inView(items))
    }, [])

    return (
        <Wrapper>
            <Container>
                <Title className="h3">{title}</Title>
                <Grid>
                    {items.map((el, index) => (
                        <Item>
                            <Link onClick={() => { datalayerPush(analytics.productClick(el, index)) }} to={urlSystem['Portfolio Archive'][el.language.slug] + el.caseStudies.currentPostUrl}>
                                <div className="card">
                                    <GatsbyImage className="logo" image={el.caseStudies.previewCard.previewLogo.localFile.childImageSharp.gatsbyImageData} alt={el.caseStudies.previewCard.previewLogo.altText} />
                                </div>
                                <GatsbyImage className="image" image={el.caseStudies.previewCard.previewImage.localFile.childImageSharp.gatsbyImageData} alt={el.caseStudies.previewCard.previewImage.altText} />
                                <div className="content">
                                    <h3>{el.caseStudies.previewCard.previewTitle}</h3>
                                    <p className="p">{el.caseStudies.previewCard.previewText}</p>
                                    <span className="link">{el.caseStudies.previewCard.readMore}</span>
                                </div>
                            </Link>
                        </Item>
                    ))}
                </Grid>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);
`

const Title = styled.h2`
    text-align: center;
    position: relative;
    padding: 16px 0;
    max-width: 850px;
    margin: 0 auto 28px auto;

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

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 48px;

    @media (max-width: 1100px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 32px;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        max-width: 570px;
        margin: 0 auto;
    }
`

const Item = styled.div`
    width: 100%;
    position: relative;

    .card{
        position: absolute;
        z-index: 10;
        top: 16px;
        left: 24px;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: var(--shadow);
        background: linear-gradient(126.6deg, rgba(255, 255, 255, 0.77) 28.69%, rgba(255, 255, 255, 0.6391) 100%);
        
        .logo{
            width: fit-content;
            height: fit-content;
            max-width: clamp(91px, 13vw, 112px);
            max-height: 24px;

            img{
                height: 100%;
                width: fit-content;
                margin: 0 auto;
                /* height: 24px; */
            }
        }
    }

    .image{
        width: 100%;
        border-radius: 8px;
        
        img{
            border-radius: 8px;
            transition: transform .2s cubic-bezier(0.39, 0.575, 0.565, 1);
        }
    }

    .content{

        padding: 32px 16px 0 16px;

        p.category{
            font-weight: 500;
            font-size: 14px;
            line-height: 26px;
            opacity: .55;
        }

        h3{
            margin-bottom: 8px;
            font-weight: 500;
            font-size: 18px;
            line-height: 151%;
        }

        p.p{
            margin-bottom: 16px;
        }
    }

    a{
        &:hover{
            .link{
                &::after{
                    width: 100%;
                }
            }
            .image{
                img{
                    transform: scale(1.03);
                }
            }
        }
    }
`