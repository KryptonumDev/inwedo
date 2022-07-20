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
import parse from 'html-react-parser'
import Analytics from './../analytics/product-development'

const ProductDevelopmentPage = ({ data: { allWpPage, alternates }, location }) => {
  let { productDevelopment, language, seo, scryptInjection } = allWpPage.nodes[0]
  let script = parse(scryptInjection.code ? scryptInjection.code : '')
  return (
    <main id='main'>
      {script}
      <Seo data={seo} lang={language.slug} alternates={alternates} location={location} type='Services' />
      <Hero data={productDevelopment.heroProductDevelop} analytics={Analytics.hero} location={location.pathname} />
      <TwoColumnFlex data={productDevelopment.twoColumnFlexProductDevelopment} />
      <DevelopmentProcess data={productDevelopment.developmentProcess} />
      <CallToAction data={productDevelopment.callToActionProductDevelopment} analytics={Analytics.cta.first} location={location.pathname}/>
      <RelatedServices data={productDevelopment.relatedServicesProductDevelopment} analytics={Analytics.related} />
      <SuccessStories data={productDevelopment.successStoriesProductDevelopment} analytics={Analytics.successStories} location={location.pathname}/>
      <TwoColumnFlexWorkshop reverse={true} data={productDevelopment.twoColumnFlexProductDevelopmentSecond} />
      <TestomontialDivider data={productDevelopment.testomontialDividerProductDevelopment} />
      <ProcessOptimisation data={productDevelopment.processOptimisation} />
      <CallToAction data={productDevelopment.callToActionProductDevelopmentSecond} analytics={Analytics.cta.second} location={location.pathname}/>
      <SuccessStories data={productDevelopment.successStoriesProductDevelopmentSecond} analytics={Analytics.successStories} location={location.pathname}/>
      <CallToAction data={productDevelopment.callToActionProductDevelopmentThird} analytics={Analytics.cta.third} location={location.pathname}/>
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
        scryptInjection {
          code
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


