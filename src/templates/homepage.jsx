import * as React from "react"
import { graphql } from "gatsby"
import CaseStudyRepeater from "../components/case-study-repeater"
import Hero from "../components/hero/homepage"
import Services from "../components/services"
import CallToAction from "../components/cta"
import NumbersAndImages from "../components/numbers-and-image-grid"
import Testomontials from "../components/testomontials-slider"
import FAQ from "../components/faq"
import Seo from "../components/seo"
import parse from 'html-react-parser'
import Analytics from './../analytics/homepage'

const IndexPage = ({ data: { allWpPage, alternates }, location }) => {
  let { homepage, language, seo, scryptInjection } = allWpPage.nodes[0]
  let script = parse(scryptInjection.code ? scryptInjection.code : '')
  debugger
  return (
    <main id='main'>
      {script}
      <Seo data={seo} lang={language.slug} alternates={alternates} location={location} type='Homepage' />
      <Hero data={homepage.heroHome} analytics={Analytics.hero} location={location.pathname} />
      <Services data={homepage.services} analytics={Analytics} />
      <CallToAction data={homepage.callToAction} analytics={Analytics.cta.first} location={location.pathname} />
      <CaseStudyRepeater data={homepage.caseStudies} analytics={Analytics.caseStudies} location={location.pathname} />
      <CallToAction data={homepage.callToActionCopy} analytics={Analytics.cta.second} location={location.pathname} />
      <NumbersAndImages data={homepage.impactNumbersAndImgGrid} analytics={Analytics.numbers} location={location.pathname} />
      <Testomontials data={homepage.testomontials} />
      <CallToAction data={homepage.callToActionCopyCopy} analytics={Analytics.cta.third} location={location.pathname} />
      <FAQ data={homepage.faq} />
    </main>
  )
}

export default IndexPage

export const query = graphql`
  query HomePageQuery($id: String!, $templateName: String!){
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
        homepage {
            heroHome {
              title
              subTitle
              button {
                name
                url
              }
              imgGridH {
                imageLeft{
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED, quality: 95)
                    }
                  }
                }
                imageRightTop{
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED, quality: 95)
                    }
                  }
                }
                imageRightBottom{
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED, quality: 95)
                    }
                  }
                }
              }
            }
            services {
              card{
                url
                image{
                  altText
                  localFile{
                    publicURL
                  }
                }
              }
              clientsTitle
              clientsItems {
                logoClients {
                  altText
                  localFile {
                    publicURL
                  }
                }
              }
              sectionTitle
              sectionText
              items {
                title
                subTitle
                text
                button {
                  name
                  url
                }
                previewImg {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED, quality: 90)
                    }
                  }
                }
              }
            }
            callToAction {
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
            caseStudies {
              title
              text
              studiesCase {
                title
                text
                button {
                  url
                  name
                }
                techologies {
                  companyLogo {
                    altText
                    localFile {
                      publicURL
                    }
                  }
                }
                firmLogo {
                  altText
                  localFile {
                    publicURL
                  }
                }
                imgRight {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED, quality: 95)
                    }
                  }
                }
              }
            }
            callToActionCopy {
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
            impactNumbersAndImgGrid {
              textContent {
                title
                subTitle
                textContent
                button {
                  url
                  name
                }
              }
              numbersContent {
                number
                numberDescription
                addPlusSymbol
              }
              imgGrid {
                rightTopImage {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED, quality: 95)
                    }
                  }
                }
                rightBottomImage {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED, quality: 95)
                    }
                  }
                }
                leftTopImage {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED, quality: 95)
                    }
                  }
                }
                leftBottomImage {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED, quality: 95)
                    }
                  }
                }
              }
            }
            testomontials {
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
            callToActionCopyCopy {
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
            faq {
              title
              faqElement {
                answer
                question
              }
            }
        }
    }
}
}
`