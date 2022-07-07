import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/hero/about"
import TwoColumnFlex from "../components/two-column/two-column-about"
import OurValues from "../components/our-values"
import CallToAction from "../components/cta"
import TestomontialsAnimated from "../components/testomontials-animated"
import SuccessStories from "../components/success-stories"
import Seo from "../components/seo"

const AboutPage = ({ data: { allWpPage, alternates }, location }) => {
  let { about, language, seo } = allWpPage.nodes[0]
  return (
    <main>
      <Seo data={seo} lang={language.slug} alternates={alternates} location={location} type='About'/>
      <Hero data={about.heroAbout} />
      <TwoColumnFlex reverse={true} data={about.twoColumnFlex} />
      <OurValues data={about.ourValues} />
      <CallToAction data={about.callToActionAbout} />
      <TestomontialsAnimated data={about.testomontialsAnimated} />
      <SuccessStories data={about.successStories} />
      <TwoColumnFlex data={about.twoColumnFlexSecond} />
      <CallToAction data={about.callToActionAboutSecond} />
    </main>
  )
}

export default AboutPage

export const query = graphql`
    query AboutPageQuery($id: String!, $templateName: String!) {
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
              seo {
                title
                fullHead
              }
                about {
                    heroAbout {
                    text
                    pageTitle
                    background {
                        altText
                        localFile {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                   }
                   twoColumnFlex {
                     title
                     subTitle
                     text
                     button{
                       url
                       name
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
                   ourValues {
                     sectionTitle
                     values {
                       valueTitle
                       valueText
                       valueIcon {
                         altText
                         localFile {
                           childImageSharp {
                             gatsbyImageData
                           }
                         }
                       }
                     }
                   }
                   callToActionAbout {
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
                   testomontialsAnimated {
                     text
                     seectionTitle
                     testomontialsFirstRow {
                       authorName
                       authorPosition
                       testomontial
                       autorImg {
                         altText
                         localFile {
                           childImageSharp {
                             gatsbyImageData
                           }
                         }
                       }
                     }
                     testomontialsSecondRow {
                       authorName
                       authorPosition
                       testomontial
                       autorImg {
                         altText
                         localFile {
                           childImageSharp {
                             gatsbyImageData
                           }
                         }
                       }
                     }
                   }
                   successStories {
                     sectionTitle
                     success {
                       caseTitle
                       caseText
                       button {
                         url
                         name
                       }
                       previewImage {
                         altText
                         localFile {
                           childImageSharp {
                             gatsbyImageData
                           }
                         }
                       }
                       caseLogo {
                         altText
                         localFile {
                           childImageSharp {
                             gatsbyImageData
                           }
                         }
                       }
                     }
                   }
                   twoColumnFlexSecond {
                     title
                     subTitle
                     text
                     button{
                       url
                       name
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
                   callToActionAboutSecond {
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
                }
            }
        }
    }
`