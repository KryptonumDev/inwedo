import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/hero/blog"
import Archive from "../components/blog-archive"

export default function BlogArchive({ data: { allWpPage, allWpPost, allWpCategory } }) {
    let { blogArchive } = allWpPage.nodes[0]
    return (
        <main>
            <Hero data={blogArchive.heroBlog} />
            <Archive cta={blogArchive.callToActionBlog} cta2={blogArchive.callToActionBlogSecond} data={allWpPost} categories={allWpCategory} />
        </main>
    )
}

export const query = graphql`
query BlogArcyhiveQuery($id: String!, $slug: String!) {
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
          author {
            node {
              name
              avatar {
                url
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