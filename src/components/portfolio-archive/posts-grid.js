import React from "react"
import styled from "styled-components"
import { Container } from "../../style"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { datalayerPush } from '../../helpers/datalayer'

export default function PostsGrid({ analytics, data, from, to }) {
    return (
        <Wrapper>
            <Container>
                <Grid>
                    {data.map((el, index) => {
                        if (index >= from && index <= to) {
                            return (
                                <Item>
                                    <Link onClick={() => { datalayerPush(analytics.productClick(el, index)) }} to={el.caseStudies.currentPostUrl}>
                                        <div className="card">
                                            <GatsbyImage className="logo" image={el.caseStudies.previewCard.previewLogo.localFile.childImageSharp.gatsbyImageData} alt={el.caseStudies.previewCard.previewLogo.altText} />
                                        </div>
                                        <GatsbyImage className="image" image={el.caseStudies.previewCard.previewImage.localFile.childImageSharp.gatsbyImageData} alt={el.caseStudies.previewCard.previewImage.altText} />
                                        <div className="content">
                                            <h3 className="h4">{el.caseStudies.previewCard.previewTitle}</h3>
                                            <p className="p">{el.caseStudies.previewCard.previewText}</p>
                                            <span className="link">{el.caseStudies.previewCard.readMore}</span>
                                        </div>
                                    </Link>
                                </Item>
                            )
                        }
                        return null
                    })}
                </Grid>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: 64px;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: clamp(32px, 6.25vw, 64px);

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
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
        padding: clamp(10px, 1.69vw, 16px) clamp(18px, 2.73vw, 24px);
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
        position: relative;

        &::before {
            float: left;
            padding-top: 55%;
            content: '';
        }
        &::after {
            display: block;
            content: '';
            clear: both;
        }

        img{
            border-radius: 8px;
            transition: transform .2s cubic-bezier(0.39, 0.575, 0.565, 1);
        }
    }

    .content{
        padding: 32px clamp(16px, 4.16vw, 48px) 0 clamp(16px, 4.16vw, 48px);

        h3{
            margin-bottom: 8px;
            font-weight: 500;
            font-size: 18px;
            line-height: 151%;
        }

        p{
            margin-bottom: 16px;
        }

        span{

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