import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/hero/blog"
import Archive from "../components/blog-archive"
import Seo from "../components/seo"
import StayInTouch from "../components/stay-in-touch"

export default function BlogArchive({ data: { allWpPage, allWpPost, allWpCategory, alternates }, location }) {
  let { blogArchive, language, seo } = allWpPage.nodes[0]
  return (
    <main>
      <Seo data={seo} lang={language.slug} alternates={alternates} location={location} type='Blog Archive'/>
      <Hero data={blogArchive.heroBlog} />
      <Archive otherData={blogArchive.posts} location={location} cta={blogArchive.callToActionBlog} cta2={blogArchive.callToActionBlogSecond} data={allWpPost} categories={allWpCategory} language={language.slug} />
      <StayInTouch data={blogArchive.stayInTouch}/>
    </main>
  )
}

export const query = graphql`
query BlogArcyhiveQuery($id: String!, $templateName: String!, $slug: String!) {
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
            language{
              slug
            }
            seo {
              title
              fullHead
            }
            blogArchive {
              heroBlog {
                pageTitle
                boldText
                plainText
              }
              posts{
                searchInputPlaceholder
                submitButtonText
                noPostsText
                searchedPhraseText
                matchingArticlesText
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
              stayInTouch{
                sectionTitle
                text
                socialMediaLinks{
                  socialLink
                  ariaLabel
                  socialIcon{
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
    allWpPost {
        nodes {
          language{
            slug
          }
          blogPost {
            currentPostUrl
            isfeaturedPost
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
    allWpCategory(filter: {language: {slug: {eq: $slug}}}) {
        nodes {
          slug
          name
        }
      }
}
`