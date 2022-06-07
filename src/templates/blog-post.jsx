import React from "react"
import { graphql } from "gatsby"
import BlogPostContent from "../components/blog-post-content"
import Hero from "../components/hero/blog-post"
import BlogAuthorPosts from "../components/blog-author-posts"

export default function BlogPost({ data: { allWpPost, otherPosts } }) {
  let { blogPost, categories, date, authors } = allWpPost.nodes[0]
  debugger
  return (
    <main>
      <Hero data={blogPost.heroPost} categories={categories} date={date} authors={authors}/>
      <BlogPostContent data={blogPost.content} quickTitle={blogPost.quickNavigation.sectionTitle}/>
      <BlogAuthorPosts data={otherPosts.nodes} title={blogPost.otherPosts.sectionTitle}/>
    </main>
  )
}

export const query = graphql`
query BlogPostQuery($id: String!) {
    otherPosts : allWpPost(filter: {id: {ne: $id}}, limit: 3) {
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
    allWpPost(filter: {id: {eq: $id}}) {
        nodes{
            blogPost{
              otherPosts {
                sectionTitle
              }
              heroPost {
                pageTitle
                text
                image {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
              quickNavigation{
                sectionTitle
              }
              content {
                sectionChoose
                quickLink
                quickLinkText
                textField
                testomontialDividerPost {
                  personName
                  personPosition
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
                imageAnnotation
                image {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
                callToActionPost {
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
            categories {
              nodes {
                name
                slug
                language{
                  slug
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