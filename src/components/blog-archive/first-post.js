import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../../style"

export default function Post({ data: { blogPost: { previewCard, currentPostUrl }, categories: { nodes }, author, date } }) {
    return (
        <Wrapper>
            <Container>
                <Link to={currentPostUrl}>
                    <Content>
                        <PreviewImage>
                            <GatsbyImage className="image" image={previewCard.previewImage.localFile.childImageSharp.gatsbyImageData} alt={previewCard.previewImage.altText} />
                        </PreviewImage>
                        <TextPart>
                            <Categories>
                                {nodes.map(el => (
                                    <div className="item">
                                        {el.name}
                                    </div>
                                ))}
                            </Categories>
                            <AuthorInform>
                                {/* <GatsbyImage className="image" image={author.node.author.authorAvatar.localFile.childImageSharp.gatsbyImageData} alt={authors.nodes[0].author.authorAvatar.altText} /> */}
                                <img className="image" src={author.node.avatar.url} alt="author avatar"/>
                                <p className="p">{author.node.name}</p>
                                <p className="p date">{date}</p>
                            </AuthorInform>
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
    align-items: center;
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
        filter: var(--shadow);
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