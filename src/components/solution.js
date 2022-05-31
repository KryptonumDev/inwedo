import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../style'

export default function Solution({ data: { sectionTitle, subTitle, text, solutionSteps } }) {
    return (
        <Wrapper>
            <Container>
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
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);
`

const TextPart = styled.div`
    max-width: 740px;
    margin: 0 auto 64px auto;

    .h4{
        margin-bottom: 8px;
        opacity:.5;
    }

    .h1{
        margin-bottom: 16px;
    }

    .p{
        margin-bottom: 64px;
    }
`

const Rows = styled.div`
    display: grid;
    grid-gap: 64px;
`

const Item = styled.div`
    display: flex;
    gap: 128px;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;

    .h3{
        margin-bottom: 16px;
    }

    .text{
        width: 512px;
    }

    &:nth-child(2n){
        flex-direction: row;
        justify-content: flex-start;
    }
`

const ImagePart = styled.div`
    position: relative;
    padding: 64px;
    border-radius: 24px;
    background-color: var(--color-white);
    filter: var(--shadow);

    .image{
        width: max-content;
        height: fit-content;
    }
`