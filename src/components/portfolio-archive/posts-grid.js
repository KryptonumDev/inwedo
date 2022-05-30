import React from "react"
import styled from "styled-components"
import { Container } from "../../style"
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export default function PostsGrid({ data, from, to }) {
    return (
        <Wrapper>
            <Container>
                <AnimateSharedLayout>
                    <AnimatePresence exitBeforeEnter>
                        <Grid layout>
                            {data.map((el, index) => {
                                if (index >= from && index <= to) {
                                    return (
                                        <Item
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            layout
                                        >
                                            <Link to={el.caseStudies.currentPostUrl}>
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
                                    )
                                }
                                return null
                            })}
                        </Grid>
                    </AnimatePresence>
                </AnimateSharedLayout>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`

`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 64px;
`

const Item = styled(motion.div)`
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
        padding: 32px 50px 0 50px;

        h3{
            margin-bottom: 8px;
            font-weight: 500;
            font-size: 18px;
            line-height: 151%;
        }

        p{
            margin-bottom: 16px;
        }
    }
`