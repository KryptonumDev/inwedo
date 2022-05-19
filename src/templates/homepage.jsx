import * as React from "react"
import { graphql } from "gatsby"
import CaseStudyRepeater from "../components/case-study-repeater"
import Hero from "../components/hero/homepage"
import Services from "../components/services"
import CallToAction from "../components/cta"
import NumbersAndImages from "../components/numbers-and-image-grid"
import Testomontials from "../components/testomontials-slider"
import FAQ from "../components/faq"

const IndexPage = ({ data: { allWpPage } }) => {
  let { homepage } = allWpPage.nodes[0]
  return (
    <main>
      <Hero data={homepage.hero} />
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
  query HomePageQuery($id: String!){
    allWpPage(filter: {id: {eq: $id}}) {
      nodes {
        homepage {
            hero {
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
                      gatsbyImageData
                    }
                  }
                }
                imageRightTop{
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
                imageRightBottom{
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
            services {
              clientsTitle
              clientsItems {
                logoClients {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData
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
                }
                previewImg {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData
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
                publicUrl
                sourceUrl
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
                    sourceUrl
                  }
                }
                firmLogo {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
                imgRight {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData
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
                publicUrl
                sourceUrl
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
                      gatsbyImageData
                    }
                  }
                }
                rightBottomImage {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
                leftTopImage {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
                leftBottomImage {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData
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
                publicUrl
                sourceUrl
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