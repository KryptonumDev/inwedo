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
`

const LocalContainer = styled(Container)`
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    min-height: 810px;
    overflow: visible;
`

const Image = styled.div`
    position: absolute;
    width: 622px;
    height: 671px;
    right: 0;
    transform: translateX(70px);
    bottom: 15px;

    --shadow: drop-shadow(0px 76px 121px rgba(0, 0, 0, 0.06)) drop-shadow(0px 31.751px 50.5509px rgba(0, 0, 0, 0.0431313)) drop-shadow(0px 16.9756px 27.0269px rgba(0, 0, 0, 0.0357664)) drop-shadow(0px 9.51638px 15.1511px rgba(0, 0, 0, 0.03)) drop-shadow(0px 5.05408px 8.04662px rgba(0, 0, 0, 0.0242336)) drop-shadow(0px 2.10311px 3.34838px rgba(0, 0, 0, 0.0168687));

    .left{
        position: absolute;
        top: 126px;
        left: 0;
        border-radius: 8px 100px 8px 8px;
        filter: var(--shadow);
    }

    .rightTop{
        position: absolute;
        top: 0;
        right: 46px;
        border-radius: 8px 8px 8px 100px;
        filter: var(--shadow);
    }

    .rightBottom{
        position: absolute;
        bottom: 0;
        right: 0;
        border-radius: 8px 8px 8px 204px;
        filter: var(--shadow);
    }
`

const Content = styled.div`
    max-width: 660px;
    .h3{
        margin-bottom: 24px;
        color: var(--color-white);
    }

    .h1{
        margin-bottom: 48px;
        color: var(--color-white);
    }
`