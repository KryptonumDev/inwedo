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
                        <p className="h3">{textUnderTitle}</p>
                        <div className="goals">
                            {achievedGoals.map(el => (
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
`

const LocalContainer = styled(Container)`
    padding-top: 220px;
`

const GlassCard = styled.div`

    background: linear-gradient(180deg,rgba(200,200,200,1) 0,rgba(255,255,255,1) 60%);
    border-radius: 24px;
    padding: 64px;
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 3;

    .logo{
        margin-bottom: 48px;
    }

    .h1{
        margin-bottom: 24px;
    }

    .h3{
        margin-bottom: 24px;
    }

    .inform{
        text-align: right;
        margin-top: -16px;

        p{
            font-weight: 300;
            font-size: 16px;
            line-height: 26px;
            font-feature-settings: 'ss01' on;
            white-space: nowrap;
        }

        strong{
            display: inline-block;
            margin-top: 16px;
            margin-bottom: 8px;
            font-weight: 500;
            font-size: 18px;
            line-height: 151%;
            background: var(--color-accent);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
        }
    }

    .colored.h4{
        margin-top: 16px;
        margin-bottom: 24px;
        white-space: nowrap;
        text-align: right;
    }

    .technologies{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 12px;
        .item{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 48px;
            aspect-ratio: 1/1;
            border-radius: 5px;
            background-color: #eeeeee;
            box-shadow: 0px 11px 25px rgba(0, 0, 0, 0.04);

            .tech-logo{
                max-width: 36px;
                width: fit-content;
                height: fit-content;
                filter: grayscale(1);
            }
        }
    }

    .goals{
        display: flex;
        flex-wrap: wrap;
        gap: 48px;

        .item{
            padding: 8px 24px;
            background: #F9FAFB;
            filter: var(--shadow);
            border-radius: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: fit-content;
        }
    }
`