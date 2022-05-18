import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../../style/index'

export default function Hero({ data: { title, subTitle, button, img } }) {
    return (
        <Wrapper>
            <LocalContainer>
                <Image image={img.localFile.childImageSharp.gatsbyImageData} alt={img.altText} />
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

const Image = styled(GatsbyImage)`
    position: absolute;
    right: -70px;
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