import React from "react"
import styled from "styled-components"
import { Container } from "../style"
import { datalayerPush } from "../helpers/datalayer"

export default function FixedApply({ data: { jobSallary, jobTitle, linkToApply, applyButtonText }, analytics, location }) {
    return (
        <Wrapper>
            <LocContainer>
                <Content>
                    <div>
                        <p className="line h4">{jobTitle}</p>
                        <p className="h3">{jobSallary}</p>
                    </div>
                    <a onClick={() => {datalayerPush(analytics.externalLink(applyButtonText, location, linkToApply))}}  className="button" href={linkToApply} rel='nofollow noopener' target='_blank'>{applyButtonText}</a>
                </Content>
            </LocContainer>
        </Wrapper>
    )
}

const Wrapper = styled.aside`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 24px 0;
    background-color: #fff;
    z-index: 1000;

    @media (max-width: 480px){
        padding: 16px 0;
    }
`

const LocContainer = styled(Container)`
    max-width: 784px;
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 32px;

    .h4{
        margin-bottom: clamp(12px, ${14 / 768 * 100}vw, 16px);
        font-size: clamp(14px, ${16 / 768 * 100}vw, 18px)
    }

    .h3{
        font-size: clamp(16px, ${20 / 768 * 100}vw, 24px)

    }

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        max-width: 300px;
        margin: 0 auto;

        a{
            width: 100%;
            box-sizing: border-box;
            justify-content: center;
        }
    }
`