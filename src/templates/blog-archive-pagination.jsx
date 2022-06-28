// import React from "react"
// import { graphql } from "gatsby"
// import Hero from "../components/hero/blog"
// import Archive from "../components/blog-archive"
// import Seo from "../components/seo"

// export default function BlogArchive({ data: { allWpPage, allWpPost, allWpCategory, alternates }, location }) {
//   let { blogArchive } = allWpPage.nodes[0]
//   return (
//     <main>
//       <Seo alternates={alternates} location={location} />
//       <Hero data={blogArchive.heroBlog} />
//       <Archive location={location} cta={blogArchive.callToActionBlog} cta2={blogArchive.callToActionBlogSecond} data={allWpPost} categories={allWpCategory} />
//     </main>
//   )
// }

// export const query = graphql`
// query BlogPaginationArcyhiveQuery($id: String!, $templateName: String!, $slug: String!) {
//   alternates : allWpPage(filter: {template: {templateName: {eq: $templateName}}}) {
//     nodes {
//       language {
//         slug
//         name
//       }
//       template {
//         templateName
//       }
//     }
//   }
//     allWpPage(filter: {id: {eq: $id}}) {
//         nodes{
//             blogArchive {
//               heroBlog {
//                 pageTitle
//                 boldText
//                 plainText
//               }
//               callToActionBlog{
//                 typeOfCta
//                 title
//                 text
//                 buttonText
//                 form {
//                   submitButtonText
//                   inputPlaceholder
//                 }
//                 button {
//                   url
//                   name
//                 }
                //   downloadFile {
                //     localFile{
                //       publicURL
                //     }
                //   }
//                 image {
//                   altText
//                   localFile {
//                     childImageSharp {
//                       gatsbyImageData
//                     }
//                   }
//                 }
//               }
//               callToActionBlogSecond{
//                 typeOfCta
//                 title
//                 text
//                 buttonText
//                 form {
//                   submitButtonText
//                   inputPlaceholder
//                 }
//                 button {
//                   url
//                   name
//                 }
//                 downloadFile {
//                   publicUrl
//                   sourceUrl
//                 }
//                 image {
//                   altText
//                   localFile {
//                     childImageSharp {
//                       gatsbyImageData
//                     }
//                   }
//                 }
//               }
//             }
//         }
//     }
//     allWpPost {
//         nodes {
//           language{
//             slug
//           }
//           blogPost {
//             currentPostUrl
//             previewCard {
//               previewTitle
//               previewText
//               readMoreButtonText
//               previewImage {
//                 altText
//                 localFile {
//                   childImageSharp {
//                     gatsbyImageData
//                   }
//                 }
//               }
//             }
//           }
//           categories {
//             nodes {
//               name
//               slug
//             }
//           }
//           date(formatString: "MMMM DD YYYY")
//           authors {
//             nodes {
//               author {
//                 userName
//                 userAvatar {
//                   altText
//                   localFile {
//                     childImageSharp {
//                       gatsbyImageData
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     allWpCategory(filter: {language: {slug: {eq: $slug}}}) {
//         nodes {
//           slug
//           name
//         }
//       }
// }
// `