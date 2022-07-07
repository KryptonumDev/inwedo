import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function OurCulture({ data: { sectionTitle, imgGrid, text } }) {
    return (
        <Wrapper>
            <LocContainer>
                <Title>
                    {sectionTitle}
                </Title>
                <Text dangerouslySetInnerHTML={{ __html: text }} />
                <Grid>
                    <GatsbyImage className="lt" image={imgGrid.leftTopImage.localFile.childImageSharp.gatsbyImageData} alt={imgGrid.leftTopImage.altText} />
                    <GatsbyImage className="rt" image={imgGrid.rightTopImage.localFile.childImageSharp.gatsbyImageData} alt={imgGrid.rightTopImage.altText} />
                    <GatsbyImage className="lb" image={imgGrid.leftBottomImage.localFile.childImageSharp.gatsbyImageData} alt={imgGrid.leftBottomImage.altText} />
                    <GatsbyImage className="rb" image={imgGrid.rightBottomImage.localFile.childImageSharp.gatsbyImageData} alt={imgGrid.rightBottomImage.altText} />
                </Grid>
            </LocContainer>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);
    position: relative;
    min-height: 1000px;

    @media (max-width: 1240px){
        min-height: unset;
        margin-bottom: 100px;
    }
`

const LocContainer = styled(Container)`
    position: relative;
`

const Title = styled.h2`
    text-align: center;
    position: relative;
    padding: 16px 0 0 0;    
    max-width: 540px; 
    margin: 0 auto;
    font-size: clamp(16px, 3.125vw, 24px);
    font-weight: 400;
    line-height: 151%;


    &::before{
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 0;
        width: 40px;
        height: 1px;
        background-color: var(--color-black);
    }
`

const Text = styled.div`
    max-width: 535px;
    box-sizing: border-box;
    padding: clamp(24px, ${36 / 768 * 100}vw, 48px) clamp(26px, ${39 / 768 * 100}vw, 52px);
    border-radius: 8px;
    box-shadow: var(--shadow);
    background-color: #fff;
    margin-top: 216px;

    h1,h2,h3,h4,h5,h6,p{
        font-weight: 500;
        font-size: clamp(15px, ${21 / 768 * 100}vw, 28px);
        line-height: 141%;
        background: linear-gradient(84.56deg, #0B5CD6 12.23%, #21AEFC 94.22%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }

    @media (max-width: 1240px){
        margin: 0 auto;
        margin-top: 32px;
    }
`

const Grid = styled.div`

    position: absolute;
    left: 610px;
    top: 40px;

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

    @media (max-width: 1240px) {
        position: relative;
        left: 0;
        margin: 0 auto;
        margin-bottom: 48px;

        max-width: 1040px;
        width: 100%;
        max-height: 950px;

        &::before {
            float: left;
            padding-top: 111%;
            content: '';
        }
        &::after {
            display: block;
            content: '';
            clear: both;
        }

        height: unset;

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

    @media (max-width: 1088px) {
        max-width: 860px;

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
    }

    @media(max-width: 640px){
        width: calc(100% + 120px);
        transform: translateX(-46px);
    }

`