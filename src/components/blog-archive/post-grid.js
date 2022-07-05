import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import styled from "styled-components"
import { urlSystem } from "../../contstants/urlSystem"
import { Container } from "../../style"

export default function PostGrid({ isDefault, data, from, to, isAltLayout, currentPage, id }) {

    return (
        <Wrapper id={id}>
            <Container>
                <Grid>
                    {data.map((el, index) => {
                        debugger
                        if (
                            (isAltLayout && index >= (to * (currentPage - 1) + (currentPage - 1)) && index <= (to * (currentPage) + (currentPage - 1)))
                            ||
                            (!isAltLayout && index >= from && index <= to)
                        ) {
                            return (
                                <Item isAltLayout={isAltLayout} isDefault={isDefault}>
                                    <Link className="wrap" to={urlSystem['Blog Post'][el.language.slug] + el.blogPost.currentPostUrl}>
                                        <GatsbyImage className='image' image={el.blogPost.previewCard.previewImage.localFile.childImageSharp.gatsbyImageData} alt={el.blogPost.previewCard.previewImage.altText} />
                                        <Content className="content">
                                            <Categories>
                                                {el.categories.nodes.map(el => (
                                                    <Link to={urlSystem['category'][el.language.slug] + el.blogCategory.categoryUrl} className="item">
                                                        {el.name.substr(3)}
                                                    </Link>
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
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding-top: var(--margin-section);
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: clamp(32px, ${40 / 768 * 100}vw, 48px);

    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 540px) {
        grid-template-columns: 1fr;
    }
`

const Content = styled.div`
    padding: 32px 16px 0 16px;

    @media (max-width: 640px) {
        padding: 32px 0 0 0;
    }
`

const Item = styled.div`

    .title{
        margin-bottom: 16px;
        font-weight: 400;
        font-size: clamp(16px, ${19 / 768 * 100}vw, 22px);
        line-height: 151%;
    }

    .p{
        margin-bottom: 32px;
    }

    .image{
        width: 100%;

        img{
            border-radius: 8px;
        }
    }


    @media (min-width: 541px) {
        ${props => props.isDefault
        ? null
        : `
            &:first-child{
                    grid-column-start: 1;
                    grid-column-end: 4;
                    .wrap{
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        grid-gap: 64px;
                    }
                    .content{
                        padding: 0;
                    }
                }
        `}
    } 

    @media (max-width: 1024px ) and ( min-width: 541px) {
        &:last-child{
            grid-column-start: 1;
            grid-column-end: 3;
            max-width: 640px;
            margin: 0 auto;

            .content{
                padding: 32px 16px 0 16px;
            }
        }

        ${props => props.isDefault
        ? null
        : `
            &:first-child{
                grid-column-start: 1;
                grid-column-end: 3;
                max-width: 640px;
                margin: 0 auto;

                .wrap{
                    display: unset;
                    grid-template-columns: unset;
                    grid-gap: unset;
                }

                .content{
                    padding: 32px 16px 0 16px;
                }
            }
        `}

        ${props => props.isAltLayout ? `
            &:last-child, &:first-child{
                grid-column-start: unset;
                grid-column-end: unset;
                max-width: unset;
                margin: unset;

                .content{
                    padding: 32px 16px 0 16px;

                    @media (max-width: 640px) {
                        padding: 32px 0 0 0;
                    }
                }
            }
        ` : null}
    }

`

const Categories = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px 8px;
    margin-bottom: 16px;

    .item{
        white-space: nowrap;
        padding: 4px 20px;
        background: #EBF2F8;
        border-radius: 50px;
        text-transform: uppercase;
        font-weight: 400;
        font-size: clamp(10px, ${11 / 768 * 100}vw, 12px);
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