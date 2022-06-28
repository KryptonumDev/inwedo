import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/hero/portfolio"
import ClientCases from "../components/client-cases"
import Testomontials from "../components/testomontials-slider"
import CallToAction from "../components/cta"
import Archive from "../components/portfolio-archive"
import Seo from "../components/seo"

const PortfolioArchivePage = ({ data: { allWpPage, categoryParents, allWpCaseStudies, alternates }, location }) => {
  const portfolio = allWpPage.nodes[0].portfolioArchive
  return (
    <main>
      <Seo lang={allWpPage.nodes[0].language.slug} alternates={alternates} location={location} />
      <Hero data={portfolio.heroPortfolio} />
      <ClientCases data={portfolio.clientsPortfolio} />
      <Archive location={location} data={portfolio.posts} parentCategories={categoryParents} posts={allWpCaseStudies}>
        <CallToAction data={portfolio.callToActionPortfolioArchive} />
      </Archive>
      <Testomontials data={portfolio.testomontialsPortfolio} />
      <CallToAction data={portfolio.callToActionPortfolioArchiveSecond} />
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
        portfolioArchive {
          heroPortfolio {
            pageTitle
            textUnderTitle
            backgroundImage {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          posts{
            loadMoreText
          }
          clientsPortfolio{
            card : cardOnRightSide{
              cardLink
              cardImage{
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            sectionTitle
            clientsCases{
                logoClients{
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
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
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
              testomontialText
              companyLogo {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
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
                  gatsbyImageData
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
                  gatsbyImageData
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
      allWpCaseStudies {
        nodes {
          slug
          categoriesPortfolio {
            nodes {
              slug
              name
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


