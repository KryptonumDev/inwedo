import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"
import { activeLanguage } from "../../helpers/activeLanguage"
import Arrow from './../../images/cookie-arrow.png'
import { getCookie, setCookie } from './../../helpers/cookie-manager'
import { datalayerArguments } from "../../helpers/datalayer"

export default function CokieBanner({ location, setIsAllreadyApplied, isAlreadyApplied }) {

    const data = useStaticQuery(graphql`
    query {
        allWpPage(filter: {template: {templateName: {eq: "Cookie Banner"}}})  {
          nodes {
            language {
              slug
            }    
            cookieBanner {
              firstTab {
                tabTitle
                tabContent
              }
              secondTab {
                tabTitle
                cookiesTypes {
                  officialTypeName
                  typeTitle
                  typeText
                  subType {
                    subTypeTitle
                    subTypeContent
                    subTypeLink {
                      name
                      url
                    }
                  }
                }
              }
              thirdTab {
                tabTitle
                tabContent
              }
              controlButtons {
                acceptAll
                acceptPart
                confguration
                reject
              }
            }
          }
        }
      }
    `)

    const locale = activeLanguage(location)
    const localeData = data.allWpPage.nodes.filter(el => el.language.slug === locale)

    let banerData = data.allWpPage.nodes.filter(el => el.language.slug === 'en')
    if (localeData[0]) {
        banerData = localeData
    }
    const { firstTab, secondTab, thirdTab, controlButtons } = banerData[0].cookieBanner

    const [activeTab, setActiveTab] = useState(1)
    const [activeCookie, setActiveCookies] = useState(() => {
        const arr = []
        secondTab.cookiesTypes.map(el => {
            const isActive = el.name === 'necessary'
            arr.push({ name: el.officialTypeName, isActive: isActive })
        })
        return arr
    })

    const changeActiveCookies = (index) => {
        const arr = [...activeCookie]
        if (arr[index].name !== 'necessary') {
            arr[index].isActive = !arr[index].isActive
            setActiveCookies(arr)
        }
    }

    const applyCookie = (type) => {
        if (type === 'all') {
            activeCookie.forEach(el => {
                setCookie(el.name, true, 365)
            })
            datalayerArguments('consent', 'update', {
                'ad_storage': 'granted',
                'analytics_storage': "granted",
                'functionality_storage': "granted",
                'personalization_storage': "granted",
            });
        } else if (type === 'part') {
            activeCookie.forEach(el => {
                setCookie(el.name, el.isActive ? 'granted' : 'denied', 365)
            })

            datalayerArguments('consent', 'update', {
                'ad_storage': getCookie('marketing'),
                'analytics_storage': getCookie('statistics'),
                'functionality_storage': getCookie('necessary'),
                'personalization_storage': getCookie('preferences'),
            });
        }
        if (getCookie('statistics')) {
        }
        setIsAllreadyApplied(true)
    }

    const rejectCookie = () => {
        setIsAllreadyApplied(true)
        datalayerArguments('consent', 'update', {
            'ad_storage': "denied",
            'analytics_storage': "denied",
            'functionality_storage': "denied",
            'personalization_storage': "denied",
            'security_storage': "granted",
        });
    }

    useEffect(() => {
        setIsAllreadyApplied(() => {
            if (getCookie('necessary')) {

                datalayerArguments("consent", "default", {
                    'ad_storage': getCookie('marketing'),
                    'analytics_storage': getCookie('statistics'),
                    'functionality_storage': getCookie('necessary'),
                    'personalization_storage': getCookie('preferences'),
                    'wait_for_update': 2500
                });
                datalayerArguments("set", "ads_data_redaction", true);

                return true
            }

            datalayerArguments("consent", "default", {
                'ad_storage': "denied",
                'analytics_storage': "denied",
                'functionality_storage': "denied",
                'personalization_storage': "denied",
                'security_storage': "granted",
                'wait_for_update': 2500
            });
            datalayerArguments("set", "ads_data_redaction", true);

            return false
        })
    }, [])

    return (
        <Cookie display={isAlreadyApplied}>
            <Overlay />
            <Wrapper>
                <Content>
                    <TabsGrid>
                        <button className={activeTab === 1 ? 'active' : ''} onClick={() => { setActiveTab(1) }}>
                            {firstTab.tabTitle}
                        </button>
                        <button className={activeTab === 2 ? 'active' : ''} onClick={() => { setActiveTab(2) }}>
                            {secondTab.tabTitle}
                        </button>
                        <button className={activeTab === 3 ? 'active' : ''} onClick={() => { setActiveTab(3) }}>
                            {thirdTab.tabTitle}
                        </button>
                    </TabsGrid>
                    <TabContent>
                        {activeTab === 1
                            ? <div className="p" dangerouslySetInnerHTML={{ __html: firstTab.tabContent }} />
                            : null}

                        {activeTab === 2
                            ? (
                                <div>
                                    {secondTab.cookiesTypes.map((el, index) => (
                                        <TypeItem arrow={Arrow} className={activeCookie[index].isActive ? 'active' : ''}>
                                            {el.subType
                                                ? <details>
                                                    <summary className="main-title">
                                                        <p className="title">{el.typeTitle}</p>
                                                        <p className="text p">{el.typeText}</p>
                                                    </summary>
                                                    <div className="main-text">
                                                        {el.subType?.map(el => (
                                                            <div className="subitem">
                                                                <details>
                                                                    <summary className="sub-title">
                                                                        <p className="subTitle">{el.subTypeTitle}</p>
                                                                    </summary>
                                                                    <div className="subText p" dangerouslySetInnerHTML={{ __html: el.subTypeContent }} />
                                                                </details>
                                                                <a className="link" rel='nofollow' i target='_blank' href={el.subTypeLink.url}>{el.subTypeLink.name}</a>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </details>
                                                : <div className="no-sub">
                                                    <p className="title">{el.typeTitle}</p>
                                                    <p className="text p">{el.typeText}</p>
                                                </div>}
                                            <button onClick={() => { changeActiveCookies(index) }} className={"switch " + el.officialTypeName}></button>
                                        </TypeItem>
                                    ))}
                                </div>
                            )
                            : null}

                        {activeTab === 3
                            ? <div className="p" dangerouslySetInnerHTML={{ __html: thirdTab.tabContent }} />
                            : null}
                    </TabContent>
                    <Buttons>
                        <button onClick={() => { applyCookie('all') }} className="button">{controlButtons.acceptAll}</button>
                        {activeTab === 2
                            ? <button onClick={() => { applyCookie('part') }} className="button-white">{controlButtons.acceptPart}</button>
                            : null}
                        {activeTab !== 2
                            ? <button onClick={() => { setActiveTab(2) }} className="button-white">{controlButtons.confguration}</button>
                            : null}
                        <button onClick={() => { rejectCookie() }} className="button-white">{controlButtons.reject}</button>
                    </Buttons>
                </Content>
            </Wrapper>
        </Cookie>
    )
}

const Cookie = styled.div`
    display: block;

    ${props => props.display === false ? `
        display: block;
    ` : props.display === null ? `
        display: none;
    ` : props.display === true ? `
        display: none;
    ` : null}
`

const Overlay = styled.div`
    position: fixed;
    z-index: 1000000;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #00000048;
`

const Wrapper = styled.div`
    position: fixed;
    background: #FFFFFF;
    border: 1px solid #D9DBE9;
    box-shadow: 0px 5px 14px rgba(8, 15, 52, 0.04);
    border-radius: 20px;
    z-index: 100000000;
    width: fit-content;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const Content = styled.div`
    max-width: 900px;
    padding: clamp(32px, ${48 / 768 * 100}vw, 64px) clamp(36px, ${72 / 768 * 100}vw, 128px);
    margin: 0 auto;

    @media (max-width: 480px) {
        padding: 32px 18px;
    }
`

const TypeItem = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 60px;
    padding-top: 16px;
    padding-bottom: clamp(36px, ${42 / 768 * 100}vw, 48px);
    border-top: 1px solid #00000016;
    position: relative;

    *{
        outline-offset: 0px;
    }

    .link{
        font-size: clamp(11px, ${13 / 768 * 100}vw, 16px);
    }

    @media (max-width: 640px){
        grid-gap: 0;
    }

        &:first-child{
            border-top: unset;
            padding-top: 0;

            .switch{
                @media (max-width: 640px){
                    top: 0;
                }
            }
        }

        &:last-child{
            padding-bottom: 0;
        }

    .title{
        margin-bottom: 16px;
        font-weight: 600;
        font-size: clamp(14px, ${18 / 768 * 100}vw, 22px);
        line-height: 159% ;
        color: #495057;

        @media (max-width: 640px){
            margin-right: 60px;
            font-weight: 400;
        }
    }

    .text{

    }

    &.active{
        .switch{
            &::after{
                left: calc(100% - 26px);
                opacity: 1;

                @media (max-width: 640px) {
                    left: calc(100% - 18px);
                }
            }
        }
    }

    .switch{
        margin-right: clamp(4px, ${12 / 768 * 100}vw, 16px);
        width: 45px;
        height: 26px;
        border-radius: 13px;
        background: #EBF2F8;
        border: none;
        position: relative;

        &.necessary{
            opacity: .5;
            &::after{
                left: calc(100% - 26px);
                opacity: 1;

                @media (max-width: 640px) {
                    left: calc(100% - 18px);
                }
            }
        }

        @media (max-width: 640px){
            width: 30px;
            height: 18px;
            position: absolute;
            right: 0;
            top: 16px;
        }

        &::after{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            border-radius: 50%;
            height: 26px;
            width: 26px;
            background: linear-gradient(84.56deg, #0B61D6 12.23%, #21AEFC 94.22%);
            opacity: 0.3;
            transition: left .2s cubic-bezier(0.39, 0.575, 0.565, 1), opacity .2s cubic-bezier(0.39, 0.575, 0.565, 1);

            @media (max-width: 640px){
                width: 18px;
                height: 18px;
            }
        }
    }

    .no-sub{
        padding-left: clamp(32px, ${32 / 768 * 100}vw, 48px);   
    }

    details{
        position: relative;

        .main-title{
            padding-left: clamp(32px, ${32 / 768 * 100}vw, 48px);
            cursor: pointer;
            .title{
                position: relative;
                transition: background-size 0.25s cubic-bezier(0.39, 0.575, 0.565, 1);
                background: var(--color-accent);
                background-size: 0px 2px;
                background-repeat: no-repeat;
                background-position: left 100%;
                width: fit-content;
            }
            &:hover{
                .title{
                    background-size: 100% 2px;
                }
            }
        }
        .main-text{
            padding-left: clamp(32px, ${32 / 768 * 100}vw, 48px);
        }


        &::before{
            content: url(${props => props.arrow});
            pointer-events: none;
            position: absolute;
            left: 0;
            top: 5px;
            transition: transform .2s cubic-bezier(0.39, 0.575, 0.565, 1);
            transform: rotateZ(180deg);

            @media (max-width: 864px) {
                top: 7px;
                transform: rotateZ(180deg) scale(.7);
            }

            @media (max-width: 864px){
                top: 5px;
            }

            @media (max-width: 720px) {
                top: 3px;
            }

            @media (max-width: 650px){
                transform: rotateZ(180deg) scale(.5);
            }

            @media (max-width: 600px) {
                top: 1px;
            }
        }

        @media (max-width: 720px) {
            details{
                &::before{
                    left: -3px;
                }
            }
        }

        @media (max-width: 600px) {
            details{
                &::before{
                    left: -10px;
                }
            }
        }

        &[open]{
            &::before{
                transform: rotateZ(0);

                @media (max-width: 864px) {
                    transform: rotateZ(0) scale(.7);
                }

                @media (max-width: 650px){
                    transform: rotateZ(0) scale(.5);
                }
            }
        }
        

        .subitem{
            padding-top: 32px;
            padding-bottom: 32px;
            padding-left: 36px;
            margin-left: -36px;
            border-bottom: 1px solid #00000016;

            a{
                margin-top: 8px;
                margin-left: clamp(16px, ${26 / 768 * 100}vw, 36px);
                display: block;
            }

            &:last-child{
                border-bottom: none;
                padding-bottom: 0;
            }
        }

        details{
            padding-left: 0;
            padding-left: 0;

            .sub-title{
                padding-left: clamp(16px, ${26 / 768 * 100}vw, 36px);
                &:hover{
                    .subTitle{
                        background-size: 100% 2px;
                    }
                }
            }

            .subTitle{
                font-weight: 600;
                font-size: clamp(14px, ${18 / 768 * 100}vw, 22px);
                line-height: 159%;
                color: #495057;
                position: relative;
                transition: background-size 0.25s cubic-bezier(0.39, 0.575, 0.565, 1);
                background: var(--color-accent);
                background-size: 0px 2px;
                background-repeat: no-repeat;
                background-position: left 100%;
                width: fit-content;

                @media (max-width: 640px) {
                    font-weight: 400;
                }
            }

            .subText{
                padding: clamp(8px, ${12 / 768 * 100}vw, 16px) 0;
                border-bottom: 1px solid #00000016;
                padding-left: clamp(16px, ${26 / 768 * 100}vw, 36px);
                
                p+p{
                    margin-top: 8px;
                }

                strong{
                    font-size: inherit;
                    line-height: inherit;
                    margin-bottom: 0;
                }
            }
        }
    }
`

const TabsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    button{
        padding: clamp(7px, ${11 / 768 * 100}vw, 15px) 0;
        border: none;
        background-color: transparent;
        font-weight: 400;
        font-size: clamp(14px, ${16 / 768 * 100}vw, 18px);
        line-height: 151%;
        position: relative;

        &.active{
            &::after{
                background: var(--color-accent);
            }
        }

        &::after{
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 1px;
            background: #EBF2F8;
        }
    }
`

const TabContent = styled.div`
    margin-top: clamp(12px, ${16 / 768 * 100}vw, 24px);
    margin-bottom: clamp(12px, ${16 / 768 * 100}vw, 24px);
    padding-top: clamp(12px, ${16 / 768 * 100}vw, 24px);
    padding-bottom: clamp(12px, ${16 / 768 * 100}vw, 24px);
    overflow-y: scroll;
    max-height: 300px;
    font-size: clamp(14px, ${15 / 768 * 100}vw, 16px);
    padding-right: 8px;

    strong{
        display: block;
        margin-bottom: clamp(8px, ${12 / 768 * 100}vw, 16px);
        font-weight: 600;
        font-size: clamp(20px, ${26 / 768 * 100}vw, 32px);
        line-height: 151%;
    }
`

const Buttons = styled.div`
    border-top: 1px solid #00000016;
    padding-top: 24px;
    display: flex;
    gap: 18px;

    @media (max-width: 640px) {
        justify-content: center;
        flex-wrap: wrap;
    }

    button{
        border: none;

        &.button-white{
            background-color: #F8F9FA;

            &:hover{
                background-color: #e8e9eA;
            }
        }
    }
`
