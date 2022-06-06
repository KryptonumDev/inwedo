import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function TeamSizes({ data: { sectionTitle, subTitle, text, teamSizes } }) {

    return (
        <Wrapper>
            <Container>
                <Content>
                    <TextPart>
                        <h2 className="h4 line">{sectionTitle}</h2>
                        <p className="h3">{subTitle}</p>
                        <p className="p">{text}</p>
                    </TextPart>
                    <SizesGrid>
                        {teamSizes.map((el, index) => (
                            <SizesItem>
                                {el.teamIcons.map(innerEl => (
                                    <Image>
                                        <GatsbyImage className="image" image={innerEl.teamIcon.localFile.childImageSharp.gatsbyImageData} alt={innerEl.teamIcon.altText} />
                                    </Image>
                                ))}
                                <p>{el.teamSizeName}</p>
                            </SizesItem>
                        ))}
                    </SizesGrid>
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);
`

const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 1320px) {
        grid-template-columns: 1fr;
        grid-gap: 16px;
    }
`

const TextPart = styled.div`
    max-width: 520px;
    
    .line{
        margin-bottom: 16px;
        font-size: clamp(14px, 2.08vw, 18px);
    }

    .h3{
        margin-bottom: 16px;
        font-size: clamp(20px, 2.86vw, 24px);
    }

    .p{
        font-size: clamp(14px, 1.95vw, 16px);
    }

    @media (max-width: 1320px) {
        max-width: 1000px;
    }
`

const SizesGrid = styled.div`
    display: grid;
    grid-gap: 32px;
    
`

const SizesItem = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;
    p{
        font-weight: 400;
        font-size: 20px;
        line-height: 151%;
    }
`

const Image = styled.div`
    border-radius: 8px;
    filter: var(--shadow);
    background-color: var(--color-white);
    max-width: 70px;
    width: 100%;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    .image{
        width: fit-content;
        height: fit-content;
        max-width: 50px;
    }
`