import React, { useState } from "react"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"
import { activeLanguage } from "../../helpers/activeLanguage"

export default function CokieBanner({ location }) {

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
    const { firstTab, secondTab, thirdTab, controlButtons } = localeData[0].cookieBanner

    const [activeTab, setActiveTab] = useState(1)
    const [activeCookie, setActiveCookies] = useState(() => {
        const arr = []
        secondTab.cookiesTypes.map(el => {
            arr.push({ name: el.typeTitle, isActive: true })
        })
        return arr
    })

    const changeActiveCookies = () => {
        
    }

    return (
        <>
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
                                        <TypeItem className={activeCookie[index].isActive ? 'active' : ''}>
                                            <details>
                                                <summary>
                                                    <p className="title">{el.typeTitle}</p>
                                                    <p className="text p">{el.typeText}</p>
                                                </summary>
                                                <div>
                                                    {el.subType?.map(el => (
                                                        <div className="subitem">
                                                            <details>
                                                                <summary>
                                                                    <p className="subTitle">{el.subTypeTitle}</p>
                                                                </summary>
                                                                <div className="subText p" dangerouslySetInnerHTML={{ __html: el.subTypeContent }} />
                                                            </details>
                                                            <a className="link" href={el.subTypeLink.url}>{el.subTypeLink.name}</a>
                                                        </div>
                                                    ))}
                                                </div>
                                            </details>
                                            <button onClick={() => { activeCookie[index].isActive = !activeCookie[index].isActive }} className="switch"></button>
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
                        <button className="button">{controlButtons.acceptAll}</button>
                        {activeTab === 2
                            ? <button className="button-white">{controlButtons.acceptPart}</button>
                            : null}
                        {activeTab !== 2
                            ? <button className="button-white">{controlButtons.confguration}</button>
                            : null}
                        {activeTab === 2
                            ? <button className="button-white">{controlButtons.reject}</button>
                            : null}
                    </Buttons>
                </Content>
            </Wrapper>
        </>
    )
}

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
    padding: 64px 128px;
    margin: 0 auto;
`

const TypeItem = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 60px;
    padding-top: 16px;
    padding-bottom: 48px;
    border-top: 1px solid #00000016;

        &:first-child{
            border-top: unset;
            padding-top: 0;
        }

        &:last-child{
            padding-bottom: 0;
        }

    .title{
        margin-bottom: 16px;
        font-weight: 600;
        font-size: 22px;
        line-height: 159% ;
        color: #495057;
    }

    .text{

    }

    details{
        padding-left: 48px;

        .subitem{
            padding-top: 32px;
            padding-bottom: 32px;
                padding-left: 36px;
                margin-left: -36px;
            border-bottom: 1px solid #00000016;

            a{
                margin-top: 10px;
                margin-left: 36px;
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

            .subTitle{
                font-weight: 600;
                font-size: 22px;
                line-height: 159%;
                padding-left: 36px;
                color: #495057;
            }

            .subText{
                padding: 16px 0;
                border-bottom: 1px solid #00000016;
                padding-left: 36px;
            }
        }
    }
`

const TabsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    button{
        padding: 15px 0;
        border: none;
        background-color: transparent;
        font-weight: 400;
        font-size: 18px;
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
    margin-top: 24px;
    margin-bottom: 24px;
    padding-top: 24px;
    padding-bottom: 24px;
    overflow-y: scroll;
    max-height: 300px;

    strong{
        display: block;
        margin-bottom: 16px;
        font-weight: 600;
        font-size: 32px;
        line-height: 151%;
    }
`

const Buttons = styled.div`
    border-top: 1px solid #00000016;
    padding-top: 24px;
    display: flex;
    gap: 18px;

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
