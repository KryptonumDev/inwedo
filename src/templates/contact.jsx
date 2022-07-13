import * as React from "react"
import { graphql } from "gatsby"
import Content from "../components/contact-content"
import Seo from "../components/seo"

const ContactPage = ({ data: { allWpPage, alternates }, location }) => {
  let { contactPage, language, seo } = allWpPage.nodes[0]
  return (
    <main id='main'>
      <Seo data={seo} lang={language.slug} alternates={alternates} location={location} type='Contact' />
      <Content data={contactPage} lang={language.slug}/>
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
            slug
            contactPage {
              textUnderTitle
              pageTitle
              form {
                nameInput {
                  label
                  placeholder
                  errorMessage
                }
                emailInput {
                  label
                  placehoder
                  errorMessage
                }
                phoneInput {
                  label
                  placeholder
                  errorMessage
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
                privacyPolicyErrorText
                newsletterAgreement
                submit
                succesSubmitText
                errorSubmitText
              }
              map {
                addressTitle
                addressText
                mapImg {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED, quality: 95)
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
                      gatsbyImageData(placeholder: BLURRED, quality: 95)
                    }
                  }
                }
              }
            }
          }
        }
      }
      
  
`


