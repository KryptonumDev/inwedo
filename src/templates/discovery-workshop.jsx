import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/hero/services-sub"
import OneColumnText from "../components/one-column-text"
import TestomontialDivider from "../components/testomontial-divider"
import WorkshopSteps from "../components/workshop-steps"
import CallToAction from "../components/cta"
import TwoColumnFlex from "../components/two-column/two-column-workshop"
import RemoteWorkshop from "../components/remote-workshop"
import WorkshopBenefits from "../components/workshop-benefits"
import SuccessStories from "../components/success-stories"
import FAQ from "../components/faq"
import Seo from "../components/seo"

const DiscoveryWorkshopPage = ({ data: { allWpPage, alternates }, location }) => {
  let { discoveryWorkshop, language } = allWpPage.nodes[0]
  return (
    <main>
      <Seo lang={language.slug} alternates={alternates} location={location} />
      <Hero data={discoveryWorkshop.heroWorkshop} />
      <OneColumnText data={discoveryWorkshop.oneColumnTextPart} />
      <TestomontialDivider data={discoveryWorkshop.testomontialDividerWorkshop} />
      <WorkshopSteps data={discoveryWorkshop.steps} />
      <CallToAction data={discoveryWorkshop.callToActionWorkshop} />
      <WorkshopSteps data={discoveryWorkshop.stepsSecond} />
      <TwoColumnFlex reverse={true} data={discoveryWorkshop.twoColumnFlexWorkshop} />
      <CallToAction data={discoveryWorkshop.callToActionWorkshopSecond} />
      <RemoteWorkshop data={discoveryWorkshop.remoteWorkshop} />
      <WorkshopBenefits data={discoveryWorkshop.workshopBenefits} />
      <SuccessStories data={discoveryWorkshop.successStoriesWorkshop} />
      <FAQ data={discoveryWorkshop.faqWorkshop} />
    </main>
  )
}

export default DiscoveryWorkshopPage

export const query = graphql`
query WorkshopPageQuery($id: String!, $templateName: String!) {
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
            discoveryWorkshop {
              heroWorkshop {
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
              oneColumnTextPart {
                sectionTitle
                subTitle
                text
                boldText
              }
              testomontialDividerWorkshop {
                testomontialText
                personName
                personPosition
                companyLogo {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
                steps {
                  stepNumber
                  stepTitle
                  stepText
                  innerSteps {
                    title
                    text
                  }
                  informPlate
                  imageSide
                  stepImage {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                }
                callToActionWorkshop {
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
                        gatsbyImageData
                      }
                    }
                  }
                }
                stepsSecond {
                  stepNumber
                  stepTitle
                  stepText
                  innerSteps {
                    title
                    text
                  }
                  informPlate
                  imageSide
                  stepImage {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                }
                twoColumnFlexWorkshop {
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
                callToActionWorkshopSecond {
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
                        gatsbyImageData
                      }
                    }
                  }
                }
                remoteWorkshop {
                  sectionTitle
                  subTitle
                  textUnderTitles
                  cards {
                    cardText
                    cardIcon {
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
                  }
                  toolsTitle
                  tools {
                    toolIcon {
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
                  }
                }
                workshopBenefits {
                  sectionTitle
                  text
                  image {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                  benefits {
                    benefitTitle
                    benfitText
                    benefitIcon {
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
                  }
                }
                successStoriesWorkshop {
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
                faqWorkshop {
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


