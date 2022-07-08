import React from "react"
import { graphql } from "gatsby"
import BlogPostContent from "../components/blog-post-content"
import Hero from "../components/hero/blog-post"
import BlogAuthorPosts from "../components/blog-author-posts"
import Seo from "../components/seo"

export default function BlogPost({ data: { allWpPost, otherPosts, alternates }, location }) {
  let { blogPost, categories, date, authors, language, seo } = allWpPost.nodes[0]
  return (
    <main id='main'>
      <Seo data={seo} lang={language.slug} alternates={alternates} location={location} type='post' template='Blog Archive' currTemplate={blogPost.previewCard.previewTitle} />
      <Hero data={blogPost.heroPost} categories={categories} date={date} authors={authors} />
      <BlogPostContent data={blogPost.content} quickTitle={blogPost.quickNavigation.sectionTitle} />
      <BlogAuthorPosts data={otherPosts.nodes} title={blogPost.otherPosts.sectionTitle} />
    </main>
  )
}

export const query = graphql`
query BlogPostQuery($id: String!) {
    alternates : allWpPost{
      nodes{
        id
        language{
          slug
          locale
        }
        page : blogPost{
          url : currentPostUrl
          template : templateName
        }
      }
    }
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
                  gatsbyImageData(placeholder: BLURRED, quality: 80)
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
                    gatsbyImageData(placeholder: BLURRED, quality: 80)
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
          language {
            slug
            name
          }
          seo {
            title
            fullHead
          }
            blogPost{
              templateName
              previewCard {
                previewTitle
              }
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
                      gatsbyImageData(placeholder: BLURRED, quality: 80)
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
                        gatsbyImageData(placeholder: BLURRED, quality: 80)
                      }
                    }
                  }
                }
                testomontialDividerFotoPost{
                  personName
                  personPosition
                  testomontialText
                  companyLogo {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(placeholder: BLURRED, quality: 80)
                      }
                    }
                  }
                }
                imageAnnotation
                image {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED, quality: 80)
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
                    localFile{
                      publicURL
                    }
                  }
                  image {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(placeholder: BLURRED, quality: 80)
                      }
                    }
                  }
                }
                table{
                  tableTitle
                  columnCount
                  row{
                    cellFirst
                    cellSecond
                    cellThird
                    cellFourth
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
                language{
                  slug
                }
                author {
                  userUrl
                  userName
                  userAvatar {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(placeholder: BLURRED, quality: 80)
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