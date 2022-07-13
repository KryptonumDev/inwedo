import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/hero/services-sub"
import TwoColumnFlex from "../components/two-column/two-column-list"
import DevelopmentProcess from "../components/development-process"
import CallToAction from "../components/cta"
import RelatedServices from "../components/related-services"
import TwoColumnFlexWorkshop from "../components/two-column/two-column-workshop"
import SuccessStories from "../components/success-stories"
import TestomontialDivider from "../components/testomontial-divider-logo"
import FAQ from "../components/faq"
import ProcessOptimisation from "../components/process-optimisation"
import Seo from "../components/seo"

const ProductDevelopmentPage = ({ data: { allWpPage, alternates }, location }) => {
  let { productDevelopment, language, seo } = allWpPage.nodes[0]
  return (
    <main id='main'>
      <Seo data={seo} lang={language.slug} alternates={alternates} location={location} type='Services' />
      <Hero data={productDevelopment.heroProductDevelop} />
      <TwoColumnFlex data={productDevelopment.twoColumnFlexProductDevelopment} />
      <DevelopmentProcess data={productDevelopment.developmentProcess} />
      <CallToAction data={productDevelopment.callToActionProductDevelopment} />
      <RelatedServices data={productDevelopment.relatedServicesProductDevelopment} />
      <SuccessStories data={productDevelopment.successStoriesProductDevelopment} />
      <TwoColumnFlexWorkshop reverse={true} data={productDevelopment.twoColumnFlexProductDevelopmentSecond} />
      <TestomontialDivider data={productDevelopment.testomontialDividerProductDevelopment} />
      <ProcessOptimisation data={productDevelopment.processOptimisation} />
      <CallToAction data={productDevelopment.callToActionProductDevelopmentSecond} />
      <SuccessStories data={productDevelopment.successStoriesProductDevelopmentSecond} />
      <CallToAction data={productDevelopment.callToActionProductDevelopmentThird} />
      <FAQ data={productDevelopment.faqProductDevelopment} />
    </main>
  )
}

export default ProductDevelopmentPage


export const query = graphql`
query ProductDevelopmentPageQuery($id: String!, $templateName: String!) {
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
          metaDesc
          opengraphSiteName
          opengraphImage {
            publicUrl
          }
        }
        productDevelopment {
            heroProductDevelop {
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
            twoColumnFlexProductDevelopment{
              sectionTitle
              subTitle
              text
              list
            }
            developmentProcess{
                sectionTitle
                processSteps{
                    stepTitle
                    stepIcon{
                        altText
                        localFile {
                          publicURL
                        }
                    }
                }
            }
            callToActionProductDevelopment {
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
            callToActionProductDevelopmentSecond {
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
            callToActionProductDevelopmentThird {
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
            relatedServicesProductDevelopment {
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
            successStoriesProductDevelopment {
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
            successStoriesProductDevelopmentSecond {
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
            twoColumnFlexProductDevelopmentSecond {
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
            testomontialDividerProductDevelopment{
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
            faqProductDevelopment {
              title
              faqElement {
                answer
                question
              }
            }
            processOptimisation{
              sectionTitle
              boldText
              plainText : plainTextUnderTitle
              optimisationRows{
                rowItems{
                  title
                  optimisationIcon{
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
  }
  
`


