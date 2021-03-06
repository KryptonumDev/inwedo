import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function DesignBenefits({ data: { sectionTitle, benefits } }) {
    return (
        <Wrapper>
            <Container>
                <Title className="h3">{sectionTitle}</Title>
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
    grid-gap: clamp(32px, 5.2vw, 48px);
    margin-top: clamp(48px, 7.29vw, 64px);

    @media (max-width: 876px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 640px) {
        grid-template-columns: 1fr;
        max-width: 440px;
    }
`

const Item = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 32px;

    .image{
        width: 48px;
        height: 48px;
    }

    h3{
        font-weight: 400;
        font-size: 20px;
        line-height: 151%;
        margin-bottom: 12px;
    }

    p{
        font-weight: 300;
        font-size: 18px;
        line-height: 151%;
    }
`

const Title = styled.h2`
    text-align: center;
    max-width: 860px;
    margin: 0 auto 0 auto;
    padding-top: 16px;
    position: relative;
    font-size: clamp(20px, 2.86vw, 24px);

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
`