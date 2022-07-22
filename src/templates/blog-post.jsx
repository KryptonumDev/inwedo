import React, { useRef } from "react"
import { graphql } from "gatsby"
import BlogPostContent from "../components/blog-post-content"
import Hero from "../components/hero/blog-post"
import BlogAuthorPosts from "../components/blog-author-posts"
import Seo from "../components/seo"
import parse from 'html-react-parser'
import Analytics from './../analytics/blog-page'
import { datalayerPush } from "../helpers/datalayer"
import { getScrollPercent } from '../helpers/scrollPercentage'

export default function BlogPost({ data: { allWpPost, otherPosts, alternates }, location }) {
  let { blogPost, categories, date, authors, language, seo, scryptInjection } = allWpPost.nodes[0]
  let script = parse(scryptInjection.code ? scryptInjection.code : '')

  const startScrol = useRef(false)
  const firstScroll = useRef(false)
  const secondScroll = useRef(false)
  const thirdScroll = useRef(false)
  const minutScroll = useRef(false)

  const handleScroll = () => {
    let percentage = getScrollPercent()
    if (percentage > 0 && !startScrol.current) {
      startScrol.current = true
      datalayerPush(Analytics.scrollStart(allWpPost.nodes[0]))
    }
    if (percentage >= 33 && !firstScroll.current) {
      firstScroll.current = true
      datalayerPush(Analytics.scroll(allWpPost.nodes[0], 1))
    }
    if (percentage >= 66 && !secondScroll.current) {
      secondScroll.current = true
      datalayerPush(Analytics.scroll(allWpPost.nodes[0], 2))
    }
    if (percentage >= 99 && !thirdScroll.current) {
      thirdScroll.current = true
      datalayerPush(Analytics.scroll(allWpPost.nodes[0], 3))
      if (minutScroll) {
        datalayerPush(Analytics.scrollEnd(allWpPost.nodes[0]))
      }
    }
  };

  React.useEffect(() => {
    datalayerPush(Analytics.productView(allWpPost.nodes[0]))
    window.addEventListener("scroll", handleScroll);

    setTimeout(() => {
      minutScroll.current = true
      if (thirdScroll.current) {
        datalayerPush(Analytics.scrollEnd(allWpPost.nodes[0]))
      }
    }, 60000)

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])

  return (
    <main id='main'>
      {script}
      <Seo preview={blogPost.previewCard} author={authors.nodes[0]?.author} data={seo} lang={language.slug} alternates={alternates} location={location} type='post' template='Blog Archive' currTemplate={blogPost.previewCard.previewTitle} ogImg={blogPost.previewCard.previewImage.localFile.publicURL} />
      <Hero data={blogPost.heroPost} categories={categories} date={date} authors={authors} />
      <BlogPostContent location={location.pathname} analytics={Analytics.cta} data={blogPost.content} quickTitle={blogPost.quickNavigation.sectionTitle} />
      <BlogAuthorPosts analytics={Analytics} data={otherPosts.nodes} title={blogPost.otherPosts.sectionTitle} />
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
          previewCard{
            previewTitle
          }
        }
      }
    }
    otherPosts : allWpPost(filter: {id: {ne: $id}}, limit: 3) {
      nodes {
        guid
        language{
          slug
        }
        blogPost {
          currentPostUrl
          templateName
          previewCard {
            previewTitle
            previewText
            readMoreButtonText
            previewImage {
              altText
              localFile {
                publicURL
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, quality: 95)
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
                    gatsbyImageData(placeholder: BLURRED, quality: 95)
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
          guid
          language {
            slug
            name
          }
          scryptInjection {
            code
          }
          seo {
            title
            metaDesc
            opengraphSiteName
            opengraphModifiedTime
          }
            blogPost{
              templateName
              previewCard {
                previewTitle
                previewText
                previewImage {
                  altText
                  localFile {
                    publicURL
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED, quality: 95)
                    }
                  }
                }
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
                      gatsbyImageData(placeholder: BLURRED, quality: 95)
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
                        gatsbyImageData(placeholder: BLURRED, quality: 95)
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
                        gatsbyImageData(placeholder: BLURRED, quality: 95)
                      }
                    }
                  }
                }
                imageAnnotation
                image {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED, quality: 95)
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
                        gatsbyImageData(placeholder: BLURRED, quality: 95)
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
            formatedDate : date(formatString: "DDMMYYYY")
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
                        gatsbyImageData(placeholder: BLURRED, quality: 95)
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