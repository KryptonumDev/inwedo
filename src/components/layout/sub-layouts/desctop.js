import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Container } from '../../../style'
import { datalayerPush } from '../../../helpers/datalayer'
import Analytics from '../../../analytics/header'

export default function Desctop({ headerNavigation, setIsHovered, isHovered, setIsOpen, isOpen, contactLink }) {
    return (
        <Navigation isHovered={isHovered} isOpen={isOpen}>
            <ul>
                {headerNavigation.map((el, index) => (
                    <li>
                        <details open onMouseEnter={() => { setIsHovered(index) }} onMouseLeave={() => { setIsHovered(false) }}>
                            <Summary isHovered={isHovered} index={index} tabIndex='-1' onClick={(e) => { e.preventDefault() }}>
                                <Link onClick={() => { setIsHovered(false); datalayerPush(Analytics.mainLinks(index, el.menuTitle)) }} partiallyActive={true} activeClassName="active" onFocus={() => { setIsHovered(index) }} to={el.mainLink.url}>{el.menuTitle}</Link>
                            </Summary>
                            {el.firstColumn || el.secondColumn
                                ? <Menu isHovered={isHovered} index={index} className="menu">
                                    <Container>
                                        <div className="column">
                                            {el.firstColumn?.map((subEl, subIndex) => {
                                                if (!subEl.url) {
                                                    return (
                                                        <h3 className={subEl.isBold}>{subEl.name}</h3>
                                                    )
                                                }
                                                return (
                                                    <Link activeClassName="active" onClick={() => { setIsHovered(false); setIsOpen(false); datalayerPush(Analytics.subLinks(el.menuTitle, subIndex, subEl.name)) }} onFocus={() => { setIsHovered(index) }} className={subEl.isBold + ' nav'} to={subEl.url}>{subEl.name}</Link>
                                                )
                                            })}
                                        </div>
                                        <div className="column">
                                            {el.secondColumn?.map((subEl, subIndex) => {
                                                if (!subEl.url) {
                                                    return (
                                                        <h3 className={subEl.isBold}>{subEl.name}</h3>
                                                    )
                                                }
                                                return (
                                                    <Link activeClassName="active" onClick={() => { setIsHovered(false); setIsOpen(false); datalayerPush(Analytics.subLinks(el.menuTitle, subIndex, subEl.name)) }} onFocus={() => { setIsHovered(index) }} className={subEl.isBold + ' nav'} to={subEl.url}>{subEl.name}</Link>
                                                )
                                            })}
                                        </div>
                                    </Container>
                                </Menu>
                                : null}
                        </details>
                    </li>
                ))}
                <li>
                    <ContactButton activeClassName="active" onClick={() => { setIsHovered(false); setIsOpen(false); datalayerPush(Analytics.mainLinks(headerNavigation.length, contactLink.name)) }} onFocus={() => { setIsHovered(false) }} to={contactLink.url}>
                        {contactLink.name}
                    </ContactButton>
                </li>
            </ul>
        </Navigation>
    )
}

const Summary = styled.summary`
                    height: 81px;
                    display: grid;
                    align-items: center;
                    position: relative;
                    padding: 0 clamp(12px,1.5625vw,24px);

                    @media (max-width: 1024px) {
                        padding: 0 10px;
                    }

                    a{
                        padding: 4px 0;
                        line-height: 24px;
                        color: var(--color-black);
                        position: relative;

                        
                        &::after{
                            content: "";
                            position: absolute;
                            left: 0;
                            bottom: 0;
                            width: 0;
                            height: 2px;
                            background: var(--color-accent);
                            transition: width .3s cubic-bezier(0.23, 1, 0.320, 1);
                        }

                        &.active{
                            &::after{
                                width: 40%;
                            }
                        }

                        &:hover{
                            &::after{
                                width: 100%;
                            }
                        }

                        ${props => props.isHovered === props.index ? `
                            &::after{
                                width: 100% !important;
                            }
                        ` : null}

                        &:focus-visible{
                            &::after{
                                width: 0 !important;
                            }
                        }

                        ${props => props.isHovered !== false ? `
                            color: var(--color-black);
                        ` : null}

                    }
`

const Menu = styled.div`
                position: absolute;
                top: 81px;
                left: 0;
                right: 0;
                padding: 56px 0;
                background: #F8F9FA;
                border-top: 1px solid rgba(0, 0, 0, 0.08);
                border-bottom: 1px solid rgba(0, 0, 0, 0.08);
                opacity: 0;
                transform: translateY(-10px);
                pointer-events: none;
                transition: .5s cubic-bezier(0.23, 1, 0.320, 1);
                
                ${props => props.isHovered !== false && props.isHovered === props.index ? `
                            transform: unset !important;
                            opacity: 1;
                            pointer-events: all;
                        ` : null}

                h3, a {
                    font-weight: 400;
                    font-size: clamp(14px, 2.08vw, 16px);
                    line-height: 150%;
                    font-family: 'Lexend';
                    padding: 4px 0 ;

                    &.bold{
                        font-weight: 400;
                    }

                    &.plain{
                        font-weight: 300;
                    }
                }

                .nav{
                    position: relative;
                    width: fit-content;
                        
                    &::after{
                        content: "";
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 0;
                        height: 2px;
                        background: var(--color-accent);
                        transition: width .3s cubic-bezier(0.23, 1, 0.320, 1);
                    }

                    &.active{
                        &::after{
                            width: 40%;
                        }
                    }

                    &:hover{
                        &::after{
                            width: 100%;
                        }
                    }
                }

                ${Container}{
                    display: flex;
                    justify-content: flex-end;
                }

                .main{
                    margin-right: clamp(100px, ${100 / 1024 * 100}vw, 200px);
                    width: 200px;
                    padding-right: 30px;
                    position: relative;
                    border-right: 1px solid rgba(0, 0, 0, 0.08);
                    text-decoration: underline;

                }

                .column{
                    display: grid;
                    grid-gap: 12px;
                    margin-right: 30px;
                    width: clamp(240px, ${290 / 768 * 100}vw, 340px);
                    height: fit-content;
                }
`

const Navigation = styled.nav`
    ul{
        display: flex;

        li{
            display: flex;
            align-items: center;
        }
    }
    

    @media (max-width: 860px) {
        display: none;
    }
`

const ContactButton = styled(Link)`
    padding: 12px 22px; 
    margin-left: clamp(12px, 2.4vw, 25px);

    @media (max-width: 1024px) {
        margin-left: 10px;
    }

    border-radius: 6px;
    box-shadow: none;
    transition: opacity .2s cubic-bezier(0.39, 0.575, 0.565, 1);
    position: relative;

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