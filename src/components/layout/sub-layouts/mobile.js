import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import { Container } from "../../../style"
import { datalayerPush } from '../../../helpers/datalayer'
import Analytics from '../../../analytics/header'

export default function Mobile({ isOpen, backToMainMenu, headerNavigation, setIsHovered, setIsOpen, contactLink, setOpenedTab, openedTab }) {

    return (
        <Navigation isOpen={isOpen}>
            <Content>
                <Container>
                    {headerNavigation.map((el, index) => (
                        <li>
                            <Link tabIndex={openedTab !== false ? '-1' : '0'} onFocus={() => { setIsOpen(true); setOpenedTab(false) }} onClick={(e) => { e.preventDefault(); setOpenedTab(index) }} to={el.mainLink.url}>
                                {el.menuTitle}
                                <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM17.3536 4.35356C17.5488 4.15829 17.5488 3.84171 17.3536 3.64645L14.1716 0.464468C13.9763 0.269206 13.6597 0.269206 13.4645 0.464468C13.2692 0.65973 13.2692 0.976313 13.4645 1.17158L16.2929 4L13.4645 6.82843C13.2692 7.02369 13.2692 7.34027 13.4645 7.53554C13.6597 7.7308 13.9763 7.7308 14.1716 7.53554L17.3536 4.35356ZM1 4.5L17 4.5L17 3.5L1 3.5L1 4.5Z" fill="#262626" />
                                </svg>
                            </Link>
                        </li>
                    ))}
                    <li>
                        <ContactButton tabIndex={openedTab !== false ? '-1' : '0'} onBlur={() => { setIsOpen(false); setOpenedTab(false) }} activeClassName="active" onClick={() => { setIsHovered(false); setIsOpen(false); datalayerPush(Analytics.mainLinks(headerNavigation.length, contactLink.name)) }} onFocus={() => { setIsHovered(false) }} to={contactLink.url}>
                            {contactLink.name}
                        </ContactButton>
                    </li>
                </Container>
            </Content>
            <SubMenu openedTab={openedTab}>
                <button className="first" onClick={() => { setOpenedTab(false) }}>
                    <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 4.5C17.2761 4.5 17.5 4.27614 17.5 4C17.5 3.72386 17.2761 3.5 17 3.5L17 4.5ZM0.646446 3.64645C0.451185 3.84171 0.451185 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.73079 4.34027 7.73079 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.97631 4.7308 0.659727 4.53553 0.464465C4.34027 0.269203 4.02369 0.269203 3.82843 0.464465L0.646446 3.64645ZM17 3.5L1 3.5L1 4.5L17 4.5L17 3.5Z" fill="#262626" />
                    </svg>
                    {backToMainMenu}
                </button>
                {headerNavigation.map((el, index) => (
                    <ul className={index === openedTab ? 'active' : ''}>
                        <li className="main">
                            <Link tabIndex={openedTab === index ? '0' : '-1'} onFocus={() => { setIsOpen(true); setOpenedTab(index); datalayerPush(Analytics.mainLinks(index, el.menuTitle)) }} onClick={() => { setIsOpen(false); setOpenedTab(false) }} to={el.mainLink.url}>{el.mainLink.name}</Link>
                        </li>
                        {el.firstColumn?.map((subEl, subIndex) => (
                            <li>
                                {subEl.url
                                    ? <Link tabIndex={openedTab === index ? '0' : '-1'} onFocus={() => { setIsOpen(true); setOpenedTab(index); datalayerPush(Analytics.subLinks(el.menuTitle, subIndex, subEl.name)) }} onClick={() => { setIsOpen(false); setOpenedTab(false) }} className={subEl.isBold ? 'bold' : 'plain'} to={subEl.url}>{subEl.name}</Link>
                                    : <span className={subEl.isBold ? 'bold' : 'plain'}>{subEl.name}</span>}
                            </li>
                        ))}
                        {el.secondColumn?.map((subEl, subIndex) => (
                            <li>
                                {subEl.url
                                    ? <Link tabIndex={openedTab === index ? '0' : '-1'} onFocus={() => { setIsOpen(true); setOpenedTab(index); datalayerPush(Analytics.subLinks(el.menuTitle, subIndex, subEl.name)) }} onClick={() => { setIsOpen(false); setOpenedTab(false) }} className={subEl.isBold ? 'bold' : 'plain'} to={subEl.url}>{subEl.name}</Link>
                                    : <span className={subEl.isBold ? 'bold' : 'plain'}>{subEl.name}</span>}
                            </li>
                        ))}
                        <li>
                            <ContactButton tabIndex={openedTab === index ? '0' : '-1'} onBlur={() => { setOpenedTab(false); datalayerPush(Analytics.mainLinks(headerNavigation.length, contactLink.name)) }} activeClassName="active" onClick={() => { setIsOpen(false); setOpenedTab(false) }} onFocus={() => { setIsOpen(true); setIsHovered(false) }} to={contactLink.url}>
                                {contactLink.name}
                            </ContactButton>
                        </li>
                    </ul>
                ))}
            </SubMenu>
        </Navigation>
    )
}

const Navigation = styled.nav`
    display: none;
    @media (max-width: 860px) {
        display: block;
    }

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 81px;
    height: 100vh;
    background-color: var(--color-white);
    border-top: 1px solid #00000016;

    transform: translateX(-50px);
    pointer-events: none;
    opacity: 0;
    transition: .3s cubic-bezier(0.39, 0.575, 0.565, 1);

    ${props => props.isOpen ? `
        transform: unset;
        opacity: 1;
        pointer-events: all;
    `: null}
`

const SubMenu = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
	background-color: var(--color-white);

    transition: .3s cubic-bezier(0.39, 0.575, 0.565, 1);

    transform: translateX(30px);
    opacity: 0;
    pointer-events: none;

    ${props => props.openedTab !== false ? `
        transform: unset;
        opacity: 1;
        pointer-events: all;
    `: null}

    .first{
        border: none;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        gap: 9px;
        background-color: #fff;
        border-bottom: 1px solid #00000016;
        padding: 13px var(--margin-m);

        svg{
            transition: transform .2s cubic-bezier(0.39, 0.575, 0.565, 1);
        }

        &:hover{
            svg{
                transform: translateX(-10px);   
            }
        }
    }

    ul{
        display: none;

        &.active{
            display: block;
            overflow-y: scroll;
            height: calc(100vh - 81px - 42px);
            padding:  0 var(--margin-m);
        }
    }

    .main{
        margin-bottom: 16px;
        border-bottom: 1px solid #00000016;

        a{
            padding: 16px 13px;
            text-decoration: underline;
            font-weight: 300;
        }
    }

    a, span{
        display: block;
        padding: 16px 13px;
        font-size: 14px;

        &.plain{
            font-weight: 300;
        }

        &.bold{
            font-weight: 400;
        }
    }
`

const Content = styled.ul`
    margin: 0 auto;
    margin-top: 14px;
    li{
        a{
            padding: 16px 13px;
            font-size: clamp(14px, ${14 / 480 * 100}vw, 16px);
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #00000016;
            border-radius: unset;

            svg{
                transition: transform .2s cubic-bezier(0.39, 0.575, 0.565, 1);
            }

            &:hover{
                svg{
                    transform: translateX(-10px);   
                }
            }
        }
    }
`

const ContactButton = styled(Link)`
    padding: 12px 22px; 
    margin-top: 32px;
    border-radius: 8px !important;
    border-radius: 6px;
    transition: opacity .2s cubic-bezier(0.39, 0.575, 0.565, 1);
    position: relative;
    justify-content: center !important;
    text-align: center;    
    margin-bottom: 32px;

    &:hover{
        opacity:.8;
    }

    background: #FFFFFF;
    box-shadow: 0px 2px 21px rgba(13, 150, 225, 0.1);
    color: var(--color-black);

    &.active{
        background: var(--color-accent);
        color: #fff;
    }
`