import React from "react"
import { graphql } from "gatsby"

export default function BlogCategory({ data: { allWpCategory } }) {
    let { blogCategory } = allWpCategory.nodes[0]
    return (
        <main>
        </main>
    )
}

export const query = graphql`
query BlogAuthorQuery($id: String!) {
    allWpCategory(filter: {id: {eq: $id}}) {
        nodes {
            blogCategory {
              categoryUrl
              categoryPageTitle
              boldTextUnderTitle
              text
              otherPostsTitle
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
`