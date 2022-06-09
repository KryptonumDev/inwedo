import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { urlSystem } from "../../contstants/urlSystem"
import { Container } from "../../style"

export default function Hero({ data, categories, date, authors }) {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <TextPart>
                        <Categories>
                            {categories.nodes.map(el => (
                                <Link to={urlSystem.category[el.language.slug] + el.slug} className="item">
                                    {el.name}
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
                        <h2 className="h3">{data.pageTitle}</h2>
                        <p className="p">{data.text}</p>
                    </TextPart>
                    <Image image={data.image.localFile.childImageSharp.gatsbyImageData} alt={data.image.altText} />
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    background-color: var(--color-white);
    padding: clamp(120px, 20.83vw, 200px) 0 clamp(24px, 6.25vw, 64px) 0;
    border-radius: 24.5221px;
    box-shadow: drop-shadow(0px 76px 74px rgba(0, 0, 0, 0.02));
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 32px;

    @media (max-width: 1024px) {
        flex-direction: column-reverse;
        width: fit-content;
        margin: 0 auto;
    }
`

const TextPart = styled.div`
    max-width: 500px;

    .h3{
        margin-bottom: 16px;
        font-size: clamp(16px, 2.6vw, 24px);
    }

    .p{
        margin-bottom: 16px;
        font-size: clamp(14px, 2.08vw, 18px);
    }

    @media (max-width: 1024px){
        max-width: 600px;
    }
`

const Image = styled(GatsbyImage)`
    border-radius: 8px;
    box-shadow: var(--shadow);
    width: fit-content;
    height: fit-content;
    max-width: 600px;
    min-width: 500px;

    @media (max-width: 1024px) {
        min-width: unset;
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
        font-size: clamp(10px, 1.43vw, 12px);
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