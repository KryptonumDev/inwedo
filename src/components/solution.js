import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../style'

export default function Solution({ data: { sectionTitle, subTitle, text, solutionSteps } }) {
    return (
        <Wrapper>
            <LocContainer>
                <TextPart>
                    <h2 className="line h4">{sectionTitle}</h2>
                    <p className="h1">{subTitle}</p>
                    <p className="p">{text}</p>
                </TextPart>
                <Rows>
                    {solutionSteps.map(el => (
                        <Item>
                            <div className='text'>
                                <h3 className='h3'>{el.stepTitle}</h3>
                                <p className='p'>{el.stepText}</p>
                            </div>
                            <ImagePart x={el.stepImage.localFile.childImageSharp.gatsbyImageData.width} y={el.stepImage.localFile.childImageSharp.gatsbyImageData.height}>
                                <GatsbyImage className='image' image={el.stepImage.localFile.childImageSharp.gatsbyImageData} alt={el.stepImage.altText} />
                            </ImagePart>
                        </Item>
                    ))}
                </Rows>
            </LocContainer>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);
`

const LocContainer = styled(Container)`
    padding: 0;
    max-width: 1440px;
`

const TextPart = styled.div`
    max-width: 512px;
    margin: 0 auto 64px auto;
    padding: 0 32px;

    .h4{
        margin-bottom: 8px;
        opacity:.5;
        font-size: clamp(14px, 2.08vw, 18px);
    }

    .h1{
        margin-bottom: 16px;
        font-size: clamp(20px, 3.38vw, 32px);
    }

    .p{
        margin-bottom: 64px;
        font-size: clamp(14px, 2.08vw, 16px);
    }
`

const Rows = styled.div`
    display: grid;
    grid-gap: 64px;

    @media (max-width: 796px){
        grid-gap: 32px;
    }
`

const ImagePart = styled.div`
    max-width: 780px;
    min-width: 400px;
    width: 100%;
    position: relative;
    padding: clamp(32px, 6.25vw, 64px) 16px;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 24px;
    background-color: var(--color-white);
    box-shadow: var(--shadow);

    .image{
        width: 100%;
        max-width: fit-content;
        height: fit-content;
    }
`

const Item = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    gap: 32px;


    .text{
        max-width: 512px;
        min-width: 320px;
        padding-right: clamp(20px, 7.8vw, 100px);

        .h3{
            margin-bottom: 16px;
            font-size: clamp(16px, 2.6vw, 24px);
        }

        .p{
            font-size: clamp(14px, 1.95vw, 16px);
        }
    }

    ${ImagePart}{
        padding-left: 0;
    }

    &:nth-child(2n){
        flex-direction: row;
        justify-content: flex-start;

        .text{
            padding-left: clamp(20px, 7.8vw, 100px);
            padding-right: 0;
        }

        ${ImagePart}{
            padding-right: 0;
            padding-left: 16px;
            justify-content: flex-end;
        }
    }

    @media (max-width: 796px) {
        flex-direction: column-reverse !important;

        .text{
            padding: 0 32px !important;
            min-width: unset;
        }

        ${ImagePart}{
            margin-right: 32px;
            min-width: unset !important;
            width: calc(100% - 32px);
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }

        &:nth-child(2n){

            ${ImagePart}{
                margin-left: 32px;
                margin-right: 0;
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
                border-top-left-radius: 24px;
                border-bottom-left-radius: 24px;
            }
        }
    }
`