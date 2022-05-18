import * as React from "react"
import { graphql } from "gatsby"
import CaseStudyRepeater from "../components/case-study-repeater"
import Hero from "../components/hero/homepage"
import Services from "../components/services"
import CallToAction from "../components/cta"
import NumbersAndImages from "../components/numbers-and-image-grid"

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
              img {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
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
        }
    }
}
}
`