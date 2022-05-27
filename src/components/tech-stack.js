import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function TechStack({ data: { sectionTitle, technologies } }) {
    return (
        <Wrapper>
            <Container>
                <h2 className="h3">{sectionTitle}</h2>
                <TechnologiesGrid>
                    {technologies.map(el => (
                        <>
                            {el.technologieUrl
                                ? <TechnologiesLink to={el.technologieUrl} aria-label='link to technology page'>
                                    <GatsbyImage className="image" image={el.techologieIcon.localFile.childImageSharp.gatsbyImageData} alt={el.techologieIcon.altText} />
                                </TechnologiesLink>
                                : <TechnologiesItem>
                                    <GatsbyImage className="image" image={el.techologieIcon.localFile.childImageSharp.gatsbyImageData} alt={el.techologieIcon.altText} />
                                </TechnologiesItem>
                            }
                        </>
                    ))}
                </TechnologiesGrid>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);
    h2{
        text-align: center;
        max-width: 860px;
        margin: 0 auto 0 auto;
        padding-top: 16px;
        position: relative;

        &::before{
            content: "";
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 0;
            width: 40px;
            height: 1px;
            background-color: var(--color-black);
        }
    }
`

const TechnologiesGrid = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 64px;
    margin-top: 64px;
`

const TechnologiesLink = styled(Link)`
    width: 86px;
    height: 86px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: var(--color-white);
    filter: var(--shadow);

    .image{
        max-width: 54px;
        height: fit-content;
    }
`

const TechnologiesItem = styled.div`
    width: 86px;
    height: 86px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: var(--color-white);
    filter: var(--shadow);

    .image{
        max-width: 54px;
        height: fit-content;
    }
`