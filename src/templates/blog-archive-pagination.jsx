import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/hero/blog"
import Archive from "../components/blog-archive"

export default function BlogArchive({ data: { allWpPage, allWpPost, allWpCategory }, location }) {
    let { blogArchive } = allWpPage.nodes[0]
    return (
        <main>
            <Hero data={blogArchive.heroBlog} />
            <Archive location={location} cta={blogArchive.callToActionBlog} cta2={blogArchive.callToActionBlogSecond} data={allWpPost} categories={allWpCategory} />
        </main>
    )
}

export const query = graphql`
query BlogPaginationArcyhiveQuery($id: String!, $slug: String!) {
    allWpPage(filter: {id: {eq: $id}}) {
        nodes{
            blogArchive {
              heroBlog {
                pageTitle
                boldText
                plainText
              }
              callToActionBlog{
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
              callToActionBlogSecond{
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
    allWpPost {
        nodes {
          language{
            slug
          }
          blogPost {
            currentPostUrl
            previewCard {
              previewTitle
              previewText
              readMoreButtonText
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
          categories {
            nodes {
              name
              slug
            }
          }
          date(formatString: "MMMM DD YYYY")
          authors {
            nodes {
              author {
                userName
                userAvatar {
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
    allWpCategory(filter: {language: {slug: {eq: $slug}}}) {
        nodes {
          slug
          name
        }
      }
}
`