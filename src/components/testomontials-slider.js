import React from "react"
import styled from "styled-components"
import Slider from "react-slick";
import { Container } from "../style";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Testomontials({ data: { title, text, testomontialsItem } }) {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
              }
            },
          ]
    };
    return (
        <Wrapper>
            <Container>
                <h2 className="h1">{title}</h2>
                {text
                    ? <p className="p">{text}</p>
                    : null}
                <Slider {...settings}>
                    {testomontialsItem.map(el => (
                        <Item>
                            <footer className="person">
                                <GatsbyImage image={el.author.userIconPng.localFile.childImageSharp.gatsbyImageData} alt={el.author.userIconPng.altText} />
                                <div>
                                    <cite className="name">{el.author.authorName}</cite>
                                    <cite className="place">{el.author.authorPosition}</cite>
                                </div>
                            </footer>
                            <p className="text p">{el.testomontialText}</p>
                            <Image image={el.companyLogo.localFile.childImageSharp.gatsbyImageData} alt={el.companyLogo.altText} />
                        </Item>
                    ))}
                </Slider>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);

    .h1{
        text-align: center;
        position: relative;
        padding: clamp(8px, 1.5625vw, 16px) 0;
        font-size: clamp(18px, 3.125vw, 32px);
        max-width: 850px;
        margin: 0 auto;

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
    }

    .p{
        text-align: center;
        max-width: 550px;
        margin: 0 auto 0 auto;
        font-size: clamp(14px, 1.953125vw, 16px);
    }

    .slick-list{
        margin-top: 64px;
        margin-bottom: -16px;
        padding-bottom: 16px;
    }

`

const Item = styled.blockquote`
    box-sizing: border-box;
    background-color: var(--color-white);
    box-shadow: 0px 2px 21px rgba(13, 150, 225, 0.07);

    width: calc(100% - 24px) !important;
    margin: 0 12px;
    padding: 40px 20px;
    border-radius: 24px;

    .person{
        width: fit-content;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto 48px auto;

        cite{
            margin-left: 12px;
            display: block;
            font-style: normal;

            &.name{
                font-weight: 400;
                font-size: clamp(12px, 1.82vw, 14px);
                line-height: 150%;
            }

            &.place{
                font-weight: 300;
                font-size: clamp(10px, 1.5625vw, 12px);
                line-height: 131%;
            }
        }
    }

    .text{
        margin: 0 0 48px 0;
        font-size: clamp(13px, 1.82vw, 16px);
    }
`

const Image = styled(GatsbyImage)`
    width: fit-content;
    display: block;
    margin: 0 auto;
`