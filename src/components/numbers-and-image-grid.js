import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { datalayerPush } from "../helpers/datalayer"
import { Container } from "../style"

export default function NumbersAndImages({ data: { imgGrid, numbersContent, textContent } }) {
    return (
        <Wrapper>
            <LocalContainer>
                <div>
                    <Content>
                        <h2 className="h4 line">{textContent.title}</h2>
                        <h3 className="h1">{textContent.subTitle}</h3>
                        <div dangerouslySetInnerHTML={{ __html: textContent.textContent }} />
                        <Link onClick={() => {datalayerPush(textContent.button.datalayerJson)}} className="button" to={textContent.button.url}>{textContent.button.name}</Link>
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
                                return null
                            })}
                        </NumbersGrid>
                    </Numbers>
                </div>
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

    @media (max-width: 920px){
        display: flex;
        flex-direction: column-reverse;
    }
`

const Content = styled.div`
    max-width: 562px;
    width: 100%;

    .h4{
        opacity: .55;
        margin-bottom: 16px;
        font-size: clamp(14px, 2.08vw, 18px);
    }

    .h1{
        margin-bottom: clamp(22px, 3.385vw, 32px);
        font-size: clamp(20px, 3.385vw, 32px);
    }

    div{
        display: grid;
        grid-gap: 32px;
        margin-bottom: 32px;
        max-width: 538px;
        h1,h2,h3,h4,h5,h6,p{
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            line-height: 26px;
            font-feature-settings: 'ss01' on;

            strong{
                font-size: 18px; 
                font-weight: 400;
            }
        }
    }

    @media (max-width: 920px){
        margin: 0 auto;
    }
`

const Numbers = styled.div`
    max-width: 533px;
    margin-top: clamp(22px, 6.25vw, 96px);

    @media (max-width: 920px){
        margin: 0 auto;
        margin-top: clamp(22px, 6.25vw, 96px);
    }
`

const NumbersMainItem = styled.div`
    padding: 32px;
    display: flex;
    gap: 32px;
    justify-content: space-between;
    align-items: center;
    box-shadow: var(--shadow);
    border-radius: 24px;
    background-color: var(--color-white);

    @media (max-width: 370px) {
        gap: 20px;
        padding: 20px;
    }

    @media (max-width: 310px){
        gap: 16px;
        padding: 20px 16px;
    }

    .h1{
        font-size: clamp(42px, 7.29vw, 70px) !important;

        @media (max-width: 370px){
            font-size: 38px;
        }
    }

    .h3{
        font-size: clamp(14px, 2.47vw, 24px);

        @media (max-width: 370px) {
            font-size: 12px;
        }
    }
`

const NumbersGrid = styled.div`
    display: flex;
    justify-content: space-between;

    margin-top: clamp(22px, 3.77vw, 36px);

    div{
        width: clamp(86px, ${115 / 768 * 100}vw, 150px);

        @media (max-width: 900px) {
            width: 130px;
        }

        @media (max-width: 640px) {
            width: clamp(86px, ${130 / 640 * 100}vw, 130px);
        }

        @media (max-width: 370px) {
            width: 82px;
        }

    }

    .number{
        width: clamp(86px, ${115 / 768 * 100}vw, 150px);
        height: clamp(86px, ${115 / 768 * 100}vw, 150px);

        @media (max-width: 900px) {
            width: 130px;
            height: 130px;
        }

        @media (max-width: 640px) {
            width: clamp(86px, ${130 / 640 * 100}vw, 130px);
            height: clamp(86px, ${130 / 640 * 100}vw, 130px);
        }

        @media (max-width: 370px) {
            width: 82px;    
            height: 82px;
        }
        
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: clamp(12px, 1.95vw, 18px);

        box-shadow: var(--shadow);
        border-radius: 24px;
        background-color: var(--color-white);
        font-weight: 600;
        font-size: clamp(32px, 5.338vw, 54px);
        line-height: 130%;

    }

    .descr{
        text-align: center;
        display: block;
        font-size: clamp(10px, ${16 / 768 * 100}vw, 16px);
    }
`

const Grid = styled.div`

    position: absolute;
    right: -210px;
    top: 0;

    width: 862px;
    height: 955px;

    .lt{
        position: absolute;
        left: 50px;
        top: 182px;
        box-shadow: var(--shadow);
        width: 300px;
        height: 382px;
        img{
            border-radius: 8px;
        }
    }
    .rt{
        position: absolute;
        right: 92px;
        top: 0; 
        box-shadow: var(--shadow);
        width: 387px;
        height: 439px;
        img{
            border-radius: 8px;
        }
    }
    .lb{
        position: absolute;
        left: 0;
        bottom: 0;
        box-shadow: var(--shadow);
        width: 348px;
        height: 303px;
        img{
            border-radius: 8px;
        }
    }
    .rb{
        position: absolute;
        right: 0;
        bottom: 92px;
        box-shadow: var(--shadow);
        width: 479px;
        height: 348px;
        img{
            border-radius: 8px;
        }
    }

    @media (max-width: 1260px) {
        right: unset;
        left: 594px;
    }

    @media (max-width: 920px) {
        left: 0;
        margin: 0 auto;
        margin-bottom: 48px;

        width: calc(100% + 120px);
        transform: translateX(-46px);
        max-height: 920px;
        height: unset;
        position: relative;

        &::before {
            float: left;
            padding-top: 109%;
            content: '';
        }
        &::after {
            display: block;
            content: '';
            clear: both;
        }

        .lt{
            width: 34.52%;
            height: fit-content;
            left: 5.75%;
            top: 20.94%;
        }

        .rt{
            width: 44.53%;
            height: fit-content;
            right: 10.58%;
        }

        .lb{
            width: 40.04%;
            height: fit-content;
        }

        .rb{
            width: 55.12%;
            height: fit-content;
            bottom: 10.586%;
        }
    }
`