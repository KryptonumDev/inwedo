import React from "react"
import { graphql } from "gatsby"
import BlogAuthorPosts from "../components/blog-author-posts"
import FAQ from './../components/faq'
import Hero from "../components/hero/blog-category"
import Seo from "../components/seo"
import parse from 'html-react-parser'

export default function BlogCategory({ data: { allWpCategory, allWpPost, alternates }, location }) {
  const category = allWpCategory.nodes[0]
  const posts = allWpPost.nodes
  let script = parse(allWpCategory.nodes[0].scryptInjection.code ? allWpCategory.nodes[0].scryptInjection.code : '')
  
  return (
    <main id='main'>
    {script}
      <Seo data={category.seo} lang={category.language.slug} alternates={alternates} location={location} type='archive' id={category.id} template='category' currTemplate={category.slug.substr(3)}/>
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
          scryptInjection {
            code
          }
            slug
            language {
              slug
              name
            }
            seo {
              title
              metaDesc
              opengraphSiteName
              opengraphImage {
                publicUrl
              }
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
                    gatsbyImageData(placeholder: BLURRED, quality: 95)
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
                    gatsbyImageData(placeholder: BLURRED, quality: 95)
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
                      gatsbyImageData(placeholder: BLURRED, quality: 95)
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