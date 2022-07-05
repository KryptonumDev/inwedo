import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/hero/blog-author"
import BlogAuthorPosts from "../components/blog-author-posts"
import Seo from "../components/seo"

export default function BlogAuthor({ data: { allWpAuthors, allWpPost, alternates }, location }) {
  const author = allWpAuthors.nodes[0]
  const posts = allWpPost.nodes

  return (
    <main>
      <Seo data={author.seo} lang={author.language.slug} alternates={alternates} location={location} type='archive' id={author.id} template='author'/>
      <Hero data={author} />
      <BlogAuthorPosts data={posts} title={author.author.authorPostsTitle} loadMore={author.author.loadMorePostsText} />
    </main>
  )
}

export const query = graphql`
query BlogCategoryQuery($id: String!) {
    alternates : allWpAuthors{
      nodes{
        id
        name
        language{
          slug
          locale
        }
        page : author{
          url : userUrl
        }
      }
    }
    allWpAuthors(filter: {id: {eq: $id}}) {
        nodes {
          language{
            slug
            locale
          }
          seo {
            title
            fullHead
          }
          id
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
              language{
                slug
              }
              name
              slug
              blogCategory {
                categoryUrl
              }
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