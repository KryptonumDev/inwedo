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
                            url
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
    const { siteLogo, headerNavigation, contactLink } = localeData[0].header

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Wrapper id='header' isOpen={isOpen}>
            <Container> 
                <Content isOpen={isOpen}>
                    <a className="no-focus" href="#main" aria-label='skip link to main content' />
                    <Link aria-label='homepage link' to={urlSystem['Homepage'][localeData[0].language.slug]}>
                        <GatsbyImage className="logo" image={siteLogo.localFile.childImageSharp.gatsbyImageData} alt={siteLogo.altText} />
                    </Link>
                    <MobileButton isOpen={isOpen} onClick={() => { setIsOpen(!isOpen) }}>
                        <span />
                    </MobileButton>
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
                </Content>
            </Container>
        </Wrapper >
    )
}

const Wrapper = styled.header`
    position: absolute;
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

        @media (max-width: 860px) {
            ${props => props.isOpen ? `
                outline-color: #0B61D6;
            ` : null}
        }
    }
`

const Navigation = styled.nav`
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