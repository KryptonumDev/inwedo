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
                        columnRows {
                          linkUrl
                          linkText
                          isBold
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
                <GatsbyImage className="logo" image={siteLogo.localFile.childImageSharp.gatsbyImageData} alt={siteLogo.altText} />
                <Content>
                    <div>
                        <div className="additional">
                            {additionalInform.map(el => (
                                <p>{el.row}</p>
                            ))}
                        </div>
                        <Social>
                            {socialLinks.map(el => (
                                <a rel="me" href={el.link} ariaLabel={el.ariaLabel}>
                                    <img src={el.icon.sourceUrl} alt={el.icon.altText} />
                                </a>
                            ))}
                        </Social>
                    </div>
                    {navigation.map(el => (
                        <div>
                            <ul>
                                {el.columnRows.map(innerEl => (
                                    <li><StyledLink isBold={innerEl.isBold === 'bold'} to={innerEl.linkUrl}>{innerEl.linkText}</StyledLink></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </Content>

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

    .logo{
        margin-bottom: 32px;
    }
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;

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
            max-width: 280px;
            a{
                
                font-weight: 300;
                font-size: 16px;
                line-height: 26px;
                color: #495057;
            }
        }
    }

    @media (max-width: 1024px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 32px;
        margin-bottom: 32px;
        padding: 0 22px;

        .additional{
            padding-left: 0;
        }

        .logo{
            transform: translateX(-22px);
        }
    }

    @media (max-width: 540px) {
        grid-template-columns: 1fr;
        padding: 0;
    }
`

const StyledLink = styled(Link)`
    font-weight: ${props => props.isBold ? 400 : 300} !important;
    font-size: ${props => props.isBold ? '16px' : '14px'} !important;
`

const Social = styled.div`
    width: fit-content;
    display: flex;
    align-items: flex-end;
    gap: 24px;
    margin-top: 18px;
    margin-bottom: 36px;
    margin-left: 22px;

    @media (max-width: 1024px) {
        margin-left: 0;
        margin-bottom: 0;
    }
`

const Copyright = styled.div`
    padding: 32px 22px 32px 22px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p{
        color: #ACB5BD;
        font-weight: 300;
        font-size: clamp(14px, 2.08vw, 16px);
        line-height: 160%;
    }

    ul{
        display: flex;
        gap: clamp(12px, 6.25vw, 64px);

        @media (max-width: 540px) {
            flex-wrap: wrap;
            gap: 12px;
        }

        a{
            color: #ACB5BD;
            font-weight: 300;
            font-size: clamp(14px, 2.08vw, 16px);
            line-height: 150%;
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

    @media (max-width: 1024px) {
        gap: 24px;
        align-items: flex-start;
        flex-direction: column-reverse;
    }

    @media (max-width: 540px){
        gap: 18px;
        padding: 32px 0;
    }
`