import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function DevelopmentCards({ data: { twoColumn, cards, success } }) {
    return (
        <Wrapper>
            <Container>
                <Flex to={twoColumn.button.url}>
                    <div className="image">
                        <Image image={twoColumn.image.localFile.childImageSharp.gatsbyImageData} alt={twoColumn.image.altText} />
                    </div>
                    <div className="text">
                        <h2 className="h1 line">{twoColumn.title}</h2>
                        <p className="h4">{twoColumn.subTitle}</p>
                        <p className="p">{twoColumn.text}</p>
                        <p className="link">{twoColumn.button.name}</p>
                    </div>
                </Flex>
                <CardsGrid>
                    {cards.map(el => (
                        <Card to={el.button.url}>
                            <GatsbyImage className="image" image={el.cardIcon.localFile.childImageSharp.gatsbyImageData} alt={el.cardIcon.altText} />
                            <div>
                                <h3 className="h3">{el.cardTitle}</h3>
                                <p className="p">{el.cardText}</p>
                                <p className="link">{el.button.name}</p>
                            </div>
                        </Card>
                    ))}
                </CardsGrid>
                <SuccessStories>
                    <h2 className="h3">{success.title}</h2>
                    {success.storiesCase.map(el => (
                        <Link to={el.button.url} className="flex">
                            <GatsbyImage className="image" image={el.previewImage.localFile.childImageSharp.gatsbyImageData} alt={el.previewImage.altText} />
                            <div className="text">
                                {el.caseLogo
                                    ? <GatsbyImage className="logo" image={el.caseLogo.localFile.childImageSharp.gatsbyImageData} alt={el.caseLogo.altText} />
                                    : null}
                                {el.caseTitle
                                    ? <h3>{el.caseTitle}</h3>
                                    : null}
                                <p className="p">{el.caseText}</p>
                                <p className="link"> {el.button.name}</p>
                            </div>
                        </Link>
                    ))}
                </SuccessStories>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);
`

const Flex = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: clamp(50px, 10.15vw, 128px);
    margin-bottom: clamp(48px, 9.375vw, 96px);

    .image{
        background-color: var(--color-white);
        box-shadow: var(--shadow);
        border-radius: 24px;
        padding: clamp(16px, 4.94vw, 54px) clamp(24px, 5.20vw, 64px);
        width: clamp(93px, 20vw, 208px);
        min-width: clamp(93px, 20vw, 208px);
    }

    .text{
        max-width: 680px;

        .h1{
            margin-bottom: clamp(8px, 2.08vw, 24px);
            font-size: clamp(20px, 3.38vw, 32px);
        }
        .h4{
            margin-bottom: clamp(12px, 1.82vw, 16px);
        }
        .p{
            margin-bottom: clamp(12px, 2.08vw, 24px);
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`

const Image = styled(GatsbyImage)`
`

const CardsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: clamp(16px, 5.47vw, 64px);

    @media (max-width: 850px) {
        grid-template-columns: 1fr;
    }
`

const Card = styled(Link)`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 32px;
    padding: clamp(25px, 6.51vw, 75px) clamp(20px, 2.86vw, 24px);
    justify-content: space-between;
    background-color: var(--color-white);
    box-shadow: var(--shadow);
    border-radius: 8px;
    max-width: 600px;
    width: 100%;
    box-sizing: border-box;
    margin: 0 auto;

    .image{
        width: clamp(64px, 10.41vw, 115px);
        aspect-ratio: 1/1;
    }

    .h3{
        margin-bottom: clamp(12px, 1.82vw, 16px);
        font-size: clamp(14px, 2.47vw, 24px);
    }

    .p{
        margin-bottom: clamp(12px, 1.82vw, 16px);
        font-size: clamp(12px, 1.82vw, 16px);
    }
`

const SuccessStories = styled.div`
    margin-top: 128px;
    display: grid;
    grid-gap: clamp(32px, 6.25vw, 64px);

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
        grid-gap: clamp(32px, 10.41vw, 128px);

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
                margin: clamp(8px, 2.08vw, 24px) 0;
                font-size: clamp(14px, 1.95vw, 16px);
            }
        }

        @media (max-width: 850px) {
            grid-template-columns: 1fr;
            grid-gap: 32px;
            max-width: 500px;
            margin: 0 auto;
        }
    }
`