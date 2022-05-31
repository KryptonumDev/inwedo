import React from "react"
import { graphql } from "gatsby"

export default function BlogPost({ data: { allWpPost } }) {
    let { blogPost } = allWpPost.nodes[0]
    debugger
    return (
        <main>
        </main>
    )
}

export const query = graphql`
query BlogPostQuery($id: String!) {
    allWpPost(filter: {id: {eq: $id}}) {
        nodes{
            blogPost{
                currentPostUrl
            }
            categories {
              nodes {
                name
                slug
              }
            }
            date(formatString: "MMMM DD YYYY")
            author {
              node {
                name
                avatar {
                  url
                }
              }
            }
        }
    }
}
`