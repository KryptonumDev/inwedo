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

const IndexPage = ({ data: { allWpPage, alternates }, location }) => {
  let { homepage, language, seo } = allWpPage.nodes[0]
  
  return (
    <main>
      <Seo data={seo} lang={language.slug} alternates={alternates} location={location} type='Homepage'/>
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
        language {
          slug
          name
        }
        seo {
          title
          fullHead
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
                      gatsbyImageData(quality: 80)
                    }
                  }
                }
                imageRightTop{
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(quality: 80)
                    }
                  }
                }
                imageRightBottom{
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(quality: 80)
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
                      gatsbyImageData(quality: 80)
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
                      gatsbyImageData(quality: 80)
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
                      gatsbyImageData(quality: 80)
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
                    gatsbyImageData(quality: 80)
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
                      childImageSharp {
                        gatsbyImageData(quality: 80)
                      }
                    }
                  }
                }
                firmLogo {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(quality: 80)
                    }
                  }
                }
                imgRight {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(quality: 80)
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
                    gatsbyImageData(quality: 80)
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
                      gatsbyImageData(quality: 80)
                    }
                  }
                }
                rightBottomImage {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(quality: 80)
                    }
                  }
                }
                leftTopImage {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(quality: 80)
                    }
                  }
                }
                leftBottomImage {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(quality: 80)
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
                        gatsbyImageData(quality: 80)
                      }
                    }
                  }
                }
                testomontialText
                companyLogo {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(quality: 80)
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
                localFile{
                  publicURL
                }
              }
              image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(quality: 80)
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