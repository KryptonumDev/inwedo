import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

const PrivacyPage = ({ data: { allWpPage } }) => {
    let { content } = allWpPage.nodes[0]
    return (
        <main>
            <Content dangerouslySetInnerHTML={{ __html: content }} />
        </main>
    )
}

export default PrivacyPage

export const query = graphql`
    query PrivacyPageQuery($id: String!) {
        allWpPage(filter: {id: {eq: $id}}) {
            nodes {
                content
            }
        }
    }
`

const Content = styled.div`
    max-width: 800px;
    box-sizing: border-box;
    padding: 0 32px;
    margin: 200px auto 0 auto;

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

    ul, ol{
        display: grid;
        grid-gap: 16px;
        li{
            list-style: disc;
            margin-left: 20px;

            font-weight: 300;
            font-size: clamp(14px, 2.08vw, 16px);
            line-height: 160%;
            font-feature-settings: 'ss01' on;
        }
    }
`