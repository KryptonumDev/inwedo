import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import styled from "styled-components"
import parse from 'html-react-parser'

export default function CareerthPath({ data: { allWpCareerPath, alternates }, location }) {
  let { path, language, seo, content, scryptInjection } = allWpCareerPath.nodes[0]
  let script = parse(scryptInjection.code ? scryptInjection.code : '')
  return (
    <main id='main'>
    {script}
      <Seo data={seo} lang={language.slug} alternates={alternates} location={location} type='careers post' template='Blog Archive' currTemplate={path.templateName}/>
      <Content dangerouslySetInnerHTML={{ __html: content }} />
    </main>
  )
}

const Content = styled.div`
    max-width: 800px;
    box-sizing: border-box;
    padding: 0 32px;
    margin: 200px auto 0 auto;

    *{
      margin-top: 16px;
    }

    h1{
      margin-top: 36px;
    }

    h2{
      margin-top: 32px;
    }

    h3{
      margin-top: 24px;
    }

    .wp-block-button{
      &.aligncenter {
        margin: 0 auto;
      }
      a{
        color: #fff;
        margin-top: 0;
      }
    }

    img{
      width: 100%;
    }

    h1{
        margin-bottom: 32px;
        font-weight: 400;
        font-size: clamp(20px, 3.38vw, 32px);
        line-height: 151%;
    }

    h2{
        margin-bottom: 16px;
        font-weight: 400;
        font-size: clamp(16px, 2.6vw, 24px);
        line-height: 151%;
    }

    p{
        font-weight: 300;
        font-size: clamp(14px, 2.08vw, 16px);
        line-height: 160%;
        font-feature-settings: 'ss01' on;
    }

    ul{
        li{
            list-style: disc;
            margin-left: 20px;

            font-weight: 300;
            font-size: clamp(14px, 2.08vw, 16px);
            line-height: 160%;
            font-feature-settings: 'ss01' on;
        }
    }

    ol{
        li{
            list-style: auto;
            margin-left: 20px;

            font-weight: 300;
            font-size: clamp(14px, 2.08vw, 16px);
            line-height: 160%;
            font-feature-settings: 'ss01' on;
        }
    }

    .has-text-align-center{
      text-align: center;
    }
`

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
          scryptInjection {
            code
          }
            language{
                slug
                locale
            }
            seo {
              title
              metaDesc
              opengraphSiteName
              opengraphImage {
                publicUrl
              }
            }
            id
            path : careerth_path{
              templateName
            }
            content
        }
    }
}
`