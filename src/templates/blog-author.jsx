import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/hero/blog-author"
import BlogAuthorPosts from "../components/blog-author-posts"

export default function BlogAuthor({ data: { allWpAuthors, allWpPost } }) {
  const author = allWpAuthors.nodes[0]
  const posts = allWpPost.nodes

  return (
    <main>
      <Hero data={author} />
      <BlogAuthorPosts data={posts} title={author.author.authorPostsTitle} loadMore={author.author.loadMorePostsText}/>
    </main>
  )
}

export const query = graphql`
query BlogCategoryQuery($id: String!) {
    allWpAuthors(filter: {id: {eq: $id}}) {
        nodes {
          author {
            loadMorePostsText
            authorPostsTitle
            userPosition
            userName
            userBigImage {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            userAvatar {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          description
        }
      }
      allWpPost(filter: {authors: {nodes: {elemMatch: {id: {eq: $id}}}}}) {
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