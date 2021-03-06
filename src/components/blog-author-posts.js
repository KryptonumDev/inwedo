import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { datalayerPush } from "../helpers/datalayer"
import { Container } from "../style"
import { urlSystem } from "./../contstants/urlSystem"

export default function BlogAuthorPosts({ data, title, loadMore, analytics, isArchive }) {
    const [currentStep, changeCurrentStep] = useState(1)
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

    useEffect(() => {
        datalayerPush(analytics.listView(data, showCount, null))
    }, [])

    const changeShowCount = () => {
        if(isArchive){
            datalayerPush(analytics.loadMore(currentStep))
            datalayerPush(analytics.listView(data, showCount, step))
        }

        setShowCount(showCount + step)
        changeCurrentStep(currentStep+1)
        
    }

    return (
        <Wrapper>
            <Container>
                <Title className="h2">{title}</Title>
                <Grid>
                    {data.map((el, index) => {
                        if (index < showCount) {
                            return (
                                <Item>
                                    <Link onClick={() => { datalayerPush(analytics.productClick(el, index)) }} to={urlSystem['Blog Post'][el.language.slug] + el.blogPost.currentPostUrl}>
                                        <GatsbyImage className='image' image={el.blogPost.previewCard.previewImage.localFile.childImageSharp.gatsbyImageData} alt={el.blogPost.previewCard.previewImage.altText} />
                                        <Content>
                                            <Categories>
                                                {el.categories.nodes.map(el => (
                                                    <Link to={urlSystem['category'][el.language.slug] + el.blogCategory.categoryUrl} className="item">
                                                        {el.name.substr(3)}
                                                    </Link>
                                                ))}
                                            </Categories>
                                            {el.authors.nodes[0]
                                                ? <AuthorInform>
                                                    {el.authors.nodes[0].author.userAvatar
                                                        ? <GatsbyImage className="image-logo" image={el.authors.nodes[0].author.userAvatar.localFile.childImageSharp.gatsbyImageData} alt={el.authors.nodes[0].author.userAvatar.altText} />
                                                        : null}
                                                    <p className="p">{el.authors.nodes[0].author.userName}</p>
                                                    <p className="p date">{el.date}</p>
                                                </AuthorInform>
                                                : <AuthorInform>
                                                    <p className="p date">{el.date}</p>
                                                </AuthorInform>}
                                            <h2 className="h3 title">{el.blogPost.previewCard.previewTitle}</h2>
                                            <p className="p">{el.blogPost.previewCard.previewText}</p>
                                            <span className="link">{el.blogPost.previewCard.readMoreButtonText}</span>
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
                            : <Button className="button" onClick={() => { changeShowCount() }}>{loadMore}</Button>}</>
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
        height: fit-content;
        position: relative;
        border-radius: 8px;

        img{
            border-radius: 8px;
            transition: transform .2s cubic-bezier(0.39, 0.575, 0.565, 1);
        }
    }
    
    a{
        &:hover{
            .image{
                img{
                    transform: scale(1.03);
                }
            }
            .link{
                &::after{
                    width: 100%;
                }
            }
        }
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
        background-color: #EBF2F8;
        border-radius: 50px;
        text-transform: uppercase;
        font-weight: 400;
        font-size: 12px;
        line-height: 26px;
        transition: background-color .3s cubic-bezier(0.39, 0.575, 0.565, 1);

        &:hover{
            background-color: #dBe2e8;
        }
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
        margin-right: 8px;
        margin-bottom: 0;

        img{
            border-radius: 50%;
        }
    }

    .date{
        margin-left: 24px;
        opacity: .55;
    }
`

const Button = styled.button`
    border: none;
    margin: 0 auto;
    margin-top: 64px;
`