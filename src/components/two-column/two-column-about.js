import React from "react"
import styled from "styled-components"
import { Container } from "../../style"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function TwoColumnFlex({ data: { image, title, subTitle, text, button } }) {
    return (
        <Wrapper>
            <Container>
                <Flex>
                    <div className="text">
                        <h2 className="h4 line">{title}</h2>
                        <p className="h3">{subTitle}</p>
                        <div className="p" dangerouslySetInnerHTML={{ __html: text }}></div>
                        {button.url
                            ? <Link className="link" to={button.url}>{button.name}</Link>
                            : null}
                    </div>
                    <Image className="image" image={image.localFile.childImageSharp.gatsbyImageData} alt={image.altText} />
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
    gap: 40px;

    .image{
        filter: var(--shadow);
        border-radius: 8px;
    }

    .text{
        max-width: 610px;

        .h4{
            margin-bottom: 16px;
            opacity: .5;
        }
        .h3{
            margin-bottom: 24px;
        }
        .p{
            margin-bottom: 24px;

            p+p{
                margin-top: 24px;
            }
        }
    }
`

const Image = styled(GatsbyImage)`
`