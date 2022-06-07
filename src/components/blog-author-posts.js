import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import styled from "styled-components"
import { Container } from "../style"
import { urlSystem } from "./../contstants/urlSystem"

export default function BlogAuthorPosts({ data, title, loadMore }) {

    const [showCount, setShowCount] = useState(() => {
        if (typeof window !== "undefined") {
            if (window.innerWidth < 1100) {
                return 4
            }
        }
        return 3
    })

    const step = (() => {
        if (typeof window !== "undefined") {
            if (window.innerWidth < 1100) {
                return 2
            }
        }
        return 3
    })()

    return (
        <Wrapper>
            <Container>
                <Title className="h2">{title}</Title>
                <Grid>
                    {data.map((el, index) => {
                        if (index < showCount) {
                            return (
                                <Item>
                                    <Link to={urlSystem[el.language.slug] + el.blogPost.currentPostUrl}>
                                        <GatsbyImage className='image' image={el.blogPost.previewCard.previewImage.localFile.childImageSharp.gatsbyImageData} alt={el.blogPost.previewCard.previewImage.altText} />
                                        <Content>
                                            <Categories>
                                                {el.categories.nodes.map(el => (
                                                    <div className="item">{el.name}</div>
                                                ))}
                                            </Categories>
                                            {el.authors.nodes[0]
                                                ? <AuthorInform>
                                                    <GatsbyImage className="image-logo" image={el.authors.nodes[0].author.userAvatar.localFile.childImageSharp.gatsbyImageData} alt={el.authors.nodes[0].author.userAvatar.altText} />
                                                    <p className="p">{el.authors.nodes[0].author.userName}</p>
                                                    <p className="p date">{el.date}</p>
                                                </AuthorInform>
                                                : <AuthorInform>
                                                    <p className="p date">{el.date}</p>
                                                </AuthorInform>}
                                            <h2 className="h3 title">{el.blogPost.previewCard.previewTitle}</h2>
                                            <p className="p">{el.blogPost.previewCard.previewText}</p>
                                            <span className="colored">{el.blogPost.previewCard.readMoreButtonText}</span>
                                        </Content>
                                    </Link>
                                </Item>
                            )
                        }
                        return null
                    })}
                </Grid>
                {loadMore
                    ? <>
                        {data.length <= showCount
                            ? null
                            : <Button className="button" onClick={() => { setShowCount(showCount + step) }}>{loadMore}</Button>}</>
                    : null}
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);
`

const Title = styled.h2`
    text-align: center;
    max-width: 860px;
    margin: 0 auto clamp(32px, 5.46vw, 64px) auto;
    padding-top: 16px;
    position: relative;

    &.h2{
        font-size: clamp(20px, 2.86vw, 24px);
    }

    &::before{
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 0;
        width: 40px;
        height: 1px;
        background-color: var(--color-black);
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 48px;

    @media (max-width: 1100px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 32px;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        max-width: 570px;
        margin: 0 auto;
    }
`

const Content = styled.div`
    padding: 32px 16px 0 16px;
`

const Item = styled.div`

    .title{
        margin-bottom: 16px;
        font-weight: 400;
        font-size: 22px;
        line-height: 30px;
    }

    .p{
        margin-bottom: 32px;
    }

    .image{
        width: 100%;
        aspect-ratio: 1.6/1;
        height: fit-content;
        border-radius: 8px;
    }
`

const Categories = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 16px;

    .item{
        white-space: nowrap;
        padding: 4px 20px;
        background: #EBF2F8;
        border-radius: 50px;
        text-transform: uppercase;
        font-weight: 400;
        font-size: 12px;
        line-height: 26px;
    }
`

const AuthorInform = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    .p{
        margin-bottom: 0;
    }

    .image-logo{
        width: fit-content;
        height: fit-content;
        max-width: 36px;
        border-radius: 50%;
        margin-right: 8px;
        margin-bottom: 0;
    }

    .date{
        margin-left: 24px;
        opacity: .5;
    }
`

const Button = styled.button`
    border: none;
    margin: 0 auto;
    margin-top: 64px;
`