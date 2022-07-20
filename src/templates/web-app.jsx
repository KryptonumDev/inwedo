import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/hero/services-sub"
import TwoColumnFlex from "../components/two-column/two-column-list"
import TestomontialDivider from "../components/testomontial-divider-logo"
import Technologies from "../components/technologies"
import CallToAction from "../components/cta"
import SuccessStories from "../components/success-stories"
import DevelopmentTypes from "../components/development-types"
import FAQ from "../components/faq"
import Seo from "../components/seo"
import parse from 'html-react-parser'
import Analytics from './../analytics/web-app'

const WebAppPage = ({ data: { allWpPage, alternates }, location }) => {
  let { webApp, language, seo, scryptInjection } = allWpPage.nodes[0]
  let script = parse(scryptInjection.code ? scryptInjection.code : '')
  return (
    <main id='main'>
      {script}
      <Seo data={seo} lang={language.slug} alternates={alternates} location={location} type='Services' />
      <Hero data={webApp.heroWebApp} analytics={Analytics.hero} location={location.pathname} />
      <TwoColumnFlex webApp={true} data={webApp.twoColumnFlexWebApp} />
      <TestomontialDivider data={webApp.testomontialDividerWebApp} />
      <Technologies data={webApp.technologies} analytics={Analytics.technologies} location={location.pathname} />
      <CallToAction data={webApp.callToActionWebApp} analytics={Analytics.cta.first} location={location.pathname}/>
      <SuccessStories data={webApp.successStoriesWebApp} analytics={Analytics.successStories} location={location.pathname}/>
      <DevelopmentTypes data={webApp.typesOfDevelopment} analytics={Analytics.developmentTypes}/>
      <CallToAction data={webApp.callToActionWebAppSecond} analytics={Analytics.cta.second} location={location.pathname}/>
      <FAQ data={webApp.faqWebApp} />
    </main>
  )
}

export default WebAppPage


export const query = graphql`
query WebAppPageQuery($id: String!, $templateName: String!) {
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
        }
        seo {
          title
          metaDesc
          opengraphSiteName
          opengraphImage {
            publicUrl
          }
        }
        scryptInjection {
          code
        }
        webApp {
          heroWebApp {
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
          twoColumnFlexWebApp {
            sectionTitle
            subTitle
            text
            list
          }
          testomontialDividerWebApp {
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
          technologies{
              sectionTitle
              text
              cards{
                cardTitle
                cardText
                button {
                  name
                  url
                }
                cardIcon {
                  altText
                  localFile {
                    publicURL
                  }
                }
              }
          }
          callToActionWebApp {
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
          successStoriesWebApp {
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
          typesOfDevelopment{
              sectionTitle
              text
              types{
                  typeTitle
                  typeText
                  button{
                      name
                      url
                  }
                  typeIcon{
                    altText
                    localFile {
                      publicURL
                    }
                  }
              }
          }
          callToActionWebAppSecond {
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
          faqWebApp {
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


