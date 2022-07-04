import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/hero/services"
import DevelopmentCards from "../components/development-cards"
import CallToAction from "../components/cta"
import TwoColumnFlex from "../components/two-column/two-column-services"
import Testomontials from "../components/testomontials-slider"
import Seo from "../components/seo"

const ServicesPage = ({ data: { allWpPage, alternates }, location }) => {
  let { servicesPage, language } = allWpPage.nodes[0]
  return (
    <main>
      <Seo lang={language.slug} alternates={alternates} location={location} />
      <Hero data={servicesPage.heroServices} />
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
                  gatsbyImageData
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
                  childImageSharp {
                    gatsbyImageData
                  }
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
                  childImageSharp {
                    gatsbyImageData
                  }
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
                            gatsbyImageData
                          }
                        }
                    }
                    caseLogo{
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
                  childImageSharp {
                    gatsbyImageData
                  }
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
                  childImageSharp {
                    gatsbyImageData
                  }
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
                            gatsbyImageData
                          }
                        }
                    }
                    caseLogo{
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
                  gatsbyImageData
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
                childImageSharp {
                  gatsbyImageData
                }
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
                      gatsbyImageData
                    }
                  }
                }
              }
              testomontialText
              companyLogo {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
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
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  }
  
`


