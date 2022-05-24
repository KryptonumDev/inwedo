import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function WorkshopBenefits({ data: { sectionTitle, text, image, benefits } }) {
    return (
        <Wrapper>
            <Container>
                <h2 className="h4 line">{sectionTitle}</h2>
                <p className="h1">{text}</p>
                <Content>
                    <GatsbyImage className="left-image" image={image.localFile.childImageSharp.gatsbyImageData} alt={image.altText} />
                    <BenefitsGrid>
                        {benefits.map(el => (
                            <BenefitsItem>
                                <GatsbyImage className="image" image={el.benefitIcon.localFile.childImageSharp.gatsbyImageData} alt={el.altText} />
                                <div>
                                    <h3>{el.benefitTitle}</h3>
                                    <p>{el.benfitText}</p>
                                </div>
                            </BenefitsItem>
                        ))}
                    </BenefitsGrid>
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);

    .h4{
        margin-bottom: 16px;
        opacity: .5;
    }
    
    .h1{
        margin-bottom: 48px;
    }
`

const Content = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 55px;

    .left-image{
        width: fit-content;
        height: fit-content;
        border-radius: 8px;
        filter: var(--shadow);
    }
`

const BenefitsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 48px;
`

const BenefitsItem = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 32px;

    .image{
        width: fit-content;
        height: fit-content;
    }

    h3{
        font-weight: 400;
        font-size: 18px;
        line-height: 151%;
        margin-bottom: 8px;
    }

    p{
        font-weight: 300;
        font-size: 14px;
        line-height: 21px;
    }
`