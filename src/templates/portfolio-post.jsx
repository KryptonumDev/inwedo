import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/hero/case-post"
import OneColumnText from "../components/one-column-text"
import TestomontialDivider from "../components/testomontial-divider"
import TestomontialDividerAlt from "../components/testomontial-divider-alt"
import TestomontialDividerExpanded from "../components/testomontial-divider-expanded"
import ImageDivider from "../components/portfolio-image-divider"
import InwedoRole from "../components/case-study-inwedo-role"
import Solution from "../components/solution"
import CallToAction from "../components/cta"
import TwoColumnFlex from "../components/two-column/two-column-list"
import ImpactAchieved from "../components/impact-achieved"
import OtherCaseStudies from "../components/other-case-studies"

const PortfolioPage = ({ data: { allWpCaseStudies, otherPosts } }) => {
  const { caseStudies } = allWpCaseStudies.nodes[0]
  return (
    <main>
      <Hero data={caseStudies.heroportfolio} />
      {caseStudies.oneColumnTextPartPortfolio.sectionTitle
        ? <OneColumnText alternative={true} data={caseStudies.oneColumnTextPartPortfolio} />
        : null}
      {caseStudies.testomontialDividerPortfolio.testomontialText
        ? <TestomontialDivider data={caseStudies.testomontialDividerPortfolio} />
        : null}
      {caseStudies.imageDivider.imageDivider
        ? <ImageDivider data={caseStudies.imageDivider} />
        : null}
      {caseStudies.inwedoRole.sectionTitle
        ? <InwedoRole data={caseStudies.inwedoRole} />
        : null}
      {caseStudies.solution.sectionTitle
        ? <Solution data={caseStudies.solution} />
        : null}
      {caseStudies.callToActionPortfolio.typeOfCta
        ? <CallToAction data={caseStudies.callToActionPortfolio} />
        : null}
      {caseStudies.testomontialDividerPortfolioSecond.testomontialText
        ? <TestomontialDividerAlt data={caseStudies.testomontialDividerPortfolioSecond} />
        : null}
      {caseStudies.twoColumnFlexPortfolio.sectionTitle
        ? <TwoColumnFlex data={caseStudies.twoColumnFlexPortfolio} />
        : null}
      {caseStudies.impactAchieved.sectionTitle
        ? <ImpactAchieved data={caseStudies.impactAchieved} />
        : null}
      {caseStudies.testomontialDividerPortfolioThird.testomontialTitle
        ? <TestomontialDividerExpanded data={caseStudies.testomontialDividerPortfolioThird} />
        : null}
      <OtherCaseStudies data={otherPosts} title={caseStudies.otherPosts.sectionTitle} />
      {caseStudies.callToActionPortfolioSecond.typeOfCta
        ? <CallToAction data={caseStudies.callToActionPortfolioSecond} />
        : null}
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
          testomontialDividerPortfolioThird{
            testomontialTitle
            boldText
            plainText
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
          callToActionPortfolioSecond{
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
          impactAchieved{
            sectionTitle
            impacts{
              impactNumber
              impactText
            }
          }
          otherPosts{
            sectionTitle
          }
        }
      }
    }
    otherPosts : allWpCaseStudies(filter: {id: {ne: $id}}) {
      nodes {
        slug
        categoriesPortfolio {
          nodes {
            slug
            name
            wpParent {
              node {
                slug
              }
            }
          }
        }
        caseStudies {
          currentPostUrl
          previewCard {
            previewTitle
            previewText
            readMore
            previewLogo {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            previewImage {
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
  }
`


