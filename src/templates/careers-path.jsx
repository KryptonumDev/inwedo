import React from "react"
import { graphql } from "gatsby"
import BlogPostContent from "../components/blog-post-content"
import Seo from "../components/seo"
import Hero from "../components/hero/careerth-path"

export default function CareerthPath({ data: { allWpCareerPath, alternates }, location }) {
  let { path, language, seo } = allWpCareerPath.nodes[0]
  return (
    <main>
      <Seo data={seo} lang={language.slug} alternates={alternates} location={location} type='careers post' template='Blog Archive' currTemplate={path.templateName}/>
      <Hero data={path.heroPath}/>
      <BlogPostContent data={path.content} quickTitle={path.quickNavigation.sectionTitle} />
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
          language{
              slug
              locale
          }
          seo {
            title
            fullHead
          }
            id
            path : careerth_path{
              templateName
              heroPath{
                pageTitle
                text
                image{
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(quality: 80)
                    }
                  }
                }
                button{
                  name
                  url
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
                testomontialDividerPost {
                  personName
                  personPosition
                  testomontialText
                  companyLogo {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(quality: 80)
                      }
                    }
                  }
                }
                imageAnnotation
                image {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(quality: 80)
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
                        gatsbyImageData(quality: 80)
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