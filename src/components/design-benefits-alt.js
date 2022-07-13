import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function DesignBenefits({ data: { sectionTitle, text, benefits } }) {
    return (
        <Wrapper>
            <Container>
                <Title>
                    <h2 className="line h4">{sectionTitle}</h2>
                    <p className="h2">{text}</p>
                </Title>
                <Grid>
                    {benefits.map(el => (
                        <Item>
                            <img className="image" src={el.benefitIcon.localFile.publicURL} alt={el.benefitIcon.altText} />
                            <div>
                                <h3>{el.benefitTitle}</h3>
                                <p>{el.benefitText}</p>
                            </div>
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

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: clamp(32px, 5.2vw, 48px);
    grid-gap: clamp(32px, 5.2vw, 48px);

    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        max-width: 500px;
    }
`

const Item = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 32px;

    .image{
        max-width: 48px;
        width: fit-content;
        height: fit-content;
    }

    h3{
        font-weight: 400;
        font-size: clamp(14px, ${17 / 768 * 100}vw,20px);
        line-height: 151%;
        margin-bottom: 12px;
    }

    p{
        font-weight: 300;
        font-size: clamp(14px, ${16 / 768 * 100}vw, 18px);
        line-height: 151%;
    }
`

const Title = styled.div`
    .line{
        opacity: .55;
        margin-bottom: 16px;
        font-size: clamp(14px, 2.08vw, 18px);
    }

    .h2{
        font-size: clamp(20px, 2.86vw, 24px);
    }
`