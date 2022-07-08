import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/hero/services-sub"
import OneColumnText from "../components/one-column-text"
import TestomontialDivider from "../components/testomontial-divider-logo"
import WorkshopSteps from "../components/workshop-steps"
import CallToAction from "../components/cta"
import TwoColumnFlex from "../components/two-column/two-column-workshop"
import RemoteWorkshop from "../components/remote-workshop"
import WorkshopBenefits from "../components/workshop-benefits"
import SuccessStories from "../components/success-stories"
import FAQ from "../components/faq"
import Seo from "../components/seo"

const DiscoveryWorkshopPage = ({ data: { allWpPage, alternates }, location }) => {
  let { discoveryWorkshop, language, seo } = allWpPage.nodes[0]
  return (
    <main id='main'>
      <Seo data={seo} lang={language.slug} alternates={alternates} location={location}  type='Services'/>
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
            seo {
              title
              fullHead
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
                      gatsbyImageData(placeholder: BLURRED, quality: 80)
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
                      gatsbyImageData(placeholder: BLURRED, quality: 80)
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
                        gatsbyImageData(placeholder: BLURRED, quality: 80)
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
                        gatsbyImageData(placeholder: BLURRED, quality: 80)
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
                        gatsbyImageData(placeholder: BLURRED, quality: 80)
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
                        gatsbyImageData(placeholder: BLURRED, quality: 80)
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
                          gatsbyImageData(placeholder: BLURRED, quality: 80)
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
                          gatsbyImageData(placeholder: BLURRED, quality: 80)
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
                        gatsbyImageData(placeholder: BLURRED, quality: 80)
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
                          gatsbyImageData(placeholder: BLURRED, quality: 80)
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


