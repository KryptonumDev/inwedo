import React, { useState } from "react"
import styled from "styled-components"

export default function BlogPostNav({ data, quickTitle }) {

    const [alphabetSub] = useState(["a", "b", "c", "d", "e", "f", "g", "h"])
    const [alphabetPlain] = useState(["i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"])
    const [tabs] = useState(() => {
        const tab = []

        for (let i = 0; i < data.length; i++) {
            let arr = []
            let subArr = []
            if (data[i].quickLink === 'main') {
                arr.push(data[i])
                let current = i

                const isNextArr = () => {
                    current += 1

                    if (data[current.quickLink === 'main']) {
                        arr.push(data[current])
                        isNextArr()
                    } else {
                        i = current - 1
                        tab.push(arr)
                    }
                }
                isNextArr()
            } else if (data[i].quickLink === 'sub') {

                arr.push(data[i])
                let current = i
                let curr = i

                const isNextArr = () => {
                    curr += 1

                    if (!data[curr]) {
                        i = curr - 1
                        tab.push(arr)
                    } else if (data[curr].quickLink === 'sub' && data[curr - 1]?.quickLink === 'plain') {
                        arr.push(subArr)
                        arr.push(data[curr])
                        isNextArr()
                    } else if (data[curr].quickLink === 'sub') {
                        arr.push(data[curr])
                        isNextArr()
                    } else if (data[curr].quickLink === 'plain') {
                        subArr.push(data[curr])
                        isNextArr()
                    } else if (data[curr - 1]?.quickLink === 'plain') {
                        i = curr
                        tab.push(arr)
                        tab.push(subArr)
                    } else {
                        i = curr - 1
                        tab.push(arr)
                    }
                }
                isNextArr()
            }
        }

        return tab
    })

    let isSubArr = 0

    return (
        <Wrapper>
            <Content>
                <h2 className="h4">{quickTitle}</h2>
                <Nav>
                    <ul>
                        {tabs.map((el, outerIndex) => {
                            let isPlainArr = 0
                            if (el[0].quickLink !== 'main') {
                                isSubArr += 1
                            }
                            return el.map((inEl, index, arr) => {
                                if (inEl.quickLink === 'main') {
                                    return (
                                        <a href={'#' + inEl.quickLinkText.replace(/ /ig, '-')}>
                                            <li className="main">{outerIndex + 1 - isSubArr + '. ' + inEl.quickLinkText}</li>
                                        </a>
                                    )
                                } else if (inEl.quickLink === 'sub') {
                                    return (
                                        <a href={'#' + inEl.quickLinkText.replace(/ /ig, '-')}>
                                            <li className="sub">{alphabetSub[index - isPlainArr] + '. ' + inEl.quickLinkText}</li>
                                        </a>)

                                } else {
                                    isPlainArr += 1
                                    return <ol>
                                        {inEl.map((supEl, supIndex) => (
                                            <li className="plain">
                                                <a href={'#' + supEl.quickLinkText.replace(/ /ig, '-')}>{alphabetPlain[supIndex] + '. ' + supEl.quickLinkText}</a>
                                            </li>
                                        ))}
                                    </ol>
                                }
                            })

                        })}
                    </ul>
                </Nav>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    max-width: 814px;
    padding: 0 32px;
    box-sizing: border-box;
    margin: 0 auto;
    margin-bottom: 64px;
`

const Content = styled.div`
    padding: clamp(32px, 6.25vw, 64px) clamp(20px, 6.5vw, 80px); 
    
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.62) 28.69%, rgba(255, 255, 255, 1) 100%);
    box-shadow: var(--shadow);
    border-radius: 24px;

    .h4{
        margin-bottom: 16px;
        font-size: clamp(14px, 2.08vw, 18px);
    }
`

const Nav = styled.nav`
    font-weight: 400;
    font-size: clamp(12px, 1.69vw, 14px);
    line-height: 150%;
    font-feature-settings: 'ss01' on;

    ul{
        display: grid;
        grid-gap: 16px;

        li{
            list-style: none;
        }

        ol{

        }
    }

    .sub{
        margin-left: 24px;
    }

    ol{
        margin-left: 48px;
    }
`