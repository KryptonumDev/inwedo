import * as React from "react"
import { graphql } from "gatsby"
import Content from "../components/contact-content"
import Seo from "../components/seo"

const ContactPage = ({ data: { allWpPage, alternates }, location }) => {
  let { c: contact } = allWpPage.nodes[0]
  return (
    <main>
      <Seo alternates={alternates} location={location} />
      <Content data={contact} />
    </main>
  )
}

export default ContactPage

export const query = graphql`
query CPageQuery($id: String!, $templateName: String!) {
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
          nodes {
            slug
            c {
              textUnderTitle
              pageTitle
              form {
                nameInput {
                  label
                  placeholder
                }
                emailInput {
                  label
                  placehoder
                }
                phoneInput {
                  label
                  placeholder
                }
                interestedInput {
                  label
                  placeholder
                  options {
                    text
                  }
                }
                messageInput {
                  label
                  placeholder
                }
                privacyPolice
                submit
              }
              map {
                addressTitle
                addressText
                mapImg {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
              contactPerson {
                sectionTitle
                personName
                personPosition
                personEmail
                personPhone
                personAvatar {
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
      
  
`


