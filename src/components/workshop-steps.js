import { GatsbyImage } from "gatsby-plugin-image"
import React, { useRef, useState } from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function WorkshopSteps({ data }) {

    const [activeItem, setActiveItem] = useState(0)

    return (
        <React.Fragment>
            {data.map(el => (
                <Wrapper>
                    <LocContainer>
                        <TextPart side={el.imageSide}>
                            <Number className="colored">{el.stepNumber}</Number>
                            <h2 className="h1">{el.stepTitle}</h2>
                            <p className="h4"> {el.stepText}</p>
                        </TextPart>
                        <Item side={el.imageSide}>
                            <Image image={el.stepImage.localFile.childImageSharp.gatsbyImageData} alt={el.stepImage.altText} />
                            <div className="content">
                                <div className="grid">
                                    {el.innerSteps.map((innerEl, index) => (
                                        <SubSteps className={activeItem === index ? 'active' : ''} onMouseEnter={() => {setActiveItem(index)}}>
                                            <h3 className="h4">{innerEl.title}</h3>
                                            <p className="p">{innerEl.text}</p>
                                        </SubSteps>
                                    ))}
                                </div>

                            </div>
                        </Item>
                    </LocContainer>
                    {el.informPlate
                        ? <Plate><span className="colored">{el.informPlate}</span></Plate>
                        : null}
                </Wrapper>
            ))}
        </React.Fragment>
    )
}

const Wrapper = styled.section`
    position: relative;
    max-width: 1920px;
    margin: 0 auto;
    margin-top: var(--margin-section);
`

const LocContainer = styled(Container)`
    max-width: 1164px;
`

const Image = styled(GatsbyImage)`
    min-width: 400px;
    height: fit-content;
    box-shadow: var(--shadow);
        img{
            border-radius: 8px;
        }

    @media (max-width: 864px){
        min-width: unset;
        max-width: fit-content;
        width: 100%;
        margin: 0 24px;
        margin-bottom: 30px;
    }   

    @media (max-width: 350px) {
        margin: 0 0 30px 0;
    }
`

const Item = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: ${props => props.side === 'left' ? 'row' : 'row-reverse'};
    gap: 32px;

    .content{
        position: relative;
        max-width: 550px;
        width: 100%;
        margin-left: ${props => props.side === 'left' ? '0px' : '150px'};
       

        @media (max-width: 1060px) {
            margin-left: 0;
        }

        
    }

    .grid{
        display: grid;
        grid-gap: 36px;
        max-width: 400px;
    }

    @media (max-width: 864px) {
        flex-direction: column;
        width: fit-content;
        margin: 0 auto;

        .grid{
            padding: 0 30px;
        }
    }

    @media (max-width: 350px) {
        .grid{
            padding: 0;
        }
    }
`

const Number = styled.span`
    position: absolute;
    font-weight: 500;
    font-size: clamp(32px, 7.16vw, 81px);
    line-height: 151%;
    left: -60px;
    top: 0;
    transform: translate(-100%, -50%);

    @media (max-width: 864px){
        position: unset;
        transform: unset;
        margin: 0 auto;
        text-align: center;
        display: block;
    }
`

const TextPart = styled.div`
    max-width: 550px;
    margin: ${props => props.side === 'left' ? '0 0 0 auto' : '0 auto 0 150px'};
    position: relative;

    h2.h1{
        margin-bottom: clamp(16px, 2.6vw, 24px);
        font-size: clamp(20px, 3.38vw, 32px);
    }

    p.h4{
        margin-bottom: clamp(28px, 4.94vw, 48px);
        font-size: clamp(14px, 2.08vw, 18px);
    }

    @media (max-width: 864px){
        margin: 0 auto;

        h2.h1{
            text-align: center;
        }

        p.h4{
            text-align: center;
        }
    }
`

const SubSteps = styled.div`
    position: relative;
    max-width: 450px;

    h3.h4{
        margin-bottom: clamp(12px, 1.82vw, 16px);
        font-size: clamp(14px, 2.08vw, 18px);
    }

    p.p{
    }

    transition: margin .3s cubic-bezier(0.39, 0.575, 0.565, 1);

    &.active{
        margin-top: 36px;
        margin-bottom: 36px;

        &::after{
            opacity: 1;
        }

        @media (max-width: 1060px){ 
            margin-top: clamp(16px, 7.16vw, 36px);
            margin-bottom: clamp(16px, 7.16vw, 36px);
        }

    }    

        &::after{
            content: "";
            position: absolute;
            left: -80px;
            right: -80px;
            bottom: -36px;
            top: -36px;
            background-color: var(--color-white);
            box-shadow: var(--shadow);
            border-radius: 8px;
            z-index: -1;
            opacity: 0;
            transition: opacity .2s cubic-bezier(0.39, 0.575, 0.565, 1) .1s;

            @media (max-width: 1060px){
                left: clamp(-80px, -7.16vw, -30px);
                right:  clamp(-80px, -7.16vw, -30px);
                bottom:  clamp(-36px, -7.16vw, -16px);
                top:  clamp(-36px, -3.38vw, -16px);
            }
        }
`

const Plate = styled.span`
    position: absolute;
    bottom: 0;
    transform: translateY(120%);
    right: 0;
    padding: clamp(14px, 2.47vw, 24px) clamp(18px, 3.125vw, 32px);
    border-radius: 24px;
    background-color: var(--color-white);
    box-shadow: var(--shadow);

    span{
        font-weight: 400;
        font-size: clamp(12px, 2.08vw, 20px);
        line-height: 151%;
    }
`  