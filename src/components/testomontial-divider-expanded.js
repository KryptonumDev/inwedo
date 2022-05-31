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
    margin: 0 128px;
    border-radius: 24px;
    background-color: var(--color-white);
    filter: var(--shadow);
    padding: 64px 128px;
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
        margin-bottom: 36px;

        .image{
            margin-right: 48px;
        }

        .name{
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
        }

        .position{
            font-weight: 300;
            font-size: 12px;
            line-height: 16px;
        }
    }

    .h3{
        margin-bottom: 8px;
    }

    .h4{
        margin-bottom: 16px;
    }
`
