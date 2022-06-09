import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"
import Quote from './../images/quote.png'

export default function TestomontialDividerAlt({ data: { sectionTitle, testomontialText, personName, personPosition, companyLogo } }) {
    return (
        <Wrapper>
            <Container>
                <h2 className="h3">{sectionTitle}</h2>
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
    margin-top: var(--margin-section);

    h2{
        text-align: center;
        position: relative;
        padding: 16px 0 0 0;    
        max-width: 850px;
        margin: 0 auto clamp(32px, 6.25vw, 64px) auto;
        
        &.h3{
            font-size: clamp(16px, 3.125vw, 24px);
        }

        &::before{
            content: '';
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

        @media (max-width: 640px) {
            display: none;
        }
    }

    .flex{
        display: flex;
        align-items: center;
        margin-bottom: clamp(16px, 3.38vw, 36px);

        .image{
            margin-right: clamp(32px, 5.2vw, 48px);
            max-width: clamp(120px, 23.43vw, 180px);
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
`
