import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/hero/case-post"
import OneColumnText from "../components/one-column-text"
import TestomontialDivider from "../components/testomontial-divider-logo"
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
import parse from 'html-react-parser'
import Analytics from './../analytics/casestudies'
import { datalayerPush } from "../helpers/datalayer"

const PortfolioPage = ({ data: { allWpCaseStudies, otherPosts, alternates }, location }) => {
  const { caseStudies, language, seo, scryptInjection } = allWpCaseStudies.nodes[0]
  let script = parse(scryptInjection.code ? scryptInjection.code : '')

  React.useEffect(() => {
    datalayerPush(Analytics.productView(allWpCaseStudies.nodes[0]))
  }, [])

  return (
    <main id='main'>
    {script}
      <Seo data={seo} ogImg={caseStudies.previewCard.previewImage.localFile.publicURL} lang={language.slug} alternates={alternates} location={location} type='post' template='Portfolio Archive' currTemplate={caseStudies.previewCard.previewTitle} />
      <Hero data={caseStudies.heroportfolio} />
      {caseStudies.sectionController.oneColumnTextPart
        ? <OneColumnText alternative={true} data={caseStudies.oneColumnTextPartPortfolio} />
        : null}
      {caseStudies.sectionController.testomontialDivider
        ? <TestomontialDivider data={caseStudies.testomontialDividerPortfolio} />
        : null}
      {caseStudies.sectionController.imageDivider
        ? <ImageDivider data={caseStudies.imageDividerPortfolio} />
        : null}
      {caseStudies.sectionController.inwedoRole
        ? <InwedoRole data={caseStudies.inwedoRole} />
        : null}
      {caseStudies.sectionController.solution
        ? <Solution data={caseStudies.solution} />
        : null}
      {caseStudies.sectionController.callToAction
        ? <CallToAction data={caseStudies.callToActionPortfolio} analytics={Analytics.cta.first} location={location.pathname} />
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
      <OtherCaseStudies data={otherPosts} title={caseStudies.otherPosts.sectionTitle} analytics={Analytics}/>
      {caseStudies.sectionController.callToActionSecond
        ? <CallToAction data={caseStudies.callToActionPortfolioSecond} analytics={Analytics.cta.second} location={location.pathname} />
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
        previewCard{
          previewTitle
        }
      }
    }
  }
    allWpCaseStudies(filter: {id: {eq: $id}}) {
      nodes{
        guid
        slug
        categoriesPortfolio {
          nodes {
            slug
            name
          }
        }
        language{
          slug
        }
        scryptInjection {
          code
        }
        seo {
          title
          metaDesc
          opengraphSiteName
          opengraphModifiedTime
        }
        caseStudies {
          templateName
          previewCard{
            previewTitle
            previewImage{
              localFile{
                publicURL
              }
            }
          }
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
                  publicURL
                }
              }
            }
            caseIcon {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, quality: 95)
                }
              }
            }
            backgroundImage{
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, quality: 95)
                  }
                }
            }
            achievedGoals {
              goalText
              goalIcon {
                altText
                localFile {
                  publicURL
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
                  gatsbyImageData(placeholder: BLURRED, quality: 95)
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
                  gatsbyImageData(placeholder: BLURRED, quality: 95)
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
                  gatsbyImageData(placeholder: BLURRED, quality: 95)
                }
              }
            }
          }
          imageDividerPortfolio{
              imageDivider{
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, quality: 95)
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
                      publicURL
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
                        gatsbyImageData(placeholder: BLURRED, quality: 95)
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
    otherPosts : allWpCaseStudies(limit: 3, filter: {id: {ne: $id}}) {
      nodes {
        guid
        id
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
                  gatsbyImageData(placeholder: BLURRED, quality: 95)
                }
              }
            }
            previewImage {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, quality: 95)
                }
              }
            }
          }
        }
      }
    }
  }
`


