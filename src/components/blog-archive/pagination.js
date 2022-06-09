import React, { useState, useEffect } from "react"
import styled from "styled-components"

export default function Pagination({ currentPage, itemCount, changeCurrentPage }) {
    let buttons = []

    const [pagesCount, changePagesCount] = useState(Math.ceil(itemCount / 10))

    useEffect(() => {
        changePagesCount(Math.ceil(itemCount / 10))
    }, [itemCount])

    for (let i = 0; i < pagesCount; i++) {
        buttons.push(i + 1)
    }

    if (itemCount < 11) {
        return null
    }

    if (itemCount < 51) {
        return (
            <Wrapper>
                <Button disabled={currentPage === 1} onClick={() => { changeCurrentPage(currentPage - 1) }}>
                    <span>{'<'}</span>
                </Button>
                {buttons.map(el => (
                    <Button active={currentPage === el} onClick={() => { changeCurrentPage(el) }}>
                        <span>{el}</span>
                    </Button>
                ))}
                <Button disabled={currentPage === pagesCount} onClick={() => { changeCurrentPage(currentPage + 1) }}>
                    <span>{'>'}</span>
                </Button>
            </Wrapper>
        )
    }

    return (
        <Wrapper>
            <Button disabled={currentPage === 1} onClick={() => { changeCurrentPage(currentPage - 1) }}>
                <span>{'<'}</span>
            </Button>

            {currentPage > 4
                ? (
                    <>
                        <Button onClick={() => { changeCurrentPage(1) }}>
                            <span>{1}</span>
                        </Button>
                        <Button disabled>
                            <span>...</span>
                        </Button>
                    </>
                )
                : null}

            {buttons.map((el, index) => {
                if (currentPage === 1 && (index === currentPage - 1 || index === currentPage || index === currentPage + 1)) {
                    return (
                        <Button active={currentPage === el} onClick={() => { changeCurrentPage(el) }}>
                            <span>{el}</span>
                        </Button>
                    )
                }
                if (currentPage === pagesCount && (index === currentPage - 1 || index === currentPage || index === currentPage + 1)) {
                    return (
                        <Button active={currentPage === el} onClick={() => { changeCurrentPage(el) }}>
                            <span>{el}</span>
                        </Button>
                    )
                }
                if (currentPage === 2 || currentPage === pagesCount - 1) {
                    if (index === currentPage - 2 || index === currentPage - 1 || index === currentPage) {
                        return (
                            <Button active={currentPage === el} onClick={() => { changeCurrentPage(el) }}>
                                <span>{el}</span>
                            </Button>
                        )
                    }
                    return null
                }
                if (index === currentPage - 3 || index === currentPage - 2 || index === currentPage - 1 || index === currentPage || index === currentPage + 1) {
                    return (
                        <Button active={currentPage === el} onClick={() => { changeCurrentPage(el) }}>
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
                        <Button onClick={() => { changeCurrentPage(pagesCount) }}>
                            <span>{pagesCount}</span>
                        </Button>
                    </>
                )
                : null}

            <Button disabled={currentPage === Math.ceil(itemCount / 10)} onClick={() => { changeCurrentPage(currentPage + 1) }}>
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
`

const Button = styled.button`
    border: none;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: var(--shadow);
    cursor: pointer;
    position: relative;
    border-radius: 8px;
    background-color: transparent;

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
        opacity: ${props => props.active ? '0' : '1'};
        border-radius: 8px;
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