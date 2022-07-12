import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { urlSystem } from "../../contstants/urlSystem"
import { Container } from "../../style"
import { activeLanguage } from './../../helpers/activeLanguage'
import Desctop from "./sub-layouts.js/desctop"
import Mobile from "./sub-layouts.js/mobile"

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
                    backToMainMenu
                    contactLink{
                        name
                        url
                    }
                    siteLogo {
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData(placeholder: BLURRED,quality: 100)
                        }
                      }
                    }
                }
            }
        }
    }
    `)
    const locale = activeLanguage(location)
    const localeData = data.allWpPage.nodes.filter(el => el.language.slug === locale)
    const { backToMainMenu, siteLogo, headerNavigation, contactLink } = localeData[0].header

    const [isOpen, setIsOpen] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        const body = document.documentElement
        if (isOpen) {
            body.classList.add('noScroll')
        } else {
            body.classList.remove('noScroll')
        }
    }, [isOpen])

    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape') {
                setIsOpen(false)
                setIsHovered(false)
            }
        })
    }, [])

    return (
        <Wrapper id='header' isHovered={isHovered} isOpen={isOpen} >
            <Container>
                <Content>
                    <a className="no-focus" href="#main" aria-label='skip link to main content' />
                    <Link onClick={() => { setIsOpen(false) }} onFocus={() => { setIsHovered(false) }} aria-label='homepage link' to={urlSystem['Homepage'][localeData[0].language.slug]}>
                        <GatsbyImage className="logo" image={siteLogo.localFile.childImageSharp.gatsbyImageData} alt={siteLogo.altText} />
                    </Link>
                    <MobileButton aria-label='mobile menu burger' isOpen={isOpen} onClick={() => { setIsOpen(!isOpen) }}>
                        <span />
                    </MobileButton>
                    <Desctop
                        headerNavigation={headerNavigation}
                        setIsHovered={setIsHovered}
                        isHovered={isHovered}
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        contactLink={contactLink}
                    />
                    <Mobile
                        backToMainMenu={backToMainMenu}
                        headerNavigation={headerNavigation}
                        setIsHovered={setIsHovered}
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        contactLink={contactLink}
                    />
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.header`
    position: absolute;
    z-index: 10;
    background-color: #fff;
    top: 0;
    left: 0;
    right: 0;
    transition: .5s cubic-bezier(0.23, 1, 0.320, 1);
    z-index: 1000;

    /* ${props => props.isOpen ? `
        position: fixed;
    ` : null} */

    /* ${props => props.isHovered !== false ? `
        background-color: var(--color-white);
    ` : null}

    ${props => props.isOpen ? `
        background-color: var(--color-white);
        .logo{
            filter: unset;
        }
    ` : null} */
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 860px) {
        height: 81px;
    }
`

const MobileButton = styled.button`
    @media (min-width: 860px) {
        display: none;
    }
    position: relative;
    width: 28px;
    height: 18px;
    background-color: transparent;
    border: none;

    &::after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: var(--color-black);
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
        background-color: var(--color-black);
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
        background-color: var(--color-black);
        border-radius: 5px;
        transition: opacity .3s, transform .2s;

        ${props => props.isOpen ? `
            opacity: 0;
            transform: translateX(-20px);
            background-color: var(--color-black);
        ` : null}
    }
`