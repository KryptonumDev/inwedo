import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"
import Video from './../images/hr.mp4'

export default function RecruitmentProcess({ data: { sectionTitle, seoTitle, boldText, plainText, pathImage, applyButton } }) {
    return (
        <Wrapper>
            <Container>
                <Title>{sectionTitle}</Title>
                <Flex>
                    <div className="text">
                        <h3 className="h4 line">{seoTitle}</h3>
                        <p className="h2">{boldText}</p>
                        <p className="p">{plainText}</p>
                    </div>
                    <div className="video">
                        <video controls>
                            <source src={Video} type="video/mp4"/>
                        </video>
                    </div>
                </Flex>
                <Image className="desctop" src={pathImage.desctop.localFile.publicURL} alt={pathImage.desctop.altText} />
                <Image className="tablet" src={pathImage.tablet.localFile.publicURL} alt={pathImage.tablet.altText} />
                <Image className="mobile" src={pathImage.phone.localFile.publicURL} alt={pathImage.phone.altText} />
                {applyButton?.name
                    ? <a className="button" href={applyButton.url}>{applyButton.name}</a>
                    : null}
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);

    .button{
        margin: 50px auto 0 auto;

        @media (max-width: 640px) {
            margin-top: 0;
        }
    }

    .video{
        video{
            max-width: 570px;
            min-width: 400px;
            width: 100%;
            border-radius: 8px;
            box-shadow: var(--shadow);

            @media (max-width: 1024px){
                min-width: unset;
            }
        }
    }
`

const Image = styled.img`
    width: 100%;
    display: block;
    max-width: fit-content;
    height: fit-content;
    margin: 0 auto;
    margin-top: 128px;

    &.desctop{
        @media (max-width: 640px) {
            display: none;
        }
    }

    &.tablet{
        display: none;

        @media (max-width: 640px) {
            display: block;
        }
        @media (max-width: 440px) {
            display: none;
        }
    }
    
    &.mobile{
        display: none;

        @media (max-width: 440px) {
            display: block;
            margin-left: 0;
        }
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

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 32px;

    @media (max-width: 1024px) {
        flex-direction: column-reverse;
    }

    .text{
        max-width: 570px;

        .line{
            opacity: .55;
            margin-bottom: 16px;
            font-size: clamp(14px, ${16 / 768 * 100}vw, 18px);
        }

        .h2{
            margin-bottom: 16px;
            font-size: clamp(20px, ${22 / 768 * 100}vw, 24px);
        }

        .p{
            font-size: clamp(14px, ${16 / 768 * 100}vw, 18px);
        }
    }
`
