import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { urlSystem } from "../../contstants/urlSystem"
import { Container } from "../../style"
import { activeLanguage } from './../../helpers/activeLanguage'

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
    const type = (() => {
        if (location.pathname === '/') {
            return 'main'
        }
        return 'else'
    })()
    const { siteLogo, headerNavigation, contactLink } = localeData[0].header

    const [isOpen, setIsOpen] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        const body = document.body
        if (isOpen) {
            body.classList.add('noScroll')
        } else {
            body.classList.remove('noScroll')
        }
    }, [isOpen])

    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            if(e.code === 'Escape'){
                setIsOpen(false)
                setIsHovered(false)
            }
        })
    }, [])

    return (
        <Wrapper id='header' isHovered={isHovered} type={type} isOpen={isOpen} >
            <Container>
                <Content>
                    <a className="no-focus" href="#main" aria-label='skip link to main content'/>
                    <Link onClick={() => { setIsOpen(false) }} onFocus={() => { setIsHovered(false) }}  aria-label='homepage link' to={urlSystem['Homepage'][localeData[0].language.slug]}>
                        <GatsbyImage className="logo" image={siteLogo.localFile.childImageSharp.gatsbyImageData} alt={siteLogo.altText} />
                    </Link>
                    <MobileButton type={type} isOpen={isOpen} onClick={() => { setIsOpen(!isOpen) }}>
                        <span />
                    </MobileButton>
                    <Navigation isHovered={isHovered} isOpen={isOpen} type={type}>
                        <ul>
                            {headerNavigation.map((el, index) => (
                                <li>
                                    <details open onMouseEnter={() => { setIsHovered(index) }} onMouseLeave={() => { setIsHovered(false) }}>
                                        <Summary type={type} isHovered={isHovered} index={index} tabIndex='-1' onClick={(e) => { e.preventDefault() }}>
                                            <Link partiallyActive={true} activeClassName="active" onFocus={() => { setIsHovered(index) }} onClick={(e) => { e.preventDefault() }} to={el.mainLink.url}>{el.menuTitle}</Link>
                                        </Summary>
                                        <Menu isHovered={isHovered} index={index} className="menu">
                                            <Container>
                                                <div className="main">
                                                    <Link onClick={() => { setIsHovered(false); setIsOpen(false) }} onFocus={() => { setIsHovered(index) }} to={el.mainLink.url}>{el.mainLink.name}</Link>
                                                </div>
                                                <div className="column">
                                                    {el.firstColumn?.map(el => {
                                                        if (!el.url) {
                                                            return (
                                                                <h3 className={el.isBold}>{el.name}</h3>
                                                            )
                                                        }
                                                        return (
                                                            <Link activeClassName="active" onClick={() => { setIsHovered(false); setIsOpen(false) }} onFocus={() => { setIsHovered(index) }} className={el.isBold + ' nav'} to={el.url}>{el.name}</Link>
                                                        )
                                                    })}
                                                </div>
                                                <div className="column">
                                                    {el.secondColumn?.map(el => {
                                                        if (!el.url) {
                                                            return (
                                                                <h3 className={el.isBold}>{el.name}</h3>
                                                            )
                                                        }
                                                        return (
                                                            <Link activeClassName="active" onClick={() => { setIsHovered(false); setIsOpen(false) }} onFocus={() => { setIsHovered(index) }} className={el.isBold + ' nav'} to={el.url}>{el.name}</Link>
                                                        )
                                                    })}
                                                </div>
                                            </Container>
                                        </Menu>
                                    </details>
                                </li>
                            ))}
                            <li>
                                <ContactButton onClick={() => { setIsHovered(false); setIsOpen(false) }} onFocus={() => { setIsHovered(false) }} to={contactLink.url}>
                                    {contactLink.name}
                                </ContactButton>
                            </li>
                        </ul>
                    </Navigation>
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.header`
    position: absolute;
    z-index: 10;
    background-color: ${props => props.type === 'main' ? 'transparent' : 'var(--color-white)'};
    top: 0;
    left: 0;
    right: 0;
    transition: .5s cubic-bezier(0.23, 1, 0.320, 1);
    z-index: 1000;

    .logo{
        filter: ${props => props.type === 'main' ? 'brightness(0) invert(1)' : 'null'};
    }

    /* ${props => props.isOpen ? `
        position: fixed;
    ` : null} */

    ${props => props.isHovered !== false ? `
        background-color: var(--color-white);

        .logo{
            filter: unset;
        }
    ` : null}

    ${props => props.type === 'main' && props.isOpen ? `
        background-color: var(--color-white);
        .logo{
            filter: unset;
        }
    ` : null}
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 820px) {
        height: 81px;
    }
`

const MobileButton = styled.button`
    @media (min-width: 820px) {
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
        background-color: ${props => props.type === 'main' ? 'var(--color-white)' : 'var(--color-black)'};
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
        background-color: ${props => props.type === 'main' ? 'var(--color-white)' : 'var(--color-black)'};
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
        background-color: ${props => props.type === 'main' ? 'var(--color-white)' : 'var(--color-black)'};
        border-radius: 5px;
        transition: opacity .3s, transform .2s;

        ${props => props.isOpen ? `
            opacity: 0;
            transform: translateX(-20px);
            background-color: var(--color-black);
        ` : null}
    }
`

const Summary = styled.summary`
                    height: 81px;
                    display: grid;
                    align-items: center;
                    position: relative;
                    padding: 0 clamp(12px, 2vw, 25px);

                    @media (max-width: 1024px) {
                        padding: 0 10px;
                    }

                    @media (max-width: 820px){
                        height: unset;
                        position: unset;
                        width: fit-content;
                        padding: 12px 0 ;
                    }

                    a{
                        padding: 4px 0;
                        line-height: 24px;
                        color: ${props => props.type === 'main' ? '#fff' : 'var(--color-black)'};
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

                        @media (max-width: 820px){
                            color: var(--color-black);
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

                @media (max-width: 820px){
                    top: 0;
                    bottom: 0;
                    overflow: scroll;
                    border-top: unset;
                    border-bottom: unset;
                    padding: 38px 0 32px;
                    left: calc(var(--margin-m) + 240px);
                    transform: translateX(10px);
                }

                @media (max-width: 640px) {
                    left: calc(var(--margin-m) + 140px);
                }

                @media (max-width: 360px) {
                    ${Container}{
                        padding: 0 12px;
                    }
                }
                
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

                    @media (max-width: 820px) {
                        color: var(--color-black);
                    }

                    @media (max-width: 360px) {
                        font-size: 12px;
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

                    @media (max-width: 820px){
                        display: grid;
                        grid-gap: 30px;
                    }

                    @media (max-width: 360px){
                        grid-gap: 20px;
                    }
                }

                .main{
                    margin-right: clamp(100px, ${100 / 1024 * 100}vw, 200px);
                    width: 200px;
                    padding-right: 30px;
                    position: relative;
                    border-right: 1px solid rgba(0, 0, 0, 0.08);
                    text-decoration: underline;

                    @media (max-width: 820px){
                        padding-right: 0;
                        padding-bottom: 30px;
                        border-right: unset;
                        border-bottom: 1px solid rgba(0, 0, 0, 0.08);
                        width: unset;
                        margin-right: 0;
                    }

                    @media (max-width: 360px){
                        padding-bottom: 20px;

                        a{
                            font-size: 14px;
                        }
                    }

                }

                .column{
                    display: grid;
                    grid-gap: 24px;
                    margin-right: clamp(150px, ${150 / 1024 * 100}vw, 200px);
                    height: fit-content;

                    @media (max-width: 1024px){
                        margin-right: 100px;
                    }

                    @media (max-width: 820px){
                        margin-right: 0;
                    }

                    @media (max-width: 360px){
                        grid-gap: 20px;
                    }
                }
`

const Navigation = styled.nav`
    ul{
        display: flex;

        @media (max-width: 820px){
            display: grid;
            margin-top: 20px;
        }

        li{
            display: flex;
            align-items: center;
        }
    }
    

    @media (max-width: 820px) {
        border-top: 1px solid rgba(0, 0, 0, 0.08);
        position: fixed;
        left: 0;
        right: 0;
        top: 81px;
        bottom: 0;
        box-sizing: border-box;
        padding: 0 var(--margin-m);
        background-color: var(--color-white);

        ul{
            display: grid;
            max-width: 240px;
        }

        transform: translateX(-100%);
        transition: transform .3s cubic-bezier(0.39, 0.575, 0.565, 1);

        ${props => props.isOpen ? `
            transform: translateX(0);
        ` : null}

        details{
            width: 100%;
        }
    }

    @media (max-width: 640px){
        ul{
            max-width: 140px;
        }
    }
`

const ContactButton = styled(Link)`
    padding: 12px 22px; 
    margin-left: clamp(12px, 2.4vw, 25px);

    @media (max-width: 1024px) {
        margin-left: 10px;
    }

    @media (max-width: 820px) {
        margin-left: 0;
    }

    background: #fff;
    border-radius: 6px;
    color: #495057;
    box-shadow: ${props => props.type === 'main' ? '0px 2px 21px rgba(13, 150, 225, 0.07)' : 'null'};
    ${props => props.type !== 'main' ? `
        box-shadow: var(--shadow);
        `
        : null}
`