import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/hero/services-sub"
import TwoColumnFlex from "../components/two-column/two-column-about"
import ReasonsToUse from "../components/technologyReason"
import WhyBestChoice from "../components/why-best-choice"
import CallToAction from "../components/cta"
import TwoColumnFlexWorkshop from "../components/two-column/two-column-workshop"
import SuccessStories from "../components/success-stories"
import FAQ from "../components/faq"
import TechStack from "../components/tech-stack"
import Seo from "../components/seo"

const TechnologyPage = ({ data: { allWpTechnology, alternates }, location }) => {
  let { technology, language, seo } = allWpTechnology.nodes[0]

  return (
    <main id='main'>
      <Seo data={seo} lang={language.slug} alternates={alternates} location={location} type='technology' template='Technology' currTemplate={technology.templateName} />
      <Hero data={technology.heroTechnology} />
      <TwoColumnFlex technology={true} data={technology.twoColumnFlexTechnologySecond} />
      <ReasonsToUse data={technology.reasonsToUse} />
      <WhyBestChoice data={technology.whyBestChoice} />
      <CallToAction data={technology.callToActionTechnology} />
      <TwoColumnFlexWorkshop size={'32px'} reverse={true} data={technology.twoColumnFlexTechnology} />
      <CallToAction data={technology.callToActionTechnologySecond} />
      <SuccessStories data={technology.successStoriesTechnology} />
      <CallToAction data={technology.callToActionTechnologyThird} />
      <TechStack data={technology.techStackTechnology} />
      <FAQ data={technology.faqTechnology} />
    </main>
  )
}

export default TechnologyPage


export const query = graphql`
query TechonologyPageQuery($id: String!) {
    alternates : allWpTechnology{
      nodes{
        id
        language{
          slug
          locale
        }
        page : technology{
          url : currentPageUrl
          template : templateName
        }
      }
    }
    allWpTechnology(filter: {id: {eq: $id}}) {
      nodes {
        language {
          slug
          name
        }
        seo {
          title
          fullHead
        }
        technology{
            currentPageUrl
            templateName
            heroTechnology {
                pageTitle
                text
                button {
                    name
                    url
                }
                icon {
                altText
                localFile {
                    childImageSharp {
                        gatsbyImageData(placeholder: BLURRED, quality: 80)
                    }
                }
              }
            }
            twoColumnFlexTechnologySecond {
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
                    gatsbyImageData(placeholder: BLURRED, quality: 80)
                  }
                }
              }
            }
            reasonsToUse{
                sectionTitle
                reasons{
                    reasonTitle
                    reasonIcon{
                        altText
                        localFile {
                          childImageSharp {
                            gatsbyImageData(placeholder: BLURRED, quality: 80)
                          }
                        }
                    }
                }
            }
            whyBestChoice{
                sectionTitle
                subTitle
                text
                imageUnderTextPart{
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(placeholder: BLURRED, quality: 80)
                      }
                    }
                }
                listOnRightSide{
                    leftItems{
                        title
                        text
                    }
                    rightItems{
                        title
                        text
                    }
                }
            }
            callToActionTechnology {
              typeOfCta
              title
              text
              buttonText
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
                    gatsbyImageData(placeholder: BLURRED, quality: 80)
                  }
                }
              }
            }
            callToActionTechnologySecond {
              typeOfCta
              title
              text
              buttonText
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
                    gatsbyImageData(placeholder: BLURRED, quality: 80)
                  }
                }
              }
            }
            callToActionTechnologyThird {
              typeOfCta
              title
              text
              buttonText
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
                    gatsbyImageData(placeholder: BLURRED, quality: 80)
                  }
                }
              }
            }
            twoColumnFlexTechnology {
              sectionTitle
              text
              teamMembers {
                memberTitle
                memberText
                memberIcon {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED, quality: 80)
                    }
                  }
                }
              }
              image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, quality: 80)
                  }
                }
              }
            }
            successStoriesTechnology{
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
                      gatsbyImageData(placeholder: BLURRED, quality: 80)
                    }
                  }
                }
                caseLogo {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED, quality: 80)
                    }
                  }
                }
              }
            }
            faqTechnology {
              title
              faqElement {
                answer
                question
              }
            }
            techStackTechnology{
                sectionTitle
                technologies{
                    technologieUrl
                    techologieIcon{
                        altText
                        localFile {
                            childImageSharp {
                                gatsbyImageData(placeholder: BLURRED, quality: 80)
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


