import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/hero/services-sub"
import TwoColumnFlex from "../components/two-column/two-column-list"
import TechStack from "../components/tech-stack"
import TwoColumnFlexSecond from "../components/two-column/two-column-about"
import BenefitsGrid from "../components/benefits-grid"
import CallToAction from "../components/cta"
import WorkshopBenefits from "../components/workshop-benefits"
import Testomontials from "../components/testomontials-slider"
import RelatedServices from "../components/related-services"
import FAQ from "../components/faq"
import Seo from "../components/seo"

const TeamExtensionsPage = ({ data: { allWpPage, alternates }, location }) => {
  let { teamExtensionsPage, language, seo } = allWpPage.nodes[0]
  return (
    <main id='main'>
      <Seo data={seo} lang={language.slug} alternates={alternates} location={location} type='Services' />
      <Hero data={teamExtensionsPage.heroTeamExtensions} />
      <TwoColumnFlex data={teamExtensionsPage.twoColumnFlexTeamExtensions} />
      <TechStack data={teamExtensionsPage.techStackTeamExtensions} />
      <TwoColumnFlexSecond descReverse={true} data={teamExtensionsPage.twoColumnFlexTeamExtensionsSecond} />
      <BenefitsGrid data={teamExtensionsPage.benefitsGridTeamExtensions} />
      <CallToAction data={teamExtensionsPage.callToActionTeamExtensions} />
      <WorkshopBenefits data={teamExtensionsPage.workshopBenefitsTeamExtensions} />
      <Testomontials data={teamExtensionsPage.testomontialsTeamExtensions} />
      <CallToAction data={teamExtensionsPage.callToActionTeamExtensionsSecond} />
      <RelatedServices data={teamExtensionsPage.relatedServicesTeamExtensions} />
      <FAQ data={teamExtensionsPage.faqTeamExtensions} />
    </main>
  )
}

export default TeamExtensionsPage


export const query = graphql`
query TeamExtensionsPageQuery($id: String!, $templateName: String!) {
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
        language{
          slug
          locale
        }
        seo {
          title
          fullHead
        }
        teamExtensionsPage {
            heroTeamExtensions {
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
            twoColumnFlexTeamExtensions{
              sectionTitle
              subTitle
              text
              list
            }
            techStackTeamExtensions{
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
            twoColumnFlexTeamExtensionsSecond {
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
            benefitsGridTeamExtensions {
              benefits {
                benefitTitle
                benefitText
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
            callToActionTeamExtensions {
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
            workshopBenefitsTeamExtensions {
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
            testomontialsTeamExtensions {
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
                        gatsbyImageData(placeholder: BLURRED, quality: 80)
                      }
                    }
                  }
                }
                testomontialText
                companyLogo {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED, quality: 80)
                    }
                  }
                }
              }
            }
            callToActionTeamExtensionsSecond {
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
            relatedServicesTeamExtensions {
              sectionTitle
              services {
                servisTitle
                servisText
                button {
                  name
                  url
                }
                servisIcon {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED, quality: 80)
                    }
                  }
                }
              }
            }
            faqTeamExtensions {
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


