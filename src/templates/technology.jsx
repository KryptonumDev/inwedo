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
import parse from 'html-react-parser'
import Analytics from './../analytics/technology'

const TechnologyPage = ({ data: { allWpTechnology, alternates }, location }) => {
  let { technology, language, seo, scryptInjection } = allWpTechnology.nodes[0]
  let script = parse(scryptInjection.code ? scryptInjection.code : '')

  return (
    <main id='main'>
      {script}
      <Seo data={seo} lang={language.slug} alternates={alternates} location={location} type='technology' template='Technology' currTemplate={technology.templateName} />
      <Hero data={technology.heroTechnology} analytics={Analytics.hero} location={location.pathname} />
      <TwoColumnFlex technology={true} data={technology.twoColumnFlexTechnologySecond} />
      <ReasonsToUse data={technology.reasonsToUse} />
      <WhyBestChoice data={technology.whyBestChoice} />
      <CallToAction data={technology.callToActionTechnology} analytics={Analytics.cta.first} location={location.pathname} />
      <TwoColumnFlexWorkshop size={'32px'} reverse={true} data={technology.twoColumnFlexTechnology} />
      <CallToAction data={technology.callToActionTechnologySecond} analytics={Analytics.cta.second} location={location.pathname} />
      <SuccessStories data={technology.successStoriesTechnology} analytics={Analytics.successStories} location={location.pathname} />
      <CallToAction data={technology.callToActionTechnologyThird} analytics={Analytics.cta.third} location={location.pathname} />
      <TechStack data={technology.techStackTechnology} analytics={Analytics.technologies} />
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
                  publicURL
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
                    gatsbyImageData(placeholder: BLURRED, quality: 95)
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
                          publicURL
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
                        gatsbyImageData(placeholder: BLURRED, quality: 95)
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
                    gatsbyImageData(placeholder: BLURRED, quality: 95)
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
                    gatsbyImageData(placeholder: BLURRED, quality: 95)
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
                    gatsbyImageData(placeholder: BLURRED, quality: 95)
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
                      gatsbyImageData(placeholder: BLURRED, quality: 95)
                    }
                  }
                }
                caseLogo {
                  altText
                  localFile {
                    publicURL
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
                          publicURL
                        }
                    }
                }
            }
        }
      }
    }
  }
  
`


