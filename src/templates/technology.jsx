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

const TechnologyPage = ({ data: { allWpTechnology } }) => {
    let { technology } = allWpTechnology.nodes[0]
    return (
        <main>
            <Hero data={technology.heroTechnology} />
            <TwoColumnFlex technology={true} data={technology.twoColumnFlexTechnologySecond} />
            <ReasonsToUse data={technology.reasonsToUse} />
            <WhyBestChoice data={technology.whyBestChoice} />
            <CallToAction data={technology.callToActionTechnology} />
            <TwoColumnFlexWorkshop reverse={true} data={technology.twoColumnFlexTechnology} />
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
    allWpTechnology(filter: {id: {eq: $id}}) {
      nodes {
        technology{
            currentPageUrl
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
                        gatsbyImageData
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
                    gatsbyImageData
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
                            gatsbyImageData
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
                        gatsbyImageData
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
                      gatsbyImageData
                    }
                  }
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


