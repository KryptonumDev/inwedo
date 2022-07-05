import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"
import Quote from './../images/quote.png'

export default function TestomontialDivider({ data: { testomontialTitle, boldText, plainText, personName, personPosition, companyLogo } }) {
    return (
        <Wrapper>
            <Container>
                <Card quote={Quote}>
                    <div className="flex">
                        <GatsbyImage className="image" image={companyLogo.localFile.childImageSharp.gatsbyImageData} alt={companyLogo.altText} />
                        <div>
                            <p className="name">{personName}</p>
                            <p className="position">{personPosition}</p>
                        </div>
                    </div>
                    <h2 className="h3">{testomontialTitle}</h2>
                    <p className="h4">{boldText}</p>
                    <p className="p">{plainText}</p>
                </Card>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);
`

const Card = styled.div`
    margin: 0 clamp(0px, 8.3vw, 128px);
    border-radius: 24px;
    background-color: var(--color-white);
    box-shadow: var(--shadow);
    padding: 64px clamp(30px, 6.25vw, 128px);
    position: relative;

    @media (max-width: 480px) {
        margin: 0;
    }

    &::after{
        content: url(${props => props.quote});
        position: absolute;
        right: 40px;
        top: 40px;

        @media (max-width: 640px) {
            display: none;
        }
    }

    .flex{
        display: flex;
        align-items: center;
        margin-bottom: clamp(16px, 3.38vw, 36px);

        .image{
            margin-right: clamp(16px, 5.2vw, 24px);
            max-width: clamp(60px, 23.43vw, 68px);
            width: 100%;

            img{
                border-radius: 50%;
            }
        }

        .name{
            font-weight: 400;
            font-size: clamp(12px, 1.82vw, 14px);
            line-height: 21px;
        }

        .position{
            font-weight: 300;
            font-size: clamp(10px, 1.5625vw, 12px);
            line-height: 16px;
        }
    }

    .h3{
        margin-bottom: 8px;
        font-size: clamp(16px, 2.6vw, 24px);
    }

    .h4{
        margin-bottom: 16px;
        font-size: clamp(14px, 2.08vw, 18px);
    }
`
