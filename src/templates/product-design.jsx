import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/hero/services-sub"
import DesignProcess from "../components/design-process"
import DesignProcessAlt from "../components/design-process-alt"
import CallToAction from "../components/cta"
import TestomontialDivider from "../components/testomontial-divider-logo"
import TwoColumnFlex from "../components/two-column/two-column-about"
import DesignBenefits from "../components/design-benefits"
import DesignBenefitsAlt from "../components/design-benefits-alt"
import TwoColumnFlexList from "../components/two-column/two-column-list"
import TechStack from "../components/tech-stack"
import SuccessStories from "../components/success-stories"
import FAQ from "../components/faq"
import Seo from "../components/seo"
import parse from 'html-react-parser'
import Analytics from './../analytics/product-design'

const ProductDesignPage = ({ data: { allWpPage, alternates }, location }) => {
  let { productDesign, language, seo, scryptInjection } = allWpPage.nodes[0]
  let script = parse(scryptInjection.code ? scryptInjection.code : '')
  return (
    <main id='main'>
      {script}
      <Seo data={seo} lang={language.slug} alternates={alternates} location={location} type='Services' />
      <Hero data={productDesign.heroProductDesign} analytics={Analytics.hero} location={location.pathname} />
      <DesignProcess data={productDesign.designProcess} />
      <TestomontialDivider data={productDesign.testomontialDividerProductDesign} />
      <CallToAction data={productDesign.callToActionProductDesign} analytics={Analytics.cta.first} location={location.pathname} />
      <TwoColumnFlex data={productDesign.twoColumnFlexProductDesign} />
      <DesignBenefits data={productDesign.designBenefits} />
      <TwoColumnFlexList data={productDesign.twoColumnFlexProductDesignSecond} />
      <TechStack data={productDesign.techStackProductDesign} analytics={Analytics.technologies}/>
      <SuccessStories data={productDesign.successStoriesProductDesign} analytics={Analytics.successStories} location={location.pathname} />
      <DesignProcessAlt data={productDesign.designProcessSecond} />
      <CallToAction data={productDesign.callToActionProductDesignSecond} analytics={Analytics.cta.second} location={location.pathname} />
      <DesignBenefitsAlt data={productDesign.designBenefitsAlt} />
      <TwoColumnFlex reverse={true} data={productDesign.twoColumnFlexProductDesignThird} />
      <DesignBenefits data={productDesign.designBenefitsSecond} />
      <CallToAction data={productDesign.callToActionProductDesignThird} analytics={Analytics.cta.third} location={location.pathname} />
      <FAQ data={productDesign.faqProductDesign} />
    </main>
  )
}

export default ProductDesignPage


export const query = graphql`
query ProductDesignPageQuery($id: String!, $templateName: String!) {
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
        productDesign {
            heroProductDesign {
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
            designProcess {
                sectionTitle
                boldText
                plainText
                imageUnderTextPart{
                    altText
                    localFile {
                        childImageSharp {
                            gatsbyImageData(placeholder: BLURRED, quality: 95)
                        }
                    }
                }
                listItems{
                    title
                    text
                }
            }
            testomontialDividerProductDesign{
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
            callToActionProductDesign {
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
            twoColumnFlexProductDesign {
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
            designBenefits{
                sectionTitle
                benefits{
                    benefitTitle
                    benefitText
                    benefitIcon{
                        altText
                        localFile {
                          publicURL
                        }
                    }
                }
            }
            twoColumnFlexProductDesignSecond{
              sectionTitle
              subTitle
              text
              list
            }
            techStackProductDesign{
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
            successStoriesProductDesign {
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
            designProcessSecond {
                sectionTitle
                boldText
                plainText
                imageUnderTextPart{
                    altText
                    localFile {
                        childImageSharp {
                            gatsbyImageData(placeholder: BLURRED, quality: 95)
                        }
                    }
                }
                listTitle
                listItems{
                    title
                    text
                    listIcon{
                        altText
                        localFile {
                          publicURL
                        }
                    }
                }
            }
            callToActionProductDesignSecond {
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
            designBenefitsAlt{
                sectionTitle
                text
                benefits{
                    benefitTitle
                    benefitText
                    benefitIcon{
                        altText
                        localFile {
                          publicURL
                        }
                    }
                }
            }
            twoColumnFlexProductDesignThird {
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
            designBenefitsSecond{
                sectionTitle
                benefits{
                    benefitTitle
                    benefitText
                    benefitIcon{
                        altText
                        localFile {
                          publicURL
                        }
                    }
                }
            }
            callToActionProductDesignThird{
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
            faqProductDesign {
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


