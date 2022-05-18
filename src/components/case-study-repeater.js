import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function CaseStudyRepeater({ data: { title, text, studiesCase } }) {
    return (
        <Wrapper>
            <Container>
                <h2 className='h4 line'>{title}</h2>
                <p className='h1 medium'>{text}</p>
                <Repeater>
                    {studiesCase.map(el => (
                        <Item>
                            <div className="content">
                                <GatsbyImage image={el.firmLogo.localFile.childImageSharp.gatsbyImageData} alt={el.firmLogo.altText} />
                                <h3 className="h2">{el.title}</h3>
                                <p className="p">{el.text}</p>
                                <div className="flex">
                                    {el.techologies.map(el => (
                                        <div>
                                            <img src={el.companyLogo?.sourceUrl} alt={el.companyLogo?.altText} />
                                        </div>
                                    ))}
                                </div>
                                <Link className="link" to={el.button.url}>{el.button.name}</Link>
                            </div>
                            <Image image={el.imgRight.localFile.childImageSharp.gatsbyImageData} alt={el.imgRight.altText} />
                        </Item>
                    ))}
                </Repeater>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);
    .h4{
        margin-bottom: 16px;
        opacity: .5;
    }
    .h1{
        margin-bottom: var(--margin-section);
    }
`

const Repeater = styled.div`
    display: grid;
    grid-gap: calc(var(--margin-section) * 2);
`

const Item = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;

    .h2{
        margin-top: 24px;
    }

    .p{
        margin-top: 16px;
        margin-bottom: 32px;
    }

    .flex{
        margin-bottom: 60px;
        display: flex;
        flex-wrap: wrap;
        gap: 12px;

        div{
            background: #EEEEEE;
            box-shadow: 0px 11px 25px rgba(0, 0, 0, 0.04);
            border-radius: 5px;
            padding: 5px;
            width: fit-content;
        }
    }

    .content{
        max-width: 528px;
    }
`

const Image = styled(GatsbyImage)`
    border-radius: 8px;
    filter: var(--shadow);
    max-width: 600px;
    width: 100%;
`