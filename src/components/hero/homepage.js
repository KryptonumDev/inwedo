import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../../style/index'

export default function Hero({ data: { title, subTitle, button, imgGridH } }) {
    return (
        <Wrapper>
            <LocalContainer>
                <Image>
                    <GatsbyImage className='left' image={imgGridH.imageLeft.localFile.childImageSharp.gatsbyImageData} alt={imgGridH.imageLeft.altText} />
                    <GatsbyImage className='rightTop' image={imgGridH.imageRightTop.localFile.childImageSharp.gatsbyImageData} alt={imgGridH.imageRightTop.altText} />
                    <GatsbyImage className='rightBottom' image={imgGridH.imageRightBottom.localFile.childImageSharp.gatsbyImageData} alt={imgGridH.imageRightBottom.altText} />
                </Image>
                <Content>
                    <h1 className='h3 line'>{title}</h1>
                    <p className='h1 display'>{subTitle}</p>
                    <Link to={button.url} className='button-white'>{button.name}</Link>
                </Content>
            </LocalContainer>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    min-height: 810px;
    background: var(--color-accent);

    @media (max-width: 860px) {
        min-height: 0;
        overflow: hidden;
    }

    .h3{
        font-size: clamp(13px, 2.34375vw, 22px);
        padding-left: clamp(48px, ${67 / 768 * 100}vw, 86px);

        &::before{
            width: clamp(32px, ${51 / 768 * 100}vw, 70px);
        }
    }
`

const LocalContainer = styled(Container)`
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    min-height: 810px;
    overflow: visible;

    @media (max-width: 1240px) {
        min-height: 960px;
        align-items: flex-start;
    }

    @media (max-width: 860px) {
        flex-direction: column-reverse;
        align-items: center;
        min-height: 0;
    }
`

const Image = styled.div`
    position: absolute;
    width: clamp(393px, ${622 / 680 * 100}vw, 622px);
    height: clamp(422px, ${671 / 680 * 100}vw, 671px);
    right: 0;
    transform: translateX(140px);
    bottom: 15px;

    --shadow: drop-shadow(0px 76px 121px rgba(0, 0, 0, 0.06)) drop-shadow(0px 31.751px 50.5509px rgba(0, 0, 0, 0.0431313)) drop-shadow(0px 16.9756px 27.0269px rgba(0, 0, 0, 0.0357664)) drop-shadow(0px 9.51638px 15.1511px rgba(0, 0, 0, 0.03)) drop-shadow(0px 5.05408px 8.04662px rgba(0, 0, 0, 0.0242336)) drop-shadow(0px 2.10311px 3.34838px rgba(0, 0, 0, 0.0168687));

    .left{
        width: 293px;
        height: 397px;
        position: absolute;
        top: 126px;
        left: 0;
        box-shadow: var(--shadow);

        img{
            border-radius: 8px 100px 8px 8px;
        }
    }

    .rightTop{
        width: 239px;
        height: 333px;
        position: absolute;
        top: 0;
        right: 46px;
        box-shadow: var(--shadow);

        img{
            border-radius: 8px 8px 8px 100px;
        }
    }

    .rightBottom{
        width: 282px;
        height: 306px;
        position: absolute;
        bottom: 0;
        right: 0;
        box-shadow: var(--shadow);

        img{
            border-radius: 8px 8px 8px 204px;
        }
    }

    @media (max-width: 1439px) {
        transform: translateX(70px);
    }

    @media (max-width: 1240px) {
        transform: translateX(50px);
    }

    @media (max-width: 860px) {
        position: relative;
        transform: translateY(-10px);
        bottom: 0;
    }

    @media (max-width: 680px) {

        .left{
            width: clamp(185px, ${293 / 680 * 100}vw, 293px);
            height: unset;
        }

        .rightTop{
            width: clamp(151px, ${239 / 680 * 100}vw, 239px);
            height: unset;
        }

        .rightBottom{
            width: clamp(179px, ${282 / 680 * 100}vw, 282px);
            height: unset;
        }
    }

    @media (max-width: 460px) {
        left: 10%;
        .left{
            top: 80px;
        }
    }

    @media (max-width: 460px) {
        left: 13.5%;
    }
`

const Content = styled.div`
    max-width: 660px;
    .h3{
        margin-bottom: clamp(12px, ${18 / 768 * 100}vw, 24px);
        color: var(--color-white);
    }

    .h1{
        margin-bottom: clamp(24px, ${36 / 768 * 100}vw, 48px);
        color: var(--color-white);
    }

    @media (max-width: 1240px) {
        margin-top: 130px;
    }

    @media (max-width: 350px) {
        margin-bottom: 30px;
    }
`