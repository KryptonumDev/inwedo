import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function NumbersAndImages({ data: { imgGrid, numbersContent, textContent } }) {
    return (
        <Wrapper>
            <LocalContainer>
                <Content>
                    <h2 className="h4 line">{textContent.title}</h2>
                    <h3 className="h1">{textContent.subTitle}</h3>
                    <div dangerouslySetInnerHTML={{ __html: textContent.textContent }} />
                    <Link className="button" to={textContent.button.url}>{textContent.button.name}</Link>
                </Content>
                <Numbers>
                    <NumbersMainItem>
                        <span className="h1 display colored">
                            {numbersContent[0].number}
                            {numbersContent[0].addPlusSymbol ? '+' : null}
                        </span>
                        <span className="h3">
                            {numbersContent[0].numberDescription}
                        </span>
                    </NumbersMainItem>
                    <NumbersGrid>
                        {numbersContent.map((el, index) => {
                            if (index > 0) {
                                return (
                                    <div>
                                        <span className="number">
                                            {el.number}{numbersContent[0].addPlusSymbol === null ? null : '+'}
                                        </span>
                                        <span className="descr p">
                                            {el.numberDescription}
                                        </span>
                                    </div>
                                )
                            }
                        })}
                    </NumbersGrid>
                </Numbers>
                <Grid>
                    <GatsbyImage className="lt" image={imgGrid.leftTopImage.localFile.childImageSharp.gatsbyImageData} alt={imgGrid.leftTopImage.altText} />
                    <GatsbyImage className="rt" image={imgGrid.rightTopImage.localFile.childImageSharp.gatsbyImageData} alt={imgGrid.rightTopImage.altText} />
                    <GatsbyImage className="lb" image={imgGrid.leftBottomImage.localFile.childImageSharp.gatsbyImageData} alt={imgGrid.leftBottomImage.altText} />
                    <GatsbyImage className="rb" image={imgGrid.rightBottomImage.localFile.childImageSharp.gatsbyImageData} alt={imgGrid.rightBottomImage.altText} />
                </Grid>
            </LocalContainer>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    min-height: 1000px;
    position: relative;
    max-width: 1920px;
    margin: 0 auto;
    margin-top: var(--margin-section);
    overflow: hidden;
`

const LocalContainer = styled(Container)`
    position: relative;
`

const Content = styled.div`
    max-width: 562px;
    width: 100%;

    .h4{
        opacity: .5;
        margin-bottom: 16px;
    }

    .h1{
        margin-bottom: 32px;
    }

    div{
        display: grid;
        grid-gap: 32px;
        margin-bottom: 32px;
        h1,h2,h3,h4,h5,h6,p{
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            line-height: 26px;
            font-feature-settings: 'ss01' on;
        }
    }
`

const Numbers = styled.div`
    max-width: 533px;
    margin-top: 96px;
`

const NumbersMainItem = styled.div`
    padding: 32px;
    display: flex;
    gap: 32px;
    justify-content: space-between;
    align-items: center;
    filter: var(--shadow);
    border-radius: 24px;
    background-color: var(--color-white);

    .h1{
        font-size: 70px;
    }
`

const NumbersGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 48px;
    margin-top: 36px;
    .number{
        aspect-ratio: 1/1;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 18px;

        filter: var(--shadow);
        border-radius: 24px;
        background-color: var(--color-white);
        font-weight: 600;
        font-size: 54px;
        line-height: 70px;

    }

    .descr{
        text-align: center;
        display: block;
    }
`

const Grid = styled.div`
    position: absolute;
    right: -180px;
    top: 0;

    width: 862px;
    height: 955px;

    .lt{
        position: absolute;
        border-radius: 8px;
        left: 50px;
        top: 182px;
    }
    .rt{
        position: absolute;
        border-radius: 8px;
        right: 92px;
        top: 0; 
    }
    .lb{
        position: absolute;
        border-radius: 8px;
        left: 0;
        bottom: 0;
    }
    .rb{
        position: absolute;
        border-radius: 8px;
        right: 0;
        bottom: 92px;
    }
`