import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"  

export default function Mobile({ isOpen, headerNavigation, setIsOpen, contactLink }) {
    return (
        <Navigation isOpen={isOpen}>
            <ul>
                {headerNavigation.map(el =>
                    <li>
                        <Link tabIndex={isOpen ? '0' : '-1'} onFocus={() => { setIsOpen(true) }} activeClassName="active" to={el.mainLink.url}><span>{el.menuTitle}</span></Link>
                    </li>
                )}
                <li>
                    <ContactButton tabIndex={isOpen ? '0' : '-1'} onFocus={() => { setIsOpen(true) }} onBlur={() => { setIsOpen(false) }} to={contactLink.url}>
                        {contactLink.name}
                    </ContactButton>
                </li>
            </ul>
        </Navigation>
    )
}

const Navigation = styled.nav`
    display: none;
    @media (max-width: 860px) {
        display: block;
    }

    ul{
        display: flex;

        li{
            display: flex;
            align-items: center;
            height: 81px;
            a{
                padding: 4px clamp(12px, ${12 / 768 * 100}vw, 24px);
                display: flex;
                align-items: center;
                justify-content: center;

                span{
                    position: relative;
                    padding: 4px 0;
                    color: #fff;

                    &::after{
                        content: "";
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 0;
                        height: 2px;
                        background: #fff;
                        transition: width .3s cubic-bezier(0.23, 1, 0.320, 1);
                    }
                }

                &.active{
                    span::after{
                        width: 40%;
                    }
                }

                &:hover{
                    span::after{
                        width: 100%;
                    }
                }
            }
        }
    }

    @media (max-width: 860px) {
        position: fixed;
        top: 81px;
        left: 0;
        right: 0;
        bottom: 0;
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

        ul{
            margin-top: 30px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 24px;

            li{
                height: unset;
                a{
                    span{
                        color: var(--color-black);

                        &::after{
                            background: var(--color-accent);
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 480px) {
        a, span{
            font-size: 14px !important;
        }
    }
`

const ContactButton = styled(Link)`
    padding: 12px 22px !important; 
    height: unset;
    margin-left: clamp(12px, 2.4vw, 25px);
    transition: background-color .2s cubic-bezier(0.39, 0.575, 0.565, 1);
    position: relative;

    &:hover{
        background-color: #dfdfdf;
    }

    @media (max-width: 1024px) {
        margin-left: 10px;
    }

    @media (max-width: 860px) {
        margin-left: 0;
        margin-top: 24px;

        &::before{
            content: "";
            position: absolute;
            width: 50px;
            left: 50%;
            top: -24px;
            transform: translateX(-50%);
            opacity: 0.1;
            border: 1px solid #000000;
        }
    }

    background: #fff;
    border-radius: 6px;
    color: #495057;
    box-shadow: 0px 2px 21px rgba(13, 150, 225, 0.07);
    
`