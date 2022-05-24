import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function RemoteWorkshop({ data: { sectionTitle, subTitle, textUnderTitles, cards, toolsTitle, tools } }) {
    return (
        <Wrapper>
            <LocContainer>
                <h2 className="h4 line">{sectionTitle}</h2>
                <h3 className="h1">{subTitle}</h3>
                <p className="h4">{textUnderTitles}</p>
                <CardsGrid>
                    {cards.map(el => (
                        <CardsItem>
                            <GatsbyImage className="image" image={el.cardIcon.localFile.childImageSharp.gatsbyImageData} />
                            <h3>{el.cardText}</h3>
                        </CardsItem>
                    ))}
                </CardsGrid>
                <h3 className="h1 tools">{toolsTitle}</h3>
                <ToolsGrid>
                    {tools.map(el => (
                        <ToolsItem>
                            <GatsbyImage image={el.toolIcon.localFile.childImageSharp.gatsbyImageData} alt={el.altText} />
                        </ToolsItem>
                    ))}
                </ToolsGrid>
            </LocContainer>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);

    .line{
        margin-bottom: 16px;
        opacity: .5;
    }

    .h1{
        margin-bottom: 24px;
    }

    .tools{
        margin-bottom: 24px;
    }
`

const LocContainer = styled(Container)`
    max-width: 864px;
`

const CardsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px 64px;
    margin: 64px 0;
`

const CardsItem = styled.div`
    border-radius: 8px;
    background-color: var(--color-white);
    filter: var(--shadow);
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 16px;
    padding: 32px 24px;

    .image{
        width: fit-content;
        height: fit-content;
    }

    h3{
        font-weight: 400;
        font-size: 20px;
        line-height: 151%;
    }
`

const ToolsGrid = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;
`

const ToolsItem = styled.div`
    width: 86px;
    aspect-ratio: 1/1;
    border-radius: 8px;
    background-color: var(--color-white);
    filter: var(--shadow);
    display: flex;
    justify-content: center;
    align-items: center;
`