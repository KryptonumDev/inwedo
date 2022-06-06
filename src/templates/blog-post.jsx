import React from "react"
import { graphql } from "gatsby"
import BlogPostContent from "../components/blog-post-content"

export default function BlogPost({ data: { allWpPost } }) {
  let { blogPost } = allWpPost.nodes[0]
  return (
    <main>
      <BlogPostContent data={blogPost.content} />
    </main>
  )
}

export const query = graphql`
query BlogPostQuery($id: String!) {
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