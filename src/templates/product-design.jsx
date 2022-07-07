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

const ProductDesignPage = ({ data: { allWpPage, alternates }, location }) => {
  let { productDesign, language, seo } = allWpPage.nodes[0]
  return (
    <main>
      <Seo data={seo} lang={language.slug} alternates={alternates} location={location} type='Services' />
      <Hero data={productDesign.heroProductDesign} />
      <DesignProcess data={productDesign.designProcess} />
      <TestomontialDivider data={productDesign.testomontialDividerProductDesign} />
      <CallToAction data={productDesign.callToActionProductDesign} />
      <TwoColumnFlex data={productDesign.twoColumnFlexProductDesign} />
      <DesignBenefits data={productDesign.designBenefits} />
      <TwoColumnFlexList data={productDesign.twoColumnFlexProductDesignSecond} />
      <TechStack data={productDesign.techStackProductDesign} />
      <SuccessStories data={productDesign.successStoriesProductDesign} />
      <DesignProcessAlt data={productDesign.designProcessSecond} />
      <CallToAction data={productDesign.callToActionProductDesignSecond} />
      <DesignBenefitsAlt data={productDesign.designBenefitsAlt} />
      <TwoColumnFlex reverse={true} data={productDesign.twoColumnFlexProductDesignThird} />
      <DesignBenefits data={productDesign.designBenefitsSecond} />
      <CallToAction data={productDesign.callToActionProductDesignThird} />
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
        seo {
          title
          fullHead
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
                        childImageSharp {
                            gatsbyImageData
                        }
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
                            gatsbyImageData
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
                    gatsbyImageData
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
                    gatsbyImageData
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
                    gatsbyImageData
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
                          childImageSharp {
                            gatsbyImageData
                          }
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
                            childImageSharp {
                                gatsbyImageData
                            }
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
            designProcessSecond {
                sectionTitle
                boldText
                plainText
                imageUnderTextPart{
                    altText
                    localFile {
                        childImageSharp {
                            gatsbyImageData
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
                            childImageSharp {
                                gatsbyImageData
                            }
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
                    gatsbyImageData
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
                          childImageSharp {
                            gatsbyImageData
                          }
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
                    gatsbyImageData
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
                          childImageSharp {
                            gatsbyImageData
                          }
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
                    gatsbyImageData
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


