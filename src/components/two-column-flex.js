import React from "react"
import styled from "styled-components"
import { Container } from "../style"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function TwoColumnFlex({ data: { image, title, subTitle, text, button } }) {
    return (
        <Wrapper>
            <Container>
                <Flex>
                    <div className="image">
                        <Image image={image.localFile.childImageSharp.gatsbyImageData} alt={image.altText} />
                    </div>
                    <div className="text">
                        <h2 className="h1 line">{title}</h2>
                        <p className="h4">{subTitle}</p>
                        <p className="p">{text}</p>
                        <Link className="link" to={button.url}>{button.name}</Link>
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
    justify-content: space-between;
    align-items: center;
    gap: 128px;
    margin-bottom: 96px;

    .image{
        background-color: var(--color-white);
        filter: var(--shadow);
        border-radius: 24px;
        padding: 54px 64px;
    }

    .text{
        max-width: 680px;

        .h1{
            margin-bottom: 24px;
        }
        .h4{
            margin-bottom: 16px;
        }
        .p{
            margin-bottom: 24px;
        }
    }
`

const Image = styled(GatsbyImage)`
`