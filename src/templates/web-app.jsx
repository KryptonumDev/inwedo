import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/hero/services-sub"
import TwoColumnFlex from "../components/two-column/two-column-list"
import TestomontialDivider from "../components/testomontial-divider"
import Technologies from "../components/technologies"
import CallToAction from "../components/cta"
import SuccessStories from "../components/success-stories"
import DevelopmentTypes from "../components/development-types"
import FAQ from "../components/faq"

const WebAppPage = ({ data: { allWpPage } }) => {
    let { webApp } = allWpPage.nodes[0]
    return (
        <main>
            <Hero data={webApp.heroWebApp} />
            <TwoColumnFlex data={webApp.twoColumnFlexWebApp} />
            <TestomontialDivider data={webApp.testomontialDividerWebApp} />
            <Technologies data={webApp.technologies} />
            <CallToAction data={webApp.callToActionWebApp} />
            <SuccessStories data={webApp.successStoriesWebApp} />
            <DevelopmentTypes data={webApp.typesOfDevelopment}/>
            <CallToAction data={webApp.callToActionWebAppSecond} />
            <FAQ data={webApp.faqWebApp}/>
        </main>
    )
}

export default WebAppPage


export const query = graphql`
query WebAppPageQuery($id: String!) {
    allWpPage(filter: {id: {eq: $id}}) {
      nodes {
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
                childImageSharp {
                  gatsbyImageData
                }
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
                  gatsbyImageData
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
                    childImageSharp {
                      gatsbyImageData
                    }
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
                      childImageSharp {
                        gatsbyImageData
                      }
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


