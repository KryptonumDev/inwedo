import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function DevelopmentCards({ data: { twoColumn, cards, success } }) {
    return (
        <Wrapper>
            <Container>
                <Flex>
                    <div className="image">
                        <Image image={twoColumn.image.localFile.childImageSharp.gatsbyImageData} alt={twoColumn.image.altText} />
                    </div>
                    <div className="text">
                        <h2 className="h1 line">{twoColumn.title}</h2>
                        <p className="h4">{twoColumn.subTitle}</p>
                        <p className="p">{twoColumn.text}</p>
                        <Link className="link" to={twoColumn.button.url}>{twoColumn.button.name}</Link>
                    </div>
                </Flex>
                <CardsGrid>
                    {cards.map(el => (
                        <Card>
                            <GatsbyImage className="image" image={el.cardIcon.localFile.childImageSharp.gatsbyImageData} alt={el.cardIcon.altText} />
                            <div>
                                <h3 className="h3">{el.cardTitle}</h3>
                                <p className="p">{el.cardText}</p>
                                <Link className="link" to={el.button.url}>{el.button.name}</Link>
                            </div>
                        </Card>
                    ))}
                </CardsGrid>
                <SuccessStories>
                    <h2 className="h3">{success.title}</h2>
                    {success.storiesCase.map(el => (
                        <div className="flex">
                            <GatsbyImage className="image" image={el.previewImage.localFile.childImageSharp.gatsbyImageData} alt={el.previewImage.altText} />
                            <div className="text">
                                {el.caseLogo
                                    ? <GatsbyImage className="logo" image={el.caseLogo.localFile.childImageSharp.gatsbyImageData} alt={el.caseLogo.altText} />
                                    : null}
                                {el.caseTitle
                                    ? <h3>{el.caseTitle}</h3>
                                    : null}
                                <p className="p">{el.caseText}</p>
                                <Link className="link" to={el.button.url}> {el.button.name}</Link>
                            </div>
                        </div>
                    ))}
                </SuccessStories>
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

const CardsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 64px;
`

const Card = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 32px;
    padding: 64px 24px;
    justify-content: space-between;
    background-color: var(--color-white);
    filter: var(--shadow);
    border-radius: 8px;

    .image{
        width: 115px;
        aspect-ratio: 1/1;
    }

    .h3{
        margin-bottom: 16px;
    }

    .p{
        margin-bottom: 16px;
    }
`

const SuccessStories = styled.div`
    margin-top: 128px;
    display: grid;
    grid-gap: 64px;

    .h3{
        text-align: center;
        max-width: 860px;
        margin: 0 auto 0 auto;
        padding-top: 16px;
        position: relative;

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
    }

    .flex{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 128px;

        .image{
            border-radius: 8px;
        }

        .text{
            display: flex;
            flex-direction: column;
            justify-content: center;

            .logo{
                width: max-content;
            }
            h3{
                font-weight: 400;
                font-size: 22px;
                line-height: 30px;

            }
            h3 + div{
                margin-top: 24px;
            }
            .p{
                margin: 24px 0;
            }
        }
    }
`