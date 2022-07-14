import React from "react"
import styled from "styled-components"
import { Container } from "../style"
import Slider from "react-slick"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function HowWeWork({ data: { sectionTitle, titleFirst, boldTextFirst, plainTextFirst, linkFirst, imageCarousel, titleSecond, boldTextSecond, plainTextSecond, linkSecond, image } }) {
    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    //     <Slider {...settings}>
    //     {imageCarousel?.map((el, index) => (
    //         <GatsbyImage className="image" key={index} image={el.image.localFile.childImageSharp.gatsbyImageData} alt={el.image.altText} />
    //     ))}
    // </Slider>

    return (
        <Wrapper>
            <Container>
                <Title>
                    {sectionTitle}
                </Title>
                <MainFlex as={linkFirst.url ? null : 'div'} to={linkFirst.url}>
                    <div>
                        <h3 className="line h4">{titleFirst}</h3>
                        <p className="h3">{boldTextFirst}</p>
                        <div className="p" dangerouslySetInnerHTML={{ __html: plainTextFirst }}></div>
                        <span className="link">{linkFirst.name}</span>
                    </div>
                    <div>
                        {imageCarousel?.map((el, index) => (
                            <GatsbyImage className="image" key={index} image={el.image.localFile.childImageSharp.gatsbyImageData} alt={el.image.altText} />
                        ))}
                    </div>
                </MainFlex>
                <SecondFlex to={linkSecond.url}>
                    <GatsbyImage className="image" image={image.localFile.childImageSharp.gatsbyImageData} alt={image.altText} />
                    <div>
                        <h3 className="line h4">{titleSecond}</h3>
                        <p className="h3">{boldTextSecond}</p>
                        <div className="p" dangerouslySetInnerHTML={{ __html: plainTextSecond }}></div>
                        <span className="button">{linkSecond.name}</span>
                    </div>
                </SecondFlex>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);

    .h4{
        opacity: .55;
        margin-bottom: 16px;
        font-size: clamp(14px, ${16 / 768 * 100}vw, 18px);
    }

    .h3{
        margin-bottom: 16px;
        font-size: clamp(20px, ${2 / 768 * 100}vw, 24px);
    }

    .p{
        margin-bottom: 16px;
        font-size: clamp(14px, ${16 / 768 * 100}vw, 18px);
    }

    span{
        display: block;
    }
`

const Title = styled.h2`
    text-align: center;
    position: relative;
    padding: 16px 0 0 0;    
    max-width: 540px; 
    margin: 0 auto clamp(32px, 6.25vw, 64px) auto;
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

const MainFlex = styled(Link)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 64px;
    align-items: center;

    &:hover{
        .link{
            &::after{
                width: 100%;
            }
        }
    }

    .image{
        box-shadow: var(--shadow);
        height: fit-content;
        img{
            border-radius: 8px;
        }
    }

    @media (max-width: 1024px) {
        display: flex;
        flex-direction: column-reverse;
        gap: 32px;
        max-width: 570px;
        margin: 0 auto;
    }
`

const SecondFlex = styled(Link)`
    margin-top: var(--margin-section);
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: clamp(32px, ${72 / 768 * 100}vw, 128px);

    .image{
        box-shadow: var(--shadow);
        height: fit-content;
        img{
            border-radius: 8px;
        }
    }

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        grid-gap: 32px;
        max-width: 570px;
        margin: 48px auto 0 auto;
    }
`