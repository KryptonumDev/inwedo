import { Link } from "gatsby"
import React, { useEffect } from "react"
import styled from "styled-components"
import { Container } from "../style"
import { datalayerPush } from './../helpers/datalayer'

export default function DevelopmentTypes({ data: { sectionTitle, text, types }, analytics }) {

    useEffect(() => {
        datalayerPush(analytics(types))
    }, [])

    return (
        <Wrapper>
            <Container>
                <h2 className="h4 line">{sectionTitle}</h2>
                <p className="h3">{text}</p>
                <TypesGrid>
                    {types.map(el => (
                        <TypesItem to={el.button.url}>
                            <Image>
                                <img className="image" src={el.typeIcon.localFile.publicURL} alt={el.typeIcon.altText} />
                            </Image>
                            <h3 className="h2">{el.typeTitle}</h3>
                            <p className="h4">{el.typeText}</p>
                            <p className='link' >{el.button.name}</p>
                        </TypesItem>
                    ))}
                </TypesGrid>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);

    .h4.line{
        opacity: .55;
        margin-bottom: clamp(8px, 1.5625vw, 16px);
        font-size: clamp(14px, 2.08vw, 18px);
    }

    p.h3{
        max-width: 800px;
        font-size: clamp(20px, 2.86vw, 24px);
    }
`

const TypesGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 768px;
    grid-gap: clamp(32px, 8.3vw, 96px);
    margin: clamp(32px, 6.25vw, 64px) auto 0 auto;

    @media (max-width:480px) {
        grid-template-columns: 1fr;
    }
`

const TypesItem = styled(Link)`
    max-width: 336px;
    transition: transform .2s cubic-bezier(0.39, 0.575, 0.565, 1);

    &:hover{
        transform: translateY(-6px);

        .link{
            &::after{
                width: 100%;
            }
        }
    }

    .h2{
        margin-bottom: 16px;
        font-size: clamp(16px, 2.6vw, 24px);
    }

    .h4{
        margin-bottom: 16px;
        font-size: clamp(14px, 2.08vw, 18px);
    }

    @media (max-width:480px){
        text-align: center;
        margin: 0 auto;
    }
`

const Image = styled.div`
    width: fit-content;
    margin-bottom: 32px;
    padding: 12px 18px;
    border-radius: 8px;
    background-color: var(--color-white);
    box-shadow: var(--shadow);

    .image{
        width: 100%;
        max-width: 64px;
        position: relative;

        &::before {
            float: left;
            padding-top: 100%;
            content: '';
        }
        &::after {
            display: block;
            content: '';
            clear: both;
        }
    }

    @media (max-width:480px){
        margin: 0 auto;
        margin-bottom: 32px;
    }
`