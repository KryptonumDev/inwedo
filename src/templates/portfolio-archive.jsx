import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/hero/portfolio"
import ClientCases from "../components/client-cases"
import Testomontials from "../components/testomontials-slider"
import CallToAction from "../components/cta"
import Archive from "../components/portfolio-archive"
import Seo from "../components/seo"
import parse from 'html-react-parser'
import Analytics from './../analytics/portfolio'

const PortfolioArchivePage = ({ data: { allWpPage, categoryParents, allWpCaseStudies, alternates }, location }) => {
  const portfolio = allWpPage.nodes[0].portfolioArchive
  let script = parse(allWpPage.nodes[0].scryptInjection.code ? allWpPage.nodes[0].scryptInjection.code : '')
  return (
    <main id='main'>
    {script}
      <Seo data={allWpPage.nodes[0].seo} lang={allWpPage.nodes[0].language.slug} alternates={alternates} location={location}  type='Portfolio Archive'/>
      <Hero data={portfolio.heroPortfolio} />
      <ClientCases data={portfolio.clientsPortfolio} />
      <Archive analytics={Analytics} location={location.pathname} data={portfolio.postsOtherData} parentCategories={categoryParents} posts={allWpCaseStudies}>
        <CallToAction data={portfolio.callToActionPortfolioArchive} analytics={Analytics.cta.first} location={location.pathname} />
      </Archive>
      <Testomontials data={portfolio.testomontialsPortfolio} />
      <CallToAction data={portfolio.callToActionPortfolioArchiveSecond} analytics={Analytics.cta.second} location={location.pathname} />
    </main>
  )
}

export default PortfolioArchivePage


export const query = graphql`
query PortfolioArchivePageQuery($id: String!, $templateName: String!, $slug: String!) {
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
      nodes{
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
        portfolioArchive {
          heroPortfolio {
            pageTitle
            textUnderTitle
            backgroundImage {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, quality: 95)
                }
              }
            }
          }
          postsOtherData{
            loadMore
            noPostsText
          }
          clientsPortfolio{
            card : cardOnRightSide{
              cardLink
              cardImage{
                altText
                localFile {
                  publicURL
                }
              }
            }
            sectionTitle
            clientsCases{
                logoClients{
                    altText
                    localFile {
                      publicURL
                    }
                }
            }
          }
          testomontialsPortfolio {
            title
            text
            testomontialsItem {
              author {
                authorName
                authorPosition
                userIconPng {
                  altText
                  localFile {
                    publicURL
                  }
                }
              }
              testomontialText
              companyLogo {
                altText
                localFile {
                  publicURL
                }
              }
            }
          }
          callToActionPortfolioArchive{
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
          callToActionPortfolioArchiveSecond{
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
        }
      }
    }
    categoryChildrens : allWpCategoryPortfolio(filter: {wpParent: {node: {slug: {ne: null}}}, language: {slug: {eq: $slug}}}) {
        nodes {
          name
          slug
          wpParent {
            node {
              slug
            }
          }
        }
      }
    categoryParents : allWpCategoryPortfolio(filter: {wpParent: {node: {slug: {eq: null}}}, language: {slug: {eq: $slug}}} ) {
        nodes {
            slug
            name
            wpChildren {
                nodes {
                  slug
                  name
                }
              }
        }
      }
      allWpCaseStudies(sort: {fields: date, order: DESC}) {
        nodes {
          guid
          slug
          categoriesPortfolio {
            nodes {
              slug
              name
            }
          }
          caseStudies {
            wordCount
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


