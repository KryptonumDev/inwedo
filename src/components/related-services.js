import { Link } from "gatsby"
import React, { useEffect } from "react"
import styled from "styled-components"
import { Container } from "../style"
import { datalayerPush } from './../helpers/datalayer'

export default function RelatedServices({ data: { sectionTitle, services }, analytics }) {

    useEffect(() => {
        datalayerPush(analytics.inView(services))
    }, [])

    return (
        <Wrapper>
            <Container>
                <Title className="h2">{sectionTitle}</Title>
                <Grid>
                    {services.map((el, index) => (
                        <Item key={el.servisTitle} onClick={() => { datalayerPush(analytics.onClick(el, index)) }} to={el.button.url}>
                            <ImageWrapper>
                                <img className="image" src={el.servisIcon.localFile.publicURL} alt={el.servisIcon.altText} />
                            </ImageWrapper>
                            <h3 className="h2">{el.servisTitle}</h3>
                            <p className="h4">{el.servisText}</p>
                            <p className="link" >{el.button.name}</p>
                        </Item>
                    ))}
                </Grid>
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
    max-width: 850px;
    margin: 0 auto clamp(32px, 6.25vw, 64px) auto;

    &.h2{
        font-size: clamp(16px, 2.86vw, 24px);
    }

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

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: clamp(16px, 7.29vw, 96px);

    @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 480px) {
        grid-template-columns: 1fr;
        max-width: 280px;
        margin: 0 auto;
        text-align: center;
    }
`

const Item = styled(Link)`
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
        font-weight: 400;
        font-size: clamp(16px, 2.6vw, 24px);
    }

    .h4{
        margin-bottom: 16px;
        font-weight: 300;
        font-size: clamp(14px, 2.08vw, 18px);
    }

    @media (max-width: 480px) {
        .link{
            margin: 0 auto;
        }
    }

`

const ImageWrapper = styled.div`
    border-radius: 8px;
    background-color: var(--color-white);
    box-shadow: var(--shadow);
    width: fit-content;
    margin-bottom: 30px;
    width: 120px;
    height: 104px;
    display: flex;
    justify-content: center;
    align-items: center;

    .image{
        max-width: 80px;
        width: fit-content;
        height: fit-content;
    }

    @media (max-width: 480px){
        margin: 0 auto;
        margin-bottom: 30px;
    }
`