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
                            <img className="image" src={el.cardIcon.localFile.publicURL} />
                            <h3>{el.cardText}</h3>
                        </CardsItem>
                    ))}
                </CardsGrid>
                <h3 className="h1 tools">{toolsTitle}</h3>
                <ToolsGrid>
                    {tools.map(el => (
                        <ToolsItem>
                            <img className="image" src={el.toolIcon.localFile.publicURL} alt={el.altText} />
                        </ToolsItem>
                    ))}
                </ToolsGrid>
            </LocContainer>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);

    .h4.line{
        margin-bottom: 16px;
        opacity: .55;
        font-size: clamp(14px, 2.08vw, 18px);
    }

    .h1{
        margin-bottom: 24px;
        font-size: clamp(20px, 3.38vw, 32px);
    }

    .h4{
       font-weight: 300;
       font-size: clamp(14px, 2.08vw, 18px);
    }

    .tools{
        margin-bottom: clamp(16px, 2.08vw, 24px);
        font-size: clamp(20px, 3.38vw, 32px);

        @media (max-width: 680px){
            text-align: center;
        }
    }
`

const LocContainer = styled(Container)`
    max-width: 864px;
`

const CardsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: clamp(16px, 3.125vw, 32px) clamp(32px, 6.25vw, 64px);
    margin: clamp(32px, 6.25vw, 64px) 0;

    @media (max-width: 600px){
        grid-template-columns: 1fr;
    }
`

const CardsItem = styled.div`
    border-radius: 8px;
    background-color: var(--color-white);
    box-shadow: var(--shadow);
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 16px;
    padding: clamp(24px, 3.64vw, 32px) 24px;
    align-items: center;

    .image{
        width: fit-content;
        height: fit-content;
    }

    h3{
        font-weight: 400;
        font-size: clamp(14px, 2.21vw, 20px);
        line-height: 151%;

        @media(max-width: 680px){
            font-weight: 500;
        }
    }
`

const ToolsGrid = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;

    @media (max-width: 680px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 36px;
        padding: 0 32px;
    }

    @media (max-width: 350px) {
        grid-template-columns: 1fr 1fr;
    }
`

const ToolsItem = styled.div`
    width: 86px;
    height: 86px;
    border-radius: 8px;
    background-color: var(--color-white);
    box-shadow: var(--shadow);
    display: flex;
    justify-content: center;
    align-items: center;

    .image{
        width: fit-content;
        height: fit-content;
    }

    @media (max-width: 680px){
        margin: 0 auto;
        width: unset;
        height: unset;
        padding: 8px;
    }
`