import React from "react"
import { graphql } from "gatsby"
import BlogAuthorPosts from "../components/blog-author-posts"
import FAQ from './../components/faq'
import Hero from "../components/hero/blog-category"
import Seo from "../components/seo"

export default function BlogCategory({ data: { allWpCategory, allWpPost, alternates }, location }) {
  const category = allWpCategory.nodes[0]
  const posts = allWpPost.nodes
  
  return (
    <main>
      <Seo lang={category.language.slug} alternates={alternates} location={location} type='archive' id={category.id} template='category'/>
      <Hero data={category.blogCategory} />
      <BlogAuthorPosts data={posts} title={category.blogCategory.otherPostsTitle} loadMore={category.blogCategory.viewMoreButtonText} />
      <FAQ data={category.blogCategory.faqCategory} />
    </main>
  )
}

export const query = graphql`
query BlogAuthorQuery($id: String!) {
      alternates : allWpCategory{
        nodes{
          id
          name
          language{
            slug
            locale
          }
          page : blogCategory{
            url : categoryUrl
          }
        }
      }
      allWpCategory(filter: {id: {eq: $id}}) {
        nodes {
          language {
            slug
            name
          }
            id
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