import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { urlSystem } from "../../contstants/urlSystem"
import { Container } from "../../style"

export default function Post({ data }) {

    let post

    for (let i = 0; i < data.length; i++) {
        if (data[i].blogPost.isfeaturedPost === true) {
            post = data[i]
            break
        }
    }

    if (post === undefined) {
        post = data[0]
    }

    const { blogPost: { previewCard, currentPostUrl }, categories: { nodes }, authors, date, language } = post

    return (
        <Wrapper>
            <Container>
                <Link to={urlSystem['Blog Post'][language.slug] + currentPostUrl}>
                    <Content>
                        <PreviewImage>
                            <GatsbyImage className="image" image={previewCard.previewImage.localFile.childImageSharp.gatsbyImageData} alt={previewCard.previewImage.altText} />
                        </PreviewImage>
                        <TextPart>
                            <Categories>
                                {nodes.map(el => (
                                    <Link to={urlSystem['category'][el.language.slug] + el.blogCategory.categoryUrl} className="item">
                                        {el.name.substr(3)}
                                    </Link>
                                ))}
                            </Categories>
                            {authors.nodes[0]
                                ? <AuthorInform>
                                    <GatsbyImage className="image" image={authors.nodes[0].author.userAvatar.localFile.childImageSharp.gatsbyImageData} alt={authors.nodes[0].author.userAvatar.altText} />
                                    <p className="p">{authors.nodes[0].author.userName}</p>
                                    <p className="p date">{date}</p>
                                </AuthorInform>
                                : <AuthorInform>
                                    <p className="p date">{date}</p>
                                </AuthorInform>}
                            <h2 className="h3">{previewCard.previewTitle}</h2>
                            <p className="p">{previewCard.previewText}</p>
                            <span className="colored">{previewCard.readMoreButtonText}</span>
                        </TextPart>
                    </Content>
                </Link>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: var(--margin-xl);
`

const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 64px;
`

const TextPart = styled.div`
    max-width: 500px;

    .h3{
        margin-bottom: 16px;
    }

    .p{
        margin-bottom: 16px;
    }
`

const PreviewImage = styled.div`
    .image{
        width: fit-content;
        height: fit-content;
        border-radius: 8px;
        box-shadow: var(--shadow);
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

    .image{
        width: fit-content;
        height: fit-content;
        max-width: 36px;
        border-radius: 50%;
        margin-right: 8px;
    }

    .date{
        margin-left: 24px;
        opacity: .5;
    }
`