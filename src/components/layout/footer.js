import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../../style"
import { activeLanguage } from './../../helpers/activeLanguage'

export default function Footer({ location }) {

    const data = useStaticQuery(graphql`
        query{
            allWpPage(filter: {template: {templateName: {eq: "Footer"}}}) {
                nodes {
                    language {
                      slug
                    }
                    footer {
                      siteLogo {
                        altText
                        localFile {
                          childImageSharp {
                            gatsbyImageData
                          }
                        }
                      }
                      navigation {
                        columnTitle
                        columnRows {
                          linkUrl
                          linkText
                        }
                      }
                      additionalInform {
                        row
                      }
                      copyright {
                        copyright
                        additionalLinks {
                          url
                          name
                        }
                      }
                      socialLinks {
                        link
                        ariaLabel
                        icon {
                          altText
                          sourceUrl
                        }
                      }
                    }
                }
            }
        }
    `)
    const locale = activeLanguage(location)
    const localeData = data.allWpPage.nodes.filter(el => el.language.slug === locale)
    const { siteLogo, navigation, additionalInform, copyright, socialLinks } = localeData[0].footer

    return (
        <Wrapper>
            <Container>
                <Content>
                    <div>
                        <GatsbyImage className="logo" image={siteLogo.localFile.childImageSharp.gatsbyImageData} alt={siteLogo.altText} />
                        <div className="additional">
                            {additionalInform.map(el => (
                                <p>{el.row}</p>
                            ))}
                        </div>
                    </div>
                    {navigation.map(el => (
                        <div>
                            <p className="row-title">{el.columnTitle}</p>
                            <ul>
                                {el.columnRows.map(innerEl => (
                                    <li><Link to={innerEl.linkUrl}>{innerEl.linkText}</Link></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </Content>
                <Social>
                    {socialLinks.map(el => (
                        <a href={el.link} ariaLabel={el.ariaLabel}>
                            <img src={el.icon.sourceUrl} alt={el.icon.altText} />
                        </a>
                    ))}
                </Social>
                <Copyright>
                    <p>{copyright.copyright}</p>
                    <ul>
                        {copyright.additionalLinks.map(el => (
                            <li><Link to={el.url}>{el.name}</Link></li>
                        ))}
                    </ul>
                </Copyright>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    margin-top: var(--margin-section);
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;

    .logo{
        margin-bottom: 32px;
    }

    .additional{
        padding-left: 22px;
        display: grid;
        grid-gap: 14px;

        p{
            font-weight: 300;
            font-size: 16px;
            line-height: 26px;
            color: #495057;
        }
    }

    .row-title{
        margin-bottom: 24px;
        font-weight: 600;
        font-size: 22px;
        line-height: 35px;
    }

    ul{
        display: grid;
        grid-gap: 14px;

        li{

            a{
                
                font-weight: 300;
                font-size: 16px;
                line-height: 26px;
                color: #495057;
            }
        }
    }
`

const Social = styled.div`
    width: fit-content;
    display: flex;
    align-items: flex-end;
    gap: 24px;
    margin-top: 18px;
    margin-bottom: 36px;
    margin-left: 22px;
`

const Copyright = styled.div`
    padding: 32px 0 32px 90px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p{
        color: #ACB5BD;
    }

    ul{
        display: flex;
        gap: 64px;
        a{
            color: #ACB5BD;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
        }
    }

    &::before{
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        height: 1px;
        background-color: #000;
        opacity: .1;
    }
`