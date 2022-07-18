import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import { urlSystem } from "../../contstants/urlSystem"
import { Container } from "../../style"
import { activeLanguage } from './../../helpers/activeLanguage'
import Desctop from "./main-layouts/desctop"
import Mobile from "./main-layouts/mobile"
import scrollLock from './../../helpers/scrollLock'

export default function Header({ location }) {

    const data = useStaticQuery(graphql`
    query{
        allWpPage(filter: {template: {templateName: {eq: "Header"}}}) {
            nodes {
                language {
                  slug
                }    
                header {
                    headerNavigation {
                        menuTitle
                        mainLink{
                            name
                            url
                        }
                        firstColumn{
                            name
                            url
                            isBold
                        }
                        secondColumn{
                            name
                            url
                            isBold
                        }
                    }
                    contactLink{
                        name
                        url
                    }
                    siteLogo {
                      altText
                      localFile {
                        publicURL
                      }
                    }
                }
            }
        }
    }
    `)
    const locale = activeLanguage(location)
    const localeData = data.allWpPage.nodes.filter(el => el.language.slug === locale)
    const { siteLogo, headerNavigation, contactLink } = localeData[0].header

    const [isOpen, setIsOpen] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        if (isOpen) {
            scrollLock.enable()
        } else {
            scrollLock.disable()
        }
    }, [isOpen])

    useEffect(() => {
        if (typeof document !== `undefined`) {
            document.addEventListener('keydown', (e) => {
                if (e.code === 'Escape') {
                    setIsOpen(false)
                    setIsHovered(false)
                }
            })
        }
        if (typeof window !== `undefined`) {
            window.onscroll = () => {
                setOffset(window.pageYOffset)
            }
        }
    }, [])

    return (
        <Wrapper isScrolled={offset} id='header' isOpen={isOpen} isHovered={isHovered}>
            <Container>
                <Content isScrolled={offset} isOpen={isOpen} isHovered={isHovered}>
                    <a className="no-focus" href="#main" aria-label='skip link to main content' />
                    <Link aria-label='homepage link' to={urlSystem['Homepage'][localeData[0].language.slug]}>
                        <img className="logo" src={siteLogo.localFile.publicURL} alt={siteLogo.altText} />
                    </Link>
                    <MobileButton isScrolled={offset} aria-label='mobile menu burger' isOpen={isOpen} onClick={() => { setIsOpen(!isOpen) }}>
                        <span />
                    </MobileButton>
                    <Desctop
                        headerNavigation={headerNavigation}
                        contactLink={contactLink}
                        isHovered={isHovered}
                        isOpen={isOpen}
                        setIsHovered={setIsHovered}
                        setIsOpen={setIsOpen}
                        isScrolled={offset}
                    />
                    <Mobile
                        isOpen={isOpen}
                        headerNavigation={headerNavigation}
                        setIsOpen={setIsOpen}
                        contactLink={contactLink}
                        isScrolled={offset}
                    />
                </Content>
            </Container>
        </Wrapper >
    )
}

const Wrapper = styled.header`
    position: fixed;
    z-index: 10;
    background-color: transparent;
    top: 0;
    left: 0;
    right: 0;
    transition: .5s cubic-bezier(0.23, 1, 0.320, 1);
    z-index: 1000;
    height: 81px;

    .logo{
        filter: brightness(0) invert(1);
    }

    ${props => props.isHovered !== false || props.isScrolled ? `
        background-color: #fff;
        .logo{
            filter: unset;
        }
    ` : null}

    @media (max-width: 860px) {

        ${props => props.isOpen ? `

            background-color: var(--color-white);
            .logo{
                filter: unset;
            }
        
        `: null}

    }
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 81px;

    a:focus-visible{
        outline-color: #fff;

        ${props => props.isHovered !== false || props.isScrolled ? `
                outline-color: #0B61D6;
        ` : null}

        @media (max-width: 860px) {
            ${props => props.isOpen ? `
                outline-color: #0B61D6;
            ` : null}
        }
    }
`

const MobileButton = styled.button`
    display: none;
    position: relative;
    width: 28px;
    height: 18px;
    background-color: transparent;
    border: none;
    border-radius: 2px;

    &:focus-visible{
        outline-color: #fff;
    }

    @media (max-width: 860px) {
        display: block;

        &:focus-visible{
            ${props => props.isOpen ? `
                outline-color: #0B61D6;
            `: null}
        }
    }

    &::after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #fff;
        border-radius: 5px;
        transition: top .2s .2s, left .2s .2s, transform .2s, width .3s;
        transform-origin: 50% 50%;

        ${props => props.isOpen ? `
            width: 80%;
            transform: rotateZ(45deg);
            top: calc(50% - 1px);
            left: 10%;
            transition: top .2s, left .2s, transform .2s .2s;
            background-color: var(--color-black);
        ` : null}
    }

    &::before{
        content: "";
        position: absolute;
        top: calc(100% - 2px);
        right: 0;
        width: 80%;
        height: 2px;
        background-color: #fff;
        border-radius: 5px;
        transition: top .2s .2s, right .2s .2s, transform .2s;
        transform-origin: 50% 50%;

        ${props => props.isOpen ? `
            transform: rotateZ(-45deg);
            top: calc(50% - 1px);
            right: 10%;
            transition: top .2s, right .2s, transform .2s .2s;
            background-color: var(--color-black);
        ` : null}
    }

    span{
        position: absolute;
        top: calc(50% - 1px);
        left: 0;
        right: 0;
        height: 2px;
        background-color: #fff;
        border-radius: 5px;
        transition: opacity .3s, transform .2s;

        ${props => props.isOpen ? `
            opacity: 0;
            transform: translateX(-20px);
            background-color: var(--color-black);
        ` : null}
    }

    ${props => props.isScrolled > 100 ? `
        &::after{
            background-color: #000;
        }
        &::before{
            background-color: #000;
        }
        span{
            background-color: #000;
        }
    ` : null}

`