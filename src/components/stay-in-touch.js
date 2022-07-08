import React from "react"
import styled from "styled-components"
import { Container } from "../style"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function StayInTouch({ data: { sectionTitle, text, socialMediaLinks } }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <div>
                        <h2 className="h1">{sectionTitle}</h2>
                        <p className="h3">{text}</p>
                    </div>
                    <Grid count={socialMediaLinks.length}>
                        {socialMediaLinks.map(el => (
                            <Link aria-label={el.ariaLabel} to={el.socialLink}>
                                <GatsbyImage className="image" image={el.socialIcon.localFile.childImageSharp.gatsbyImageData} alt={el.socialIcon.altText} />
                            </Link>
                        ))}
                    </Grid>
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 32px;

    @media (max-width: 640px) {
        display: block;

        .h1{
            text-align: center;
        }

        .h3{
            text-align: center;
            margin-bottom: 32px;
        }
    }

    .h1{
        margin-bottom: 16px;
        max-width: 700px;
        font-size: clamp(20px, ${26 / 768 * 100}vw, 32px);
    }

    .h3{
        max-width: 700px;
        font-size: clamp(16px, ${20 / 768 * 100}vw, 24px);
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.count}, 1fr);
    grid-gap: clamp(24px, ${33 / 768 * 100}vw, 42px);

    a{
        transition: transform .3s cubic-bezier(0.39, 0.575, 0.565, 1);
        &:hover{
            transform: translateY(-4px);
        }
    }

    .image{
        max-width: clamp(48px, ${58 / 768 * 100}vw, 68px);
        min-width: 48px;
        width: 100%;
        height: fit-content;
    }

    @media (max-width: 640px) {
        width: fit-content;
        margin: 0 auto;
    }
`