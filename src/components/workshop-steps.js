import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function WorkshopSteps({ data }) {
    return (
        <React.Fragment>
            {data.map(el => (
                <Wrapper>
                    <Container>
                        <TextPart side={el.imageSide}>
                            <Number className="colored">{el.stepNumber}</Number>
                            <h2 className="h1">{el.stepTitle}</h2>
                            <p className="h4"> {el.stepText}</p>
                        </TextPart>
                        <Item side={el.imageSide}>
                            <Image image={el.stepImage.localFile.childImageSharp.gatsbyImageData} alt={el.stepImage.altText} />
                            <div className="content">
                                <div className="grid">
                                    {el.innerSteps.map(innerEl => (
                                        <SubSteps>
                                            <h3 className="h4">{innerEl.title}</h3>
                                            <p className="p">{innerEl.text}</p>
                                        </SubSteps>
                                    ))}
                                </div>

                            </div>
                        </Item>
                    </Container>
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

const Image = styled(GatsbyImage)`
    min-width: max-content;
    height: fit-content;
    border-radius: 8px;
    filter: var(--shadow);
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
       
    }

    .grid{
        display: grid;
        grid-gap: 36px;
    }
`

const Number = styled.span`
    position: absolute;
    font-weight: 500;
    font-size: 81px;
    line-height: 151%;
    left: -60px;
    top: 0;
    transform: translate(-100%, -50%);
`

const TextPart = styled.div`
    max-width: 550px;
    margin: ${props => props.side === 'left' ? '0 0 0 auto' : '0 auto 0 150px'};
    position: relative;

    h2.h1{
        margin-bottom: 24px;
    }

    p.h4{
        margin-bottom: 48px;
    }
`

const SubSteps = styled.div`
    position: relative;
    max-width: 450px;

    h3.h4{
        margin-bottom: 16px;
    }

    p.p{

    }

    &:first-child{
        margin-top: 36px;
        margin-bottom: 48px;
        &::after{
            content: "";
            position: absolute;
            left: -80px;
            right: -18px;
            bottom: -36px;
            top: -36px;
            background-color: var(--color-white);
            filter: var(--shadow);
            border-radius: 8px;
            z-index: -1;
        }
    }
`

const Plate = styled.span`
    position: absolute;
    bottom: -30px;
    right: 0;
    padding: 24px 32px;
    border-radius: 24px;
    background-color: var(--color-white);
    filter: var(--shadow);

    span{
        font-weight: 400;
        font-size: 20px;
        line-height: 151%;
    }
`  