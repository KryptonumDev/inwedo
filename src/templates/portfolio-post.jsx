import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/hero/case-post"
import OneColumnText from "../components/one-column-text"
import TestomontialDivider from "../components/testomontial-divider"
import TestomontialDividerAlt from "../components/testomontial-divider-alt"
import ImageDivider from "../components/portfolio-image-divider"
import InwedoRole from "../components/case-study-inwedo-role"
import Solution from "../components/solution"
import CallToAction from "../components/cta"
import TwoColumnFlex from "../components/two-column/two-column-list"

const PortfolioPage = ({ data: { allWpCaseStudies, } }) => {
    const { caseStudies } = allWpCaseStudies.nodes[0]

    return (
        <main>
            <Hero data={caseStudies.heroportfolio} />
            <OneColumnText alternative={true} data={caseStudies.oneColumnTextPartPortfolio} />
            <TestomontialDivider data={caseStudies.testomontialDividerPortfolio} />
            <ImageDivider data={caseStudies.imageDivider} />
            <InwedoRole data={caseStudies.inwedoRole} />
            <Solution data={caseStudies.solution} />
            <CallToAction data={caseStudies.callToActionPortfolio}/>
            <TestomontialDividerAlt data={caseStudies.testomontialDividerPortfolioSecond}/>
            <TwoColumnFlex data={caseStudies.twoColumnFlexPortfolio}/>
        </main>
    )
}

export default PortfolioPage


export const query = graphql`
query PortfolioPageQuery($id: String!) {
    allWpCaseStudies(filter: {id: {eq: $id}}) {
      nodes{
        caseStudies {
          heroportfolio {
            pageTitle
            textUnderTitle
            caseInformation
            technologiesTitle
            technologies {
              technologyIcon {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            caseIcon {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            backgroundImage{
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
            }
            achievedGoals {
              goalText
              goalIcon {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
          oneColumnTextPartPortfolio {
            sectionTitle
            subTitle
            text
            boldText
          }
          testomontialDividerPortfolio{
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
          testomontialDividerPortfolioSecond{
            sectionTitle
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
          imageDivider{
              imageDivider{
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
          }
          inwedoRole{
              sectionTitle
              subTitle
              text
              actions{
                  actionIcon{
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                  actionTitle
              }
          }
          solution{
              sectionTitle
              subTitle
              text
              solutionSteps{
                  stepTitle
                  stepText
                  stepImage{
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
              }
          }
          callToActionPortfolio{
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
          twoColumnFlexPortfolio {
            sectionTitle
            subTitle
            text
            list
          }
        }
      }
    }
  }
`


