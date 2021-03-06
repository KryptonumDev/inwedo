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
import parse from 'html-react-parser'
import Analytics from './../analytics/team-extensions'

const TeamExtensionsPage = ({ data: { allWpPage, alternates }, location }) => {
  let { teamExtensionsPage, language, seo, scryptInjection } = allWpPage.nodes[0]
  let script = parse(scryptInjection.code ? scryptInjection.code : '')
  return (
    <main id='main'>
    {script}
      <Seo data={seo} lang={language.slug} alternates={alternates} location={location} type='Services' />
      <Hero data={teamExtensionsPage.heroTeamExtensions} analytics={Analytics.hero} location={location.pathname} />
      <TwoColumnFlex data={teamExtensionsPage.twoColumnFlexTeamExtensions} />
      <TechStack data={teamExtensionsPage.techStackTeamExtensions} analytics={Analytics.technologies}/>
      <TwoColumnFlexSecond descReverse={true} data={teamExtensionsPage.twoColumnFlexTeamExtensionsSecond} />
      <BenefitsGrid data={teamExtensionsPage.benefitsGridTeamExtensions} />
      <CallToAction data={teamExtensionsPage.callToActionTeamExtensions} analytics={Analytics.cta.first} location={location.pathname}/>
      <WorkshopBenefits data={teamExtensionsPage.workshopBenefitsTeamExtensions} />
      <Testomontials data={teamExtensionsPage.testomontialsTeamExtensions} analytics={Analytics.cta.second} location={location.pathname}/>
      <CallToAction data={teamExtensionsPage.callToActionTeamExtensionsSecond} />
      <RelatedServices data={teamExtensionsPage.relatedServicesTeamExtensions} analytics={Analytics.related}/>
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
        scryptInjection {
          code
        }
        seo {
          title
          metaDesc
          opengraphSiteName
          opengraphImage {
            publicUrl
          }
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
                  publicURL
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
                          publicURL
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
                    gatsbyImageData(placeholder: BLURRED, quality: 95)
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
                    publicURL
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
                    gatsbyImageData(placeholder: BLURRED, quality: 95)
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
                    gatsbyImageData(placeholder: BLURRED, quality: 95)
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
                    publicURL
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


