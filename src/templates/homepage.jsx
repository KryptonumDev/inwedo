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

const IndexPage = ({ data: { allWpPage, alternates }, location }) => {
  let { homepage, language, seo, scryptInjection } = allWpPage.nodes[0]
  let script = parse(scryptInjection.code ? scryptInjection.code : '')
  return (
    <main id='main'>
      {script}
      <Seo data={seo} lang={language.slug} alternates={alternates} location={location} type='Homepage' />
      <Hero data={homepage.heroHome} />
      <Services data={homepage.services} />
      <CallToAction data={homepage.callToAction} />
      <CaseStudyRepeater data={homepage.caseStudies} />
      <CallToAction data={homepage.callToActionCopy} />
      <NumbersAndImages data={homepage.impactNumbersAndImgGrid} />
      <Testomontials data={homepage.testomontials} />
      <CallToAction data={homepage.callToActionCopyCopy} />
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
                datalayerJson
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
                cardLink
                cardImage{
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED, quality: 90)
                    }
                  }
                }
              }
              clientsTitle
              clientsItems {
                logoClients {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED, quality: 95)
                    }
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
                  datalayerJson
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
                datalayerJson
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
                  datalayerJson
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
                datalayerJson
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
                  datalayerJson
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
                datalayerJson
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