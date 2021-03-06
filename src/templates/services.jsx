import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/hero/services"
import DevelopmentCards from "../components/development-cards"
import CallToAction from "../components/cta"
import TwoColumnFlex from "../components/two-column/two-column-services"
import Testomontials from "../components/testomontials-slider"
import Seo from "../components/seo"
import parse from 'html-react-parser'
import styled from "styled-components"
import Analytics from './../analytics/services'

const ServicesPage = ({ data: { allWpPage, alternates }, location }) => {
  let { servicesPage, language, seo, scryptInjection } = allWpPage.nodes[0]
  let script = parse(scryptInjection.code ? scryptInjection.code : '')
  return (
    <main id='main'>
      {script}
      <Seo data={seo} lang={language.slug} alternates={alternates} location={location} type='Services' />
      <Hero data={servicesPage.heroServices} analytics={Analytics.hero} location={location.pathname} />
      <Card aria-label='link to clatch review' target='_blank' rel="noopener noreferer" href={servicesPage.card.url}>
        <img alt={servicesPage.card.image.altText} src={servicesPage.card.image.localFile.publicURL} />
      </Card>
      <DevelopmentCards data={servicesPage.developmentCards} analytics={Analytics.devCards} location={location.pathname} />
      <CallToAction data={servicesPage.callToActionServices} analytics={Analytics.cta.first} location={location.pathname} />
      <DevelopmentCards data={servicesPage.developmentCardsSecond} analytics={Analytics.devCards} location={location.pathname} />
      <CallToAction data={servicesPage.callToActionServicesCopy} analytics={Analytics.cta.second} location={location.pathname} />
      <TwoColumnFlex data={servicesPage.twoColumnFlexServices} analytics={Analytics.twoColumn} />
      <Testomontials data={servicesPage.testomontialsServices} />
      <TwoColumnFlex data={servicesPage.twoColumnFlexServicesSecond} analytics={Analytics.twoColumn} />
    </main>
  )
}

export default ServicesPage

const Card = styled.a`
  position: fixed;
  right: -120px;
  top: 120px;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: var(--color-white);
  box-shadow: var(--shadow);
  z-index: 998;
  transition: right .3s cubic-bezier(0.39, 0.575, 0.565, 1); 
  cursor: pointer;

  &:hover{
    right: -16px;
  }
`

export const query = graphql`
query ServicesPageQuery($id: String!, $templateName: String!) {
  alternates : allWpPage(filter: {template: {templateName: {eq: $templateName}}}) {
    nodes {
      language {
        slug
        name
      }
      template {
        templateName
      }
    }
  }
    allWpPage(filter: {id: {eq: $id}}) {
      nodes {
        language {
          slug
          name
        }
        scryptInjection {
          code
        }
        seo {
          title
          metaDesc
          opengraphSiteName
          opengraphImage {
            publicUrl
          }
        }
        servicesPage {
          heroServices {
            text
            pageTitle
            button {
              name
              url
            }
            image {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, quality: 95)
                }
              }
            }
          }
          card : cardCopy{
            url
            image{
              altText
              localFile{
                publicURL
              }
            }
          }
          developmentCards {
            twoColumn {
              title
              subTitle
              text
              button {
                name
                url
              }
              image {
                altText
                localFile {
                  publicURL
                }
              }
            }
            cards {
              cardTitle
              cardText
              button {
                name
                url
              }
              cardIcon {
                altText
                localFile {
                  publicURL
                }
              }
            }
            success{
                title
                storiesCase{
                    caseText
                    caseTitle
                    button{
                        name
                        url
                    }
                    previewImage{
                        altText
                        localFile {
                          childImageSharp {
                            gatsbyImageData(placeholder: BLURRED, quality: 95)
                          }
                        }
                    }
                    caseLogo{
                        altText
                        localFile {
                            childImageSharp {
                                gatsbyImageData(placeholder: BLURRED, quality: 95)
                            }
                        }
                    }
                }
            }
          }
          callToActionServices {
            typeOfCta
            title
            text
            form {
              submitButtonText
              inputPlaceholder
            }
            button {
              url
              name
            }
            downloadFile {
              localFile{
                publicURL
              }
            }
          }
          developmentCardsSecond {
            twoColumn {
              title
              subTitle
              text
              button {
                name
                url
              }
              image {
                altText
                localFile {
                  publicURL
                }
              }
            }
            cards {
              cardTitle
              cardText
              button {
                name
                url
              }
              cardIcon {
                altText
                localFile {
                  publicURL
                }
              }
            }
            success{
                title
                storiesCase{
                    caseText
                    caseTitle
                    button{
                        name
                        url
                    }
                    previewImage{
                        altText
                        localFile {
                          childImageSharp {
                            gatsbyImageData(placeholder: BLURRED, quality: 95)
                          }
                        }
                    }
                    caseLogo{
                        altText
                        localFile {
                            childImageSharp {
                                gatsbyImageData(placeholder: BLURRED, quality: 95)
                            }
                        }
                    }
                }
            }
          }
          callToActionServicesCopy {
            typeOfCta
            title
            text
            form {
              submitButtonText
              inputPlaceholder
            }
            button {
              url
              name
            }
            downloadFile {
              localFile{
                publicURL
              }
            }
            image {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, quality: 95)
                }
              }
            }
          }
          twoColumnFlexServices {
            title
            subTitle
            text
            button {
              name
              url
            }
            image {
              altText
              localFile {
                publicURL
              }
            }
          }
          testomontialsServices {
            title
            text
            testomontialsItem {
              author {
                authorName
                authorPosition
                userIconPng {
                  altText
                  localFile {
                    publicURL
                  }
                }
              }
              testomontialText
              companyLogo {
                altText
                localFile {
                  publicURL
                }
              }
            }
          }
          twoColumnFlexServicesSecond {
            title
            subTitle
            text
            button {
              name
              url
            }
            image {
              altText
              localFile {
                publicURL
              }
            }
          }
        }
      }
    }
  }
  
`


