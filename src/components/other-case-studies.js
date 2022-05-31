import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function OtherCaseStudies({ data: { nodes: items }, title }) {
    return (
        <Wrapper>
            <Container>
                <Title className="h3">{title}</Title>
                <Grid>
                    {items.map(el => (
                        <Item>
                            <Link to={el.caseStudies.currentPostUrl}>
                                <div className="card">
                                    <GatsbyImage className="logo" image={el.caseStudies.previewCard.previewLogo.localFile.childImageSharp.gatsbyImageData} alt={el.caseStudies.previewCard.previewLogo.altText} />
                                </div>
                                <GatsbyImage className="image" image={el.caseStudies.previewCard.previewImage.localFile.childImageSharp.gatsbyImageData} alt={el.caseStudies.previewCard.previewImage.altText} />
                                <div className="content">
                                    <p className="category">
                                        {(() => {
                                            let arr = el.categoriesPortfolio.nodes.filter(inEL => inEL.wpParent === null)
                                            return '#' + arr[0].name
                                        })()}
                                    </p>
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
    margin: 0 auto 92px auto;

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
    margin-top: 48px;
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
        filter: var(--shadow);
        background: linear-gradient(126.6deg, rgba(255, 255, 255, 0.77) 28.69%, rgba(255, 255, 255, 0.6391) 100%);
        .logo{
            width: fit-content;
            height: fit-content;
        }
    }

    .image{
        width: 100%;
        height: fit-content;
        border-radius: 8px;
    }

    .content{

        padding: 32px 16px 0 16px;

        p.category{
            font-weight: 500;
            font-size: 14px;
            line-height: 26px;
            opacity: .5;
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
`