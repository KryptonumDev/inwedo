import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../../style"

export default function Hero({ data: { pageTitle, textUnderTitle, caseInformation, technologiesTitle, technologies, caseIcon, achievedGoals, backgroundImage } }) {
    return (
        <Wrapper>
            <LocalContainer>
                <Background image={backgroundImage.localFile.childImageSharp.gatsbyImageData} alt={backgroundImage.altText} />
                <GlassCard>
                    <div>
                        <GatsbyImage className="logo" image={caseIcon.localFile.childImageSharp.gatsbyImageData} alt={caseIcon.altText} />
                        <h1 className="h1 display">{pageTitle}</h1>
                        <div className="h3" dangerouslySetInnerHTML={{ __html: textUnderTitle }} />
                        <div className="goals">
                            {achievedGoals?.map(el => (
                                <div className="item">
                                    <GatsbyImage className="tech-logo" image={el.goalIcon.localFile.childImageSharp.gatsbyImageData} altText={el.goalIcon.altText} />
                                    <p className="h4">{el.goalText}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="inform" dangerouslySetInnerHTML={{ __html: caseInformation }} />
                        <p className="colored h4">{technologiesTitle}</p>
                        <div className="technologies">
                            {technologies.map(el => (
                                <div className="item">
                                    <GatsbyImage className="tech-logo" image={el.technologyIcon.localFile.childImageSharp.gatsbyImageData} altText={el.technologyIcon.altText} />
                                </div>
                            ))}
                        </div>
                    </div>
                </GlassCard>
            </LocalContainer>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: 81px;
    position: relative;

`
const Background = styled(GatsbyImage)`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    width: fit-content;
    height: fit-content;
    height: 400px;
`

const LocalContainer = styled(Container)`
    padding-top: 220px;

    @media (max-width: 640px) {
        padding: 0 20px;
        padding-top: 220px;
    }
`

const GlassCard = styled.div`

    background: linear-gradient(180deg,rgba(200,200,200,1) 0,rgba(255,255,255,1) 60%);
    border-radius: 24px;
    padding: clamp(23px, 6.25vw, 64px);
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 3;
    gap: 16px;

    @media (max-width: 1024px) {
        flex-direction: column;
        gap: 32px;
    }

    .logo{
        margin-bottom: clamp(24px, 4.68vw, 48px); 
        max-width: clamp(120px, 23.43vw, 240px);
    }

    .h1{
        margin-bottom: clamp(16px, 2.6vw, 24px);
        font-size: clamp(20px, 5.46vw, 64px);
    }

    .h3{
        margin-bottom: 24px;
        font-size: clamp(16px, 2.6vw, 24px);
    }

    .inform{
        text-align: right;
        margin-top: clamp(-16px, -1.56vw, -8px);

        @media (max-width: 1024px){
            text-align: left;
        }

        p{
            font-weight: 300;
            font-size: clamp(14px, 1.82vw, 16px);
            line-height: 151%;
            font-feature-settings: 'ss01' on;
            white-space: nowrap;
        }

        strong{
            display: inline-block;
            margin-top: clamp(8px, 1.56vw, 16px);
            margin-bottom: 8px;
            font-weight: 500;
            font-size: clamp(14px, 2.08vw, 18px);
            line-height: 151%;
            background: var(--color-accent);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
        }
    }

    .colored.h4{
        margin-top: clamp(8px, 1.56vw, 16px);
        margin-bottom: 24px;
        white-space: nowrap;
        text-align: right;

        @media (max-width: 1024px){
            text-align: left;
        }
    }

    .technologies{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 12px;

        @media (max-width: 1300px) {
            flex-wrap: wrap;
        }

        @media (max-width: 1024px){
            justify-content: flex-start;
        }

        .item{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 48px;
            aspect-ratio: 1/1;
            border-radius: 5px;

            .tech-logo{
                width: 100%;
                height: fit-content;
                border-radius: 5px;
                filter: grayscale(1);
                box-shadow: 0px 11px 25px rgba(0, 0, 0, 0.04);

                img{
                    border-radius: 5px;
                }
            }
        }
    }

    .goals{
        display: flex;
        flex-wrap: wrap;
        gap: clamp(24px, 4.68vw, 48px);

        .item{
            padding: clamp(6px, 0.9vw, 8px) clamp(16px, 2.6vw, 24px);
            background: #F9FAFB;
            box-shadow: var(--shadow);
            border-radius: 8px;
            display: flex;
            gap: 16px;
            justify-content: space-between;
            align-items: center;
            width: fit-content;

            .tech-logo{
                max-width: clamp(30px, 4.68vw, 42px);
                width: fit-content;
                height: fit-content;
            }
        }
    }
`