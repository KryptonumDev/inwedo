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
import parse from 'html-react-parser'
import Analytics from './../analytics/discovery-workshop'

const DiscoveryWorkshopPage = ({ data: { allWpPage, alternates }, location }) => {
  let { discoveryWorkshop, language, seo, scryptInjection } = allWpPage.nodes[0]
  let script = parse(scryptInjection.code ? scryptInjection.code : '')
  return (
    <main id='main'>
    {script}
      <Seo data={seo} lang={language.slug} alternates={alternates} location={location}  type='Services'/>
      <Hero data={discoveryWorkshop.heroWorkshop} analytics={Analytics.hero} location={location.pathname} />
      <OneColumnText data={discoveryWorkshop.oneColumnTextPart} />
      <TestomontialDivider data={discoveryWorkshop.testomontialDividerWorkshop} />
      <WorkshopSteps data={discoveryWorkshop.steps} />
      <CallToAction data={discoveryWorkshop.callToActionWorkshop} analytics={Analytics.cta.first} location={location.pathname}/>
      <WorkshopSteps data={discoveryWorkshop.stepsSecond} />
      <TwoColumnFlex reverse={true} data={discoveryWorkshop.twoColumnFlexWorkshop} />
      <CallToAction data={discoveryWorkshop.callToActionWorkshopSecond} analytics={Analytics.cta.second} location={location.pathname}/>
      <RemoteWorkshop data={discoveryWorkshop.remoteWorkshop} />
      <WorkshopBenefits data={discoveryWorkshop.workshopBenefits} />
      <SuccessStories data={discoveryWorkshop.successStoriesWorkshop} analytics={Analytics.successStories} location={location.pathname}/>
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
                    publicURL
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
                      gatsbyImageData(placeholder: BLURRED, quality: 95)
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
                        gatsbyImageData(placeholder: BLURRED, quality: 95)
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
                        gatsbyImageData(placeholder: BLURRED, quality: 95)
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
                        gatsbyImageData(placeholder: BLURRED, quality: 95)
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
                        publicURL
                      }
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
                        gatsbyImageData(placeholder: BLURRED, quality: 95)
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
                        publicURL
                      }
                    }
                  }
                  toolsTitle
                  tools {
                    toolIcon {
                      altText
                      localFile {
                        publicURL
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
                        gatsbyImageData(placeholder: BLURRED, quality: 95)
                      }
                    }
                  }
                  benefits {
                    benefitTitle
                    benfitText
                    benefitIcon {
                      altText
                      localFile {
                        publicURL
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
                          gatsbyImageData(placeholder: BLURRED, quality: 95)
                        }
                      }
                    }
                    caseLogo {
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData(placeholder: BLURRED, quality: 95)
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


