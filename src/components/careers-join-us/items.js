import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { urlSystem } from "../../contstants/urlSystem"

export default function Items({ data, showOfferText, applyOfferText }) {
    return (
        <Wrapper>
            {data.map(el => (
                <Item >
                    <Link className="wrap" to={urlSystem['Careers Homepage'][el.language.slug] + el.careersPost.currentPostUrl}>
                        <div className="names">
                            <h3>{el.careersPost.jobInformation.jobTitle}</h3>
                            <p>{el.careersPost.jobInformation.jobSallary}</p>
                        </div>
                        <div className="buttons">
                            <span className="link desctop">{showOfferText}</span>
                        </div>
                    </Link>
                    <div className="mobile-flex">
                        <Link to={urlSystem['Careers Homepage'][el.language.slug] + el.careersPost.currentPostUrl} className="link mobile">{showOfferText}</Link>
                        <a href={el.careersPost.jobInformation.linkToApply} rel='nofollow noopener' target='_blank' className="button">{applyOfferText}</a>
                    </div>
                </Item>
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: clamp(48px, ${56 / 768 * 100}vw, 64px);
`

const Item = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 32px;

    .mobile{
        display: none;
    }

    .wrap{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 24px;
        box-sizing: border-box;

        &:hover{
            .link{
                &::after{
                    width: 100%;
                }
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

        .mobile{
            display: block;
        }

        .desctop{
            display: none;
        }

        .mobile-flex{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 24px 24px 24px;
        }

        .wrap{
            padding-bottom: 0;
        }
    }

`