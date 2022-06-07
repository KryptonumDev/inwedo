import React from "react"
import styled from "styled-components"
import Image from "./blog-post-image"
import BlogPostNav from "./blog-post-nav"
import Text from "./blog-post-text"
import CallToAction from './cta'
import TestomontialDivider from './testomontial-divider'

export default function BlogPostContent({ data, quickTitle }) {
    return (
        <Wrapper>
            <BlogPostNav data={data} quickTitle={quickTitle}/>
            {data.map((el, index) => {
                switch (el.sectionChoose) {
                    case 'text':
                        return <Text data={el} index={el.quickLinkText.replace(/ /ig, '-')}/>
                    case 'image':
                        return <Image data={el} index={el.quickLinkText.replace(/ /ig, '-')}/>
                    case 'cta':
                        return <CallToAction small={true} data={el.callToActionPost} index={el.quickLinkText.replace(/ /ig, '-')}/>
                    case 'testomontial':
                        return <TestomontialDivider small={true} data={el.testomontialDividerPost} index={el.quickLinkText.replace(/ /ig, '-')}/>
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
