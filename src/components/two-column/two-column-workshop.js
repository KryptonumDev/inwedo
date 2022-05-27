import React from "react"
import styled from "styled-components"
import { Container } from "../../style"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function TwoColumnFlex({ data: { image, sectionTitle, text, teamMembers }, reverse }) {
    return (
        <Wrapper>
            <Container>
                <Flex reverse={reverse}>
                    <Image className="image" image={image.localFile.childImageSharp.gatsbyImageData} alt={image.altText} />
                    <div className="text">
                        <h2 className="h4 line">{sectionTitle}</h2>
                        <p className="h1">{text}</p>
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
    gap: 128px;
    margin-bottom: 96px;

    .text{
        max-width: 680px;
        h2.h4{
            margin-bottom: 16px;
            opacity: .5;
        }
        p.h1{
            margin-bottom: 64px;
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
        }

        .h4{
            margin-bottom: 12px;
        }
    }
`

const Image = styled(GatsbyImage)`
    filter: var(--shadow);
    border-radius: 8px;
`