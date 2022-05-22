import * as React from "react"
import { graphql } from "gatsby"
import Content from "../components/contact-content"

const ContactPage = ({ data: { allWpPage } }) => {
  let { c: contact } = allWpPage.nodes[0]
  return (
    <main>
      <Content data={contact} />
    </main>
  )
}

export default ContactPage

export const query = graphql`
query CPageQuery($id: String!) {
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


