import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../../style"

export default function PostGrid({ data, from, to }) {
    return (
        <Wrapper>
            <Container>
                <Grid>
                    {data.map((el, index) => {
                        if (index >= from && index <= to) {
                            return (
                                <Item>
                                    {/* <Link to={el.blogPost.currentPostUrl}>
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
                                    </Link> */}
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
    margin-top: var(--margin-section);
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 48px;
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

    .image-logo{
        width: 100%;
        max-width: 36px;
        height: fit-content;
        margin-right: 8px;
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
        margin-bottom: 0;
    }

    .date{
        margin-left: 24px;
        opacity: .5;
    }
`