import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import styled from "styled-components"

export default function Pagination({ defaultUrl, currentPage, itemCount, changeCurrentPage }) {
    let buttons = []

    const [pagesCount, changePagesCount] = useState(Math.ceil(itemCount / 10))

    useEffect(() => {
        changePagesCount(Math.ceil(itemCount / 10))
    }, [itemCount])

    for (let i = 0; i < pagesCount; i++) {
        buttons.push(i + 1)
    }

    const changePage = (e, page) => {
        e.preventDefault()
        changeCurrentPage(page)


        const href = document.getElementById("filter")
        const offsetTop = href.offsetTop

        setTimeout(() => {
            window.scroll({
                top: offsetTop,
                behavior: "smooth"
            });
        }, 1)

    }

    if (itemCount < 11) {
        return null
    }

    if (itemCount < 51) {

        return (
            <Wrapper>
                <Button href={currentPage === 1 ? defaultUrl : (defaultUrl + (currentPage - 1))} className={currentPage === 1 ? 'disabled' : ''} onClick={(e) => { changePage(e, currentPage - 1) }}>
                    <span>{'<'}</span>
                </Button>
                {buttons.map(el => {
                    let href = defaultUrl + el
                    if (el === 1) {
                        href = defaultUrl
                    }
                    return (
                        <Button href={href} active={currentPage === el} onClick={(e) => { changePage(e, el) }}>
                            <span>{el}</span>
                        </Button>
                    )
                })}
                <Button href={currentPage === pagesCount ? (defaultUrl + pagesCount) : (defaultUrl + (currentPage + 1))} className={currentPage === pagesCount ? 'disabled' : ''} onClick={(e) => { changePage(e, currentPage + 1) }}>
                    <span>{'>'}</span>
                </Button>
            </Wrapper>
        )
    }

    return (
        <Wrapper>
            <Button href={currentPage === 1 ? defaultUrl : (defaultUrl + (currentPage - 1))} className={currentPage === 1 ? 'disabled' : ''} onClick={(e) => { changePage(e, currentPage - 1) }}>
                <span>{'<'}</span>
            </Button>

            {currentPage > 4
                ? (
                    <>
                        <Button href={defaultUrl} onClick={(e) => { changePage(e, 1) }}>
                            <span>{1}</span>
                        </Button>
                        <Button disabled>
                            <span>...</span>
                        </Button>
                    </>
                )
                : null}

            {buttons.map((el, index) => {
                let href = defaultUrl + el
                if (el === 1) {
                    href = defaultUrl
                }
                if (currentPage === 1 && (index === currentPage - 1 || index === currentPage || index === currentPage + 1)) {
                    return (
                        <Button href={href} active={currentPage === el} onClick={(e) => { changePage(e, el) }}>
                            <span>{el}</span>
                        </Button>
                    )
                }
                if (currentPage === pagesCount && (index === currentPage - 1 || index === currentPage || index === currentPage + 1)) {
                    return (
                        <Button href={href} active={currentPage === el} onClick={(e) => { changePage(e, el) }}>
                            <span>{el}</span>
                        </Button>
                    )
                }
                if (currentPage === 2 || currentPage === pagesCount - 1) {
                    if (index === currentPage - 2 || index === currentPage - 1 || index === currentPage) {
                        return (
                            <Button href={href} active={currentPage === el} onClick={(e) => { changePage(e, el) }}>
                                <span>{el}</span>
                            </Button>
                        )
                    }
                    return null
                }
                if (index === currentPage - 3 || index === currentPage - 2 || index === currentPage - 1 || index === currentPage || index === currentPage + 1) {
                    return (
                        <Button href={href} active={currentPage === el} onClick={(e) => { changePage(e, el) }}>
                            <span>{el}</span>
                        </Button>
                    )
                }
                return null
            })}

            {currentPage === 1 || pagesCount - currentPage > 3
                ? (
                    <>
                        <Button disabled>
                            <span>...</span>
                        </Button>
                        <Button href={defaultUrl + pagesCount} onClick={(e) => { changePage(e, pagesCount) }}>
                            <span>{pagesCount}</span>
                        </Button>
                    </>
                )
                : null}

            <Button href={defaultUrl + (currentPage + 1)} className={currentPage === Math.ceil(itemCount / 10) ? 'disabled' : ''} onClick={(e) => { changePage(e, currentPage + 1) }}>
                <span>{'>'}</span>
            </Button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    margin-top: clamp(32px, ${48 / 768 * 100}vw, 64px);
`

const Button = styled.a`
    border: none;
    width: clamp(32px, ${44 / 768 * 100}vw, 50px);
    height: clamp(32px, ${44 / 768 * 100}vw, 50px);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: ${props => props.active ? 'unset' : 'var(--shadow)'};
    cursor: pointer;
    position: relative;
    border-radius: 8px;
    background-color: transparent;

    &:hover{
        &::before{
            opacity: .3;
        }
    }

    :focus-visible {
        outline-offset: 0;
    }

    &.disabled{
        pointer-events: none;
        cursor: default;
    }

    &::before{
        content: "";
        position: absolute;
        z-index: 3;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: #fff;
        transition: opacity .3s cubic-bezier(0.215, 0.610, 0.355, 1);
        opacity: ${props => props.active ? '0!important' : '1'};
        border-radius: 8px;
        transition: opacity .3s cubic-bezier(0.39, 0.575, 0.565, 1);
    }

    span{
        position: relative;
        z-index: 10;
        font-weight: 300;
        font-size: 18px;
        line-height: 30px;
        background: linear-gradient(84.56deg, #0B5CD6 12.23%, #21AEFC 94.22%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }
`