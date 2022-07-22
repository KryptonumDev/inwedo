import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/hero/about"
import TwoColumnFlex from "../components/two-column/two-column-about"
import OurValues from "../components/our-values"
import CallToAction from "../components/cta"
import TestomontialsAnimated from "../components/testomontials-animated"
import SuccessStories from "../components/success-stories"
import Seo from "../components/seo"
import parse from 'html-react-parser'
import Analytics from './../analytics/about-us'

const AboutPage = ({ data: { allWpPage, alternates }, location }) => {
  let { about, language, seo, scryptInjection } = allWpPage.nodes[0]
  let script = parse(scryptInjection.code ? scryptInjection.code : '')
  return (
    <main id='main'>
      {script}
      <Seo data={seo} lang={language.slug} alternates={alternates} location={location} type='About' />
      <Hero data={about.heroAbout} />
      <TwoColumnFlex reverse={true} data={about.twoColumnFlex} analytics={Analytics.twoColumn} location={location.pathname} />
      <OurValues data={about.ourValues} />
      <CallToAction data={about.callToActionAbout} analytics={Analytics.cta.first} location={location.pathname} />
      <TestomontialsAnimated data={about.testomontialsAnimated} />
      <SuccessStories data={about.successStories} analytics={Analytics.successStories} location={location.pathname} />
      <TwoColumnFlex data={about.twoColumnFlexSecond} analytics={Analytics.twoColumn} location={location.pathname} />
      <CallToAction data={about.callToActionAboutSecond} analytics={Analytics.cta.second} location={location.pathname} />
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
              scryptInjection {
                code
              }
              language {
                slug
                name
              }
              seo {
                title
                metaDesc
                opengraphSiteName
                opengraphImage {
                  publicUrl
                }
              }
                about {
                    heroAbout {
                    text
                    pageTitle
                    background {
                        altText
                        localFile {
                            childImageSharp {
                                gatsbyImageData(placeholder: BLURRED, quality: 95)
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
                           gatsbyImageData(placeholder: BLURRED, quality: 95)
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
                           publicURL
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
                           gatsbyImageData(placeholder: BLURRED, quality: 95)
                         }
                       }
                     }
                   }
                   testomontialsAnimated {
                     text
                     seectionTitle
                     card{
                       cardLink
                       cardImage{
                         altText
                         localFile {
                           publicURL
                         }
                       }
                     }
                     testomontialsFirstRow {
                       authorName
                       authorPosition
                       testomontial
                       autorImg {
                         altText
                         localFile {
                           childImageSharp {
                             gatsbyImageData(placeholder: BLURRED, quality: 95)
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
                             gatsbyImageData(placeholder: BLURRED, quality: 95)
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
                             gatsbyImageData(placeholder: BLURRED, quality: 95)
                           }
                         }
                       }
                       caseLogo {
                         altText
                         localFile {
                           publicURL
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
                           gatsbyImageData(placeholder: BLURRED, quality: 95)
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
                           gatsbyImageData(placeholder: BLURRED, quality: 95)
                         }
                       }
                     }
                   }
                }
            }
        }
    }
`