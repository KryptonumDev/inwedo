import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../style'

export default function Solution({ data: { sectionTitle, subTitle, text, solutionSteps } }) {
    return (
        <Wrapper>
            <LocContainer>
                <TextPart>
                    {sectionTitle
                        ? <h2 className="line h4">{sectionTitle}</h2>
                        : null}
                    <p className="h1">{subTitle}</p>
                    <p className="p">{text}</p>
                </TextPart>
                <Rows>
                    {solutionSteps ? solutionSteps.map(el => (
                        <Item>
                            <div className='text'>
                                <h3 className='h3'>{el.stepTitle}</h3>
                                <p className='p'>{el.stepText}</p>
                            </div>
                            <ImagePart x={el.stepImage.localFile.childImageSharp.gatsbyImageData.width} y={el.stepImage.localFile.childImageSharp.gatsbyImageData.height}>
                                <GatsbyImage className='image' image={el.stepImage.localFile.childImageSharp.gatsbyImageData} alt={el.stepImage.altText} />
                            </ImagePart>
                        </Item>
                    )) : null}
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
    max-width: 740px;
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
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;

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

    &:nth-child(2n){
        flex-direction: row;
        justify-content: flex-start;

        .text{
            padding-left: clamp(20px, 7.8vw, 100px);
            padding-right: 0;
        }
    }

    @media (max-width: 796px) {
        flex-direction: column-reverse !important;

        .text{
            padding: 0 32px !important;
            min-width: unset;
        }

        &:nth-child(2n){
        }
    }
`