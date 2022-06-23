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
import Seo from "../components/seo"

const PortfolioPage = ({ data: { allWpCaseStudies, otherPosts, alternates }, location }) => {
  const { caseStudies } = allWpCaseStudies.nodes[0]
  return (
    <main>
      <Seo alternates={alternates} location={location} type='technology' template='Portfolio Archive' currTemplate={caseStudies.templateName} />
      <Hero data={caseStudies.heroportfolio} />
      {caseStudies.sectionController.oneColumnTextPart
        ? <OneColumnText alternative={true} data={caseStudies.oneColumnTextPartPortfolio} />
        : null}
      {caseStudies.sectionController.testomontialDivider
        ? <TestomontialDivider data={caseStudies.testomontialDividerPortfolio} />
        : null}
      {caseStudies.sectionController.imageDivider
        ? <ImageDivider data={caseStudies.imageDivider} />
        : null}
      {caseStudies.sectionController.inwedoRole
        ? <InwedoRole data={caseStudies.inwedoRole} />
        : null}
      {caseStudies.sectionController.solution
        ? <Solution data={caseStudies.solution} />
        : null}
      {caseStudies.sectionController.callToAction
        ? <CallToAction data={caseStudies.callToActionPortfolio} />
        : null}
      {caseStudies.sectionController.testomontialDividerSecond
        ? <TestomontialDividerAlt data={caseStudies.testomontialDividerPortfolioSecond} />
        : null}
      {caseStudies.sectionController.twoColumnFlex
        ? <TwoColumnFlex data={caseStudies.twoColumnFlexPortfolio} />
        : null}
      {caseStudies.sectionController.impactAchieved
        ? <ImpactAchieved data={caseStudies.impactAchieved} />
        : null}
      {caseStudies.sectionController.testomontialDividerThird
        ? <TestomontialDividerExpanded data={caseStudies.testomontialDividerPortfolioThird} />
        : null}
      <OtherCaseStudies data={otherPosts} title={caseStudies.otherPosts.sectionTitle} />
      {caseStudies.sectionController.callToActionSecond
        ? <CallToAction data={caseStudies.callToActionPortfolioSecond} />
        : null}
    </main>
  )
}

export default PortfolioPage


export const query = graphql`
query PortfolioPageQuery($id: String!) {
  alternates : allWpPost{
    nodes{
      id
      language{
        slug
        locale
      }
      page : blogPost{
        url : currentPostUrl
        template : templateName
      }
    }
  }
    allWpCaseStudies(filter: {id: {eq: $id}}) {
      nodes{
        language{
          slug
        }
        caseStudies {
          sectionController {
            callToAction
            callToActionSecond
            imageDivider
            impactAchieved
            inwedoRole
            oneColumnTextPart
            solution
            testomontialDivider
            testomontialDividerSecond
            testomontialDividerThird
            twoColumnFlex
          }
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
        language{
          slug
        }
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
          templateName
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


