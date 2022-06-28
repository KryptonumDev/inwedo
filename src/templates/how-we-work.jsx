import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/hero/how-we-work"
import TwoColumnFlex from "../components/two-column/two-column-list"
import CardsWithTitle from "../components/cards-with-title"
import MiniFaq from "../components/mini-faq"
import TestomontialDivider from "../components/testomontial-divider"
import CallToAction from "../components/cta"
import OurFocuses from "../components/our-focuses"
import TwoColumnFlexImg from './../components/two-column/two-column-about'
import BenefitsGrid from "../components/benefits-grid"
import RelatedServices from "../components/related-services"
import Seo from "../components/seo"

const HowWeWorkPage = ({ data: { allWpPage, alternates }, location }) => {
  let { howWeWork, language } = allWpPage.nodes[0]
  return (
    <main>
      <Seo lang={language.slug} alternates={alternates} location={location} />
      <Hero data={howWeWork.heroHowWeWork} />
      <TwoColumnFlex data={howWeWork.twoColumnFlexHowWeWork} />
      <CardsWithTitle data={howWeWork.cardsWithLinks} />
      <MiniFaq data={howWeWork.miniFaq} />
      <TestomontialDivider data={howWeWork.testomontialDivider} />
      <CallToAction data={howWeWork.callToActionHowWeWork} />
      <OurFocuses data={howWeWork.ourFocuses} />
      <TestomontialDivider data={howWeWork.testomontialDividerSecond} />
      <CallToAction data={howWeWork.callToActionHowWeWorkSecond} />
      <TwoColumnFlexImg data={howWeWork.twoColumnFlexHowWeWorkImg} />
      <BenefitsGrid data={howWeWork.benefitsGrid} />
      <CallToAction data={howWeWork.callToActionHowWeWorkThird} />
      <RelatedServices data={howWeWork.relatedServices} />
      <CallToAction data={howWeWork.callToActionHowWeWorkFourth} />
    </main>
  )
}

export default HowWeWorkPage

export const query = graphql`
query HowWeWorkPageQuery($id: String!, $templateName: String!) {
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
            howWeWork {
                heroHowWeWork {
                  pageTitle
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
                twoColumnFlexHowWeWork {
                  sectionTitle
                  subTitle
                  text
                  list
                }
                cardsWithLinks {
                  sectionTitle
                  text
                  cards {
                    cardTitle
                    button {
                      url
                      name
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
                }
                miniFaq {
                  sectionTitle
                  text
                  questionsAndAnswers {
                    question
                    answer
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
                testomontialDivider {
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
                callToActionHowWeWork {
                  typeOfCta
                  title
                  text
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
                ourFocuses {
                  sectionTitle
                  subTitle
                  text
                  focuses {
                    focusTitle
                    focusText
                    focusIconPng {
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
                  }
                }
                testomontialDividerSecond {
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
                callToActionHowWeWorkSecond {
                  typeOfCta
                  title
                  text
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
                twoColumnFlexHowWeWorkImg {
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
                benefitsGrid {
                  benefits {
                    benefitTitle
                    benefitText
                    benefitIcon {
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
                  }
                }
                callToActionHowWeWorkThird {
                  typeOfCta
                  title
                  text
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
                relatedServices {
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
                          gatsbyImageData
                        }
                      }
                    }
                  }
                }
                callToActionHowWeWorkFourth {
                  typeOfCta
                  title
                  text
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
            }
        }
    }
}`


