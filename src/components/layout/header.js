import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
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
    })()
    const { siteLogo, headerNavigation } = localeData[0].header

    return (
        <Wrapper type={type}>
            <Container>
                <Content>
                    <Link ariaLabel='homepage link' to="/">
                        <GatsbyImage className="logo" image={siteLogo.localFile.childImageSharp.gatsbyImageData} alt={siteLogo.altText} />
                    </Link>
                    <Navigation type={type}>
                        <ul>
                            {headerNavigation.map(el => (
                                <li>
                                    <Link to={el.hLinkUrl}>{el.hLinkText}</Link>
                                </li>
                            ))}
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
    top: 0;
    left: 0;
    right: 0;
    padding: 28px 0;

    .logo{
        filter: ${props => props.type === 'main' ? 'brightness(0) invert(1)' : 'null'};
    }
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Navigation = styled.nav`
    ul{
        display: flex;
        gap: 50px;

        li{
            a{
                color: ${props => props.type === 'main' ? '#fff' : 'var(--color-black)'};
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                font-family: 'Lexend';
            }

            :last-child{
                a{
                    padding: 12px 22px; 
                    background: ${props => props.type === 'main' ? '#fff' : 'transparent'};
                    border-radius: 6px;
                    color: #495057;
                    box-shadow: ${props => props.type === 'main' ? '0px 2px 21px rgba(13, 150, 225, 0.07)' : 'null'};
                    ${props =>
        props.type !== 'main'
            ? `
                    background: var(--color-accent);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    text-fill-color: transparent;`
            : null}
                }
            }
        }
    }
`