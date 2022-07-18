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

const ServicesPage = ({ data: { allWpPage, alternates }, location }) => {
  let { servicesPage, language, seo, scryptInjection } = allWpPage.nodes[0]
  let script = parse(scryptInjection.code ? scryptInjection.code : '')
  return (
    <main id='main'>
      {script}
      <Seo data={seo} lang={language.slug} alternates={alternates} location={location} type='Services' />
      <Hero data={servicesPage.heroServices} />
      <Card>
        <div class='clutch-widget' data-nofollow='true' data-url='https://widget.clutch.co' data-widget-type='2' data-height='45' data-clutchcompany-id='88412'></div>
      </Card>
      <DevelopmentCards data={servicesPage.developmentCards} />
      <CallToAction data={servicesPage.callToActionServices} />
      <DevelopmentCards data={servicesPage.developmentCardsSecond} />
      <CallToAction data={servicesPage.callToActionServicesCopy} />
      <TwoColumnFlex data={servicesPage.twoColumnFlexServices} />
      <Testomontials data={servicesPage.testomontialsServices} />
      <TwoColumnFlex data={servicesPage.twoColumnFlexServicesSecond} />
    </main>
  )
}

export default ServicesPage

const Card = styled.div`
  position: fixed;
  right: -100px;
  top: 120px;
  padding: 12px 16px;
  background-color: #fff;
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
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED, quality: 95)
                    }
                  }
                }
              }
              testomontialText
              companyLogo {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, quality: 95)
                  }
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


