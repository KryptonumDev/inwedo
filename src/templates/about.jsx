import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/hero/about"
import TwoColumnFlex from "../components/two-column/two-column-about"
import OurValues from "../components/our-values"
import CallToAction from "../components/cta"
import TestomontialsAnimated from "../components/testomontials-animated"
import SuccessStories from "../components/success-stories"

const AboutPage = ({ data: { allWpPage } }) => {
  let { about } = allWpPage.nodes[0]
  return (
    <main>
      <Hero data={about.hero} />
      <TwoColumnFlex data={about.twoColumnFlex} />
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
    query AboutPageQuery($id: String!) {
        allWpPage(filter: {id: {eq: $id}}) {
            nodes {
                about {
                    hero {
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
                       publicUrl
                       sourceUrl
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
                       publicUrl
                       sourceUrl
                     }
                   }
                }
            }
        }
    }
`