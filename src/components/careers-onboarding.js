import { GatsbyImage } from "gatsby-plugin-image"
import React, { useEffect } from "react"
import styled from "styled-components"
import { Container } from "../style"
import Quote from './../images/quote.png'
import Slider from "react-slick"

export default function OnBoarding({ data: { testomontialsRepeater, sectionTitle, image, seoTitle, boldText, plainText } }) {

    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <Wrapper>
            <Container>
                <Title>{sectionTitle}</Title>
                <Flex>
                    <Items>
                        {testomontialsRepeater.map(el => (
                            <Item quote={Quote}>
                                <div className="flex">
                                    <img src={el.avatar.localFile.publicURL} alt={el.avatar.altText} />
                                    <div>
                                        <p className="name">{el.name}</p>
                                        <p className="position">{el.position}</p>
                                    </div>
                                </div>
                                <p className="testomontial">{el.testomontial}</p>
                            </Item>
                        ))}
                    </Items>
                    <Card id='card'>
                        <GatsbyImage className="image" image={image.localFile.childImageSharp.gatsbyImageData} alt={image.altText} />
                        <h3 className="line h4">{seoTitle}</h3>
                        <p className="h3">{boldText}</p>
                        <div className="p" dangerouslySetInnerHTML={{ __html: plainText }}></div>
                    </Card>
                    <Slider className="slider" {...settings}>
                        {testomontialsRepeater.map(el => (
                            <Item quote={Quote}>
                                <div className="flex">
                                    <img src={el.avatar.localFile.publicURL} alt={el.avatar.altText} />
                                    <div>
                                        <p className="name">{el.name}</p>
                                        <p className="position">{el.position}</p>
                                    </div>
                                </div>
                                <p className="testomontial">{el.testomontial}</p>
                            </Item>
                        ))}
                    </Slider>
                </Flex>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);
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


const Flex = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    align-items: start;
    grid-gap: clamp(32px, ${72 / 768 * 100}vw, 100px);
    position: relative;
    
    .slider{
        display: none;
    }

    @media (max-width: 1024px) {
        display: block;
        grid-gap: unset;

        .slider{
            display: block;
            padding-bottom: 32px;

            .slick-dots{
                padding-bottom: 24px;

                button{
                    &::before{
                        border-radius: 50%;
                        font-size: 12px;
                        color: #C4C4C4 !important;
                        opacity: 0.3;
                        transition: opacity .3s cubic-bezier(0.39, 0.575, 0.565, 1);
                    }

                    &:focus-visible{
                        &::before{
                            outline: 2px solid #0B61D6;
                            outline-offset: 1px;
                        }
                    }
                }

                .slick-active button{
                    &::before{
                        color: #C4C4C4 ;
                        opacity: .8;
                    }
                }
            }
        }
    }
`

const Items = styled.div`
    display: grid;
    grid-gap: 50px;

    @media (max-width: 1024px) {
        display: none;
    }
`

const Item = styled.div`
    padding: 68px clamp(32px, ${45 / 768 * 100}vw, 68px);
    border-radius: 24px;
    background: #fff;
    box-shadow: var(--shadow);
    position: relative;
    box-sizing: border-box;

    @media (max-width: 1024px){
        box-shadow: unset;
        width: unset!important;
        margin: 0 32px;
    }

    @media (max-width: 640px) {
        margin: 0 8px;
    }

    &::after{
        content: url(${props => props.quote});
        position: absolute;
        right: 40px;
        top: 40px;

        @media (max-width: 640px) {
            top: 20px;
            right: 30px;
        }
    }

    .flex{
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 24px;
        align-items: center;
        margin-bottom: 16px;

        img{
            border-radius: 50%;
            width: 68px;
            height: 68px;
        }
    }

    .name{
        font-weight: 400;
        font-size: 18px;
        line-height: 151%;
    }

    .position{
        font-weight: 300;
        font-size: 16px;
        line-height: 160%;
        font-feature-settings: 'ss01' on;
        opacity: .55;
    }

    .testomontial{
        font-weight: 300;
        font-size: 16px;
        line-height: 160%;
    }
`

const Card = styled.div`
    position: sticky;
    z-index: 100;
    top: 91px;
    align-self: start;
    width: 551px;

    @media (max-width: 1024px){
        max-width: 570px;
        position: unset;
        margin: 0 auto 32px auto;
    }

    @media (max-width: 640px) {
        margin: 0 8px 32px 8px;
    }

    .image{
        margin-bottom: 32px;
        height: fit-content;
        img{
            border-radius: 8px;
        }
    }

    .h4{
        opacity: .55;
        margin-bottom: 16px;
        font-size: clamp(14px, ${16 / 768 * 100}vw, 18px);
        text-transform: uppercase;
    }

    .h3{
        margin-bottom: 16px;
        font-size: clamp(20px, ${22 / 768 * 100}vw, 24px);
    }

    .p{
        margin-bottom: 16px;
        font-size: clamp(14px, ${15 / 768 * 100}vw, 16px);
    }
`