import React from "react"
import styled from "styled-components"
import Image from "./blog-post-image"
import BlogPostNav from "./blog-post-nav"
import Table from "./blog-post-table"
import Text from "./blog-post-text"
import CallToAction from './cta'
import TestomontialDivider from './testomontial-divider'

export default function BlogPostContent({ data, quickTitle }) {
    return (
        <Wrapper>
            <BlogPostNav data={data} quickTitle={quickTitle}/>
            {data.map(el => {
                let id = el.quickLinkText ? el.quickLinkText.replace(/ /ig, '-') : null
                switch (el.sectionChoose) {
                    case 'text':
                        return <Text data={el} index={id}/>
                    case 'image':
                        return <Image data={el} index={id}/>
                    case 'cta':
                        return <CallToAction small={true} data={el.callToActionPost} index={id}/>
                    case 'testomontial':
                        return <TestomontialDivider small={true} data={el.testomontialDividerPost} index={id}/>
                    case 'table':
                        return <Table data={el.table} index={id}/>
                    default :
                        return null
                }
            })}
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: 64px;
`
