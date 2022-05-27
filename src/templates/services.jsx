import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/hero/services"
import DevelopmentCards from "../components/development-cards"
import CallToAction from "../components/cta"
import TwoColumnFlex from "../components/two-column/two-column-services"
import Testomontials from "../components/testomontials-slider"

const ServicesPage = ({ data: { allWpPage } }) => {
  let { services } = allWpPage.nodes[0]
  debugger
  return (
    <main>
      <Hero data={services.heroServices} />
      <DevelopmentCards data={services.developmentCards} />
      <CallToAction data={services.callToActionServices} />
      <DevelopmentCards data={services.developmentCardsSecond} />
      <CallToAction data={services.callToActionServicesCopy} />
      <TwoColumnFlex data={services.twoColumnFlexServices} />
      <Testomontials data={services.testomontialsServices} />
      <TwoColumnFlex data={services.twoColumnFlexServicesSecond} />
    </main>
  )
}

export default ServicesPage

export const query = graphql`
query ServicesPageQuery($id: String!) {
    allWpPage(filter: {id: {eq: $id}}) {
      nodes {
        services {
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
              publicUrl
              sourceUrl
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
              publicUrl
              sourceUrl
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


