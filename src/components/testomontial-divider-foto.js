import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"
import Quote from './../images/quote.png'

export default function TestomontialDivider({ data: { testomontialText, personName, personPosition, companyLogo }, small, index }) {
    return (
        <Wrapper id={index} small={small}>
            <Container>
                <Card quote={Quote}>
                    <div className="flex">
                        <GatsbyImage className="image" image={companyLogo.localFile.childImageSharp.gatsbyImageData} alt={companyLogo.altText} />
                        <div>
                            <p className="name">{personName}</p>
                            <p className="position">{personPosition}</p>
                        </div>
                    </div>
                    <p className="p">{testomontialText}</p>
                </Card>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: ${props => props.small ? 'clamp(32px, 6.25vw, 64px)' : 'var(--margin-section)'};
`

const Card = styled.div`
    max-width: 984px;
    box-sizing: border-box;
    margin: 0 auto;
    border-radius: 24px;
    background-color: var(--color-white);
    box-shadow: var(--shadow);
    padding: 64px clamp(30px, 6.25vw, 128px);
    position: relative;

    &::after{
        content: url(${props => props.quote});
        position: absolute;
        right: 40px;
        top: 40px;
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

        @media (max-width: 640px) {
            flex-direction: column;
            align-items: flex-start;
            .image{
                margin-right: 0;
                margin-bottom: 32px;
            }
        }
    }
`
