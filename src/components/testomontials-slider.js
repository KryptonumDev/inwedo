import React from "react"
import styled from "styled-components"
import Slider from "react-slick";
import { Container } from "../style";
import { GatsbyImage } from "gatsby-plugin-image";
import Left from './../images/left.svg'
import Right from './../images/right.svg'

export default function Testomontials({ data: { title, text, testomontialsItem } }) {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7500,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <Wrapper Left={Left} Right={Right}>
            <LocContainer>
                <h2 className="h1">{title}</h2>
                {text
                    ? <p className="p">{text}</p>
                    : null}
                <Slider {...settings}>
                    {testomontialsItem.map(el => (
                        <Item>
                            <div>
                                <footer className="person">
                                    {el.author.userIconPng
                                        ? <img className="image" src={el.author.userIconPng.localFile.publicURL} alt={el.author.userIconPng.altText} />
                                        : null}
                                    <div>
                                        <cite className="name">{el.author.authorName}</cite>
                                        <cite className="place">{el.author.authorPosition}</cite>
                                    </div>
                                </footer>
                                <p className="text p">{el.testomontialText}</p>
                            </div>
                            <Image src={el.companyLogo.localFile.publicURL} alt={el.companyLogo.altText} />
                        </Item>
                    ))}
                </Slider>
            </LocContainer>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);
    margin-bottom: 86px;

    .slick-track{
        display: flex !important;
    }

    .slick-slide{
        height: inherit !important;
    }

    .slick-slide > div{
        height: 100%;
    }

    .slick-arrow {

        &:focus-visible{
                &::before{
                    outline: 2px solid #0B61D6;
                    outline-offset: 1px;
                    border-radius: 2px;
                }
            }

        &.slick-prev{
            &::before{
                content: url(${props => props.Left});
                transition: opacity .3s cubic-bezier(0.39, 0.575, 0.565, 1);
            }

        }
        &.slick-next{
            &::before{
                content: url(${props => props.Right});
                transition: opacity .3s cubic-bezier(0.39, 0.575, 0.565, 1);
            }
        }
    }

    .slick-dots{
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

        .slick-active{
            &::before{
                color: #C4C4C4 ;
            }
        }
    }

    .h1{
        text-align: center;
        position: relative;
        padding: clamp(8px, 1.5625vw, 16px) 0;
        font-size: clamp(18px, 3.125vw, 32px);
        max-width: 850px;
        margin: 0 auto;
        font-weight: 500;

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

const LocContainer = styled(Container)`
    max-width: 1244px;
`

const Item = styled.blockquote`
    box-sizing: border-box;
    background-color: var(--color-white);
    box-shadow: 0px 6px 9px rgb(0 0 0 / 7%);
    height: 100%;

    width: calc(100% - 24px) !important;
    margin: 0 12px;
    padding: 40px 20px;
    border-radius: 24px;

    display: flex !important;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 1024px) {
        justify-content: unset;
    }

    .person{
        width: fit-content;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto 32px auto;
        min-height: 60px;

        .image{
            max-width: 60px;
            max-height: 60px;
            margin-right: 12px;
            
            img{
                border-radius: 50%;
            }
        }

        cite{
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

const Image = styled.img`
    width: fit-content;
    display: block;
    margin: 0 auto;
    max-height: 36px;
    max-width: 120px;
    height: fit-content;

    img{
        display: block;
        margin: 0 auto;
        max-height: 36px;
    }
`