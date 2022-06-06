import React from "react"
import { graphql } from "gatsby"

export default function BlogAuthor({ data: { allWpAuthors } }) {
    let { author } = allWpAuthors.nodes[0]
    return (
        <main>
        </main>
    )
}

export const query = graphql`
query BlogCategoryQuery($id: String!) {
    allWpAuthors(filter: {id: {eq: $id}}) {
        nodes {
          author {
            authorPostsTitle
            userPosition
            userName
            userBigImage {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            userAvatar {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          description
        }
      }
    }
`