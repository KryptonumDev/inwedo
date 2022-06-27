import React from "react"
import { graphql } from "gatsby"
import BlogPostContent from "../components/blog-post-content"
import Seo from "../components/seo"

export default function CareerthPath({ data: { allWpCareerPath, alternates }, location }) {
  let { path } = allWpPost.nodes[0]
  return (
    <main>
      <Seo alternates={alternates} location={location} type='technology' template='Blog Archive' currTemplate={blogPost.templateName} />
      {/* <BlogPostContent data={blogPost.content} quickTitle={blogPost.quickNavigation.sectionTitle} /> */}
    </main>
  )
}

export const query = graphql`
query BlogPathQuery($id: String!) {
    alternates : allWpCareerPath{
      nodes{
        id
        language{
          slug
          locale
        }
        page : careerth_path{
          url : currentPostUrl
          template : templateName
        }
      }
    }
    allWpCareerPath(filter: {id: {eq: $id}}) {
        nodes{
            id
            path : careerth_path{
              templateName
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
        }
    }
}
`