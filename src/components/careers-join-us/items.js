import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { urlSystem } from "../../contstants/urlSystem"

export default function Items({ data, showOfferText, applyOfferText }) {
    return (
        <Wrapper>
            {data.map(el => (
                <Item to={urlSystem['Careers Homepage'][el.language.slug] + el.careersPost.currentPostUrl}>
                    <div className="names">
                        <h3>{el.careersPost.jobInformation.jobTitle}</h3>
                        <p>{el.careersPost.jobInformation.jobSallary}</p>
                    </div>
                    <div className="buttons">
                        <span className="link">{showOfferText}</span>
                        <a href={el.careersPost.jobInformation.linkToApply} rel='nofollow noopener' className="button">{applyOfferText}</a>
                    </div>
                </Item>
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: clamp(48px, ${56 / 768 * 100}vw, 64px);
`

const Item = styled(Link)`
    padding: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 32px;

    &:hover{
        .link{
            &::after{
                width: 100%;
            }
        }
    }

    h3{
        font-weight: 500;
        font-size: clamp(14px, ${16 / 768 * 100}vw, 18px);
        line-height: 151%;
    }

    p{
        font-weight: 400;
        font-size: clamp(14px, ${16 / 768 * 100}vw, 18px);
        line-height: 151%;
        opacity: 0.6;
    }

    .names{
        display: grid;
        align-items: center;
        grid-template-columns: 1fr 1fr;
        grid-gap: 32px;

        h3{
            min-width: 240px;
        }
    }

    .buttons{
        display: flex;
        align-items: center;
        gap: 32px;

        a{
            display: block;
            position: relative;
            z-index: 10;
        }
    }

    &:nth-child(n + 2){
        border-top: 1px solid #00000016;
    }

    @media (max-width: 1024px) {
        .names{
            grid-template-columns: 1fr;
            grid-gap: 8px;
        }
    }

    @media (max-width: 640px) {
        display: block;

        .names{
            margin-bottom: 16px;
        }

        .buttons{
            justify-content: space-between;
            gap: 16px;
        }
    }
`