import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import styled from "styled-components"
import { Container } from "../../style"
import { activeLanguage } from './../../helpers/activeLanguage'

export default function Header({ location }) {

    const data = useStaticQuery(graphql`
    query{
        allWpPage(box-shadow: {template: {templateName: {eq: "Header"}}}) {
            nodes {
                language {
                  slug
                }    
                header {
                    headerNavigation {
                        hLinkText
                        hLinkUrl
                    }
                    siteLogo {
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData
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
    const { siteLogo, headerNavigation } = localeData[0].header

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Wrapper type={type}>
            <Container>
                <Content>
                    <Link ariaLabel='homepage link' to="/">
                        <GatsbyImage className="logo" image={siteLogo.localFile.childImageSharp.gatsbyImageData} alt={siteLogo.altText} />
                    </Link>
                    <Navigation isOpen={isOpen} type={type}>
                        <ul>
                            {headerNavigation.map(el => (
                                <li>
                                    <Link to={el.hLinkUrl}>{el.hLinkText}</Link>
                                </li>
                            ))}
                        </ul>
                    </Navigation>
                    <MobileButton isOpen={isOpen} onClick={() => { setIsOpen(!isOpen) }}>
                        <span />
                    </MobileButton>
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.header`
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    padding: 28px 0;

    .logo{
        box-shadow: ${props => props.type === 'main' ? 'brightness(0) invert(1)' : 'null'};
    }
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const MobileButton = styled.div`
    @media (min-width: 1024px) {
        display: none;
    }
    position: relative;
    width: 28px;
    height: 18px;

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
        ` : null}
    }
`

const Navigation = styled.nav`
    ul{
        display: flex;
        gap: clamp(24px, 4.8vw, 50px);

        li{
            a{
                color: ${props => props.type === 'main' ? '#fff' : 'var(--color-black)'};
                font-weight: 400;
                font-size: clamp(14px, 2.08vw, 16px);
                line-height: 150%;
                font-family: 'Lexend';
            }

            :last-child{
                a{
                    padding: 12px 22px; 
                    background: #fff;
                    border-radius: 6px;
                    color: #495057;
                    box-shadow: ${props => props.type === 'main' ? '0px 2px 21px rgba(13, 150, 225, 0.07)' : 'null'};
                    ${props =>
        props.type !== 'main'
            ? `
                    box-shadow: var(--shadow);
                    `
            : null}
                }
            }
        }
    }

    @media (max-width: 1024px) {
        position: fixed;
        left: 0;
        right: 0;
        top: 81px;
        bottom: 0;
        box-sizing: border-box;
        padding: 0 64px;
        background-color: var(--color-white);

        ul{
            display: grid;
        }

        transform: translateX(-100%);
        transition: transform .3s cubic-bezier(0.39, 0.575, 0.565, 1);

        ${props => props.isOpen ? `
            transform: translateX(0);
        ` : null}
    }
`