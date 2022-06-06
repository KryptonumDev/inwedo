import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/hero/portfolio"
import ClientCases from "../components/client-cases"
import Testomontials from "../components/testomontials-slider"
import CallToAction from "../components/cta"
import Archive from "../components/portfolio-archive"

const PortfolioArchivePage = ({ data: { allWpPage, categoryParents, allWpCaseStudies }, location }) => {
  const portfolio = allWpPage.nodes[0].portfolioArchive
  return (
    <main>
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
query PortfolioArchivePageQuery($id: String!, $slug: String!) {
    allWpPage(filter: {id: {eq: $id}}) {
      nodes{
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


