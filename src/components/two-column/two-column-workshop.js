import React from "react"
import styled from "styled-components"
import { Container } from "../../style"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function TwoColumnFlex({ data: { image, sectionTitle, text, teamMembers }, reverse, size }) {
    return (
        <Wrapper>
            <Container>
                <Flex size={size} reverse={reverse}>
                    <div className="mobile text">
                        <h2 className="h4 line">{sectionTitle}</h2>
                        <p className="h1">{text}</p>
                    </div>
                    <Image className="image" image={image.localFile.childImageSharp.gatsbyImageData} alt={image.altText} />
                    <div className="text">
                        <div className="desctop">
                            <h2 className="h4 line">{sectionTitle}</h2>
                            <p className="h1">{text}</p>
                        </div>
                        <Grid>
                            {teamMembers.map(el => (
                                <div className="flex">
                                    <GatsbyImage className="icon" image={el.memberIcon.localFile.childImageSharp.gatsbyImageData} alt={el.memberIcon.altText} />
                                    <div>
                                        <p className="h4">{el.memberTitle}</p>
                                        <p className="p">{el.memberText}</p>
                                    </div>
                                </div>
                            ))}
                        </Grid>
                    </div>
                </Flex>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);
`

const Flex = styled.div`
    display: flex;
    flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
    justify-content: space-between;
    align-items: center;
    gap: clamp(40px, 7.8125vw, 80px);

    .text{
        max-width: 680px;
        h2.h4{
            margin-bottom: 16px;
            opacity: .55;
            font-size: clamp(14px, 2.08vw, 18px);
        }
        p.h1{
            margin-bottom: clamp(32px, 6.25vw, 64px);
            font-size: clamp(20px, 3.38vw, ${props => props.size ? props.size : '24px'});
            max-width: 610px;
        }
    }

    .mobile{
        display: none;
    }

    @media (max-width: 1024px) {
        flex-direction: column;
        gap: 0;

        .desctop{
            display: none;
        }

        .mobile{
            display: block;
        }
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;

    .flex{
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 18px;

        .icon{
            width: fit-content;
            height: fit-content;
            margin-top: 8px;
        }

        .h4{
            margin-bottom: 12px;
            font-weight: 600;
            font-size: clamp(14px, 2.08vw, 18px);
        }
    }

    @media (max-width: 540px) {
        grid-template-columns: 1fr;
    }
`

const Image = styled(GatsbyImage)`
    box-shadow: var(--shadow);
    border-radius: 8px;
    width: fit-content;
    height: fit-content;
    min-width: 400px;

    @media (max-width: 1024px){
        min-width: unset;
        max-width: fit-content;
        width: 100%;
        margin: 0 24px;
        margin-bottom: 48px;
    }
`