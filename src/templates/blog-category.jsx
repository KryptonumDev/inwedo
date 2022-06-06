import React from "react"
import { graphql } from "gatsby"
import BlogAuthorPosts from "../components/blog-author-posts"
import FAQ from './../components/faq'
import Hero from "../components/hero/blog-category"

export default function BlogCategory({ data: { allWpCategory, allWpPost } }) {
  const { blogCategory } = allWpCategory.nodes[0]
  const posts = allWpPost.nodes
  debugger
  return (
    <main>
      <Hero data={blogCategory}/>
      <BlogAuthorPosts data={posts} title={blogCategory.otherPostsTitle} loadMore={blogCategory.viewMoreButtonText} />
      <FAQ data={blogCategory.faqCategory} />
    </main>
  )
}

export const query = graphql`
query BlogAuthorQuery($id: String!) {
      allWpCategory(filter: {id: {eq: $id}}) {
        nodes {
            blogCategory {
              categoryUrl
              categoryPageTitle
              boldTextUnderTitle
              text
              viewMoreButtonText
              otherPostsTitle
              image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              faqCategory{
                title
                faqElement {
                  answer
                  question
                }
              }
            }
        }
      }
      allWpPost(filter: {categories: {nodes: {elemMatch: {id: {eq: $id}}}}}) {
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
    }
`