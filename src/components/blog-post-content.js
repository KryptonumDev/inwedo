import React from "react"
import styled from "styled-components"
import Text from "./blog-post-text"

export default function BlogPostContent ({data}) {
    debugger
    return(
        <Wrapper>
            {data.map(el => {
                switch(el.sectionChoose){
                    case 'text':
                        return <Text data={el}/>
                }
            })}
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);
`