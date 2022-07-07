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
                        <Link to={el.button.url}>
                            <Item>
                                <div className="content">
                                    <GatsbyImage className="logo" image={el.firmLogo.localFile.childImageSharp.gatsbyImageData} alt={el.firmLogo.altText} />
                                    <h3 className="h2">{el.title}</h3>
                                    <p className="p">{el.text}</p>
                                    <div className="flex">
                                        {el.techologies.map(el => (
                                            <div className="wrap">
                                                <GatsbyImage className="image" image={el.companyLogo.localFile.childImageSharp.gatsbyImageData} alt={el.companyLogo.altText} />
                                            </div>
                                        ))}
                                    </div>
                                    <p className="link">{el.button.name}</p>
                                </div>
                                <Image image={el.imgRight.localFile.childImageSharp.gatsbyImageData} alt={el.imgRight.altText} />
                            </Item>
                        </Link>
                    ))}
                </Repeater>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);

    .h4{
        margin-bottom: clamp(8px, 1.5625vw, 16px);
        opacity: .5;
        font-size: clamp(14px, 2.08vw, 18px);
    }

    .h1{
        margin-bottom: clamp(64px, 12vw, 128px);
        font-size: clamp(20px, 2.08vw, 32px);
    }

    .link{
        font-size: 18px;
    }
`

const Repeater = styled.div`
    display: grid;
    grid-gap: clamp(80px, 20.83vw, 240px);
`

const Item = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;

    .h2{
        margin-top: 24px;
        font-size: clamp(20px, 3.125vw, 28px);
    }

    .p{
        margin-top: 16px;
        margin-bottom: 32px;
        max-width: 400px;
        font-size: 16px;
    }

    .flex{
        margin-bottom: clamp(30px, 5.86vw, 60px);
        display: flex;
        flex-wrap: wrap;
        gap: 12px;

        .wrap{
            background: #EEEEEE;
            box-shadow: 0px 11px 25px rgba(0, 0, 0, 0.04);
            border-radius: 5px;
            padding: 5px;
            width: fit-content;

            .image{
                width: fit-content;
                height: fit-content;
                max-width: 36px;
                filter: grayscale(1);
            }
        }
    }

    .logo{
        max-width: 136px;
        width: fit-content;
        height: fit-content;
    }

    .content{
        max-width: 507px;
    }

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: flex-start;

        .content{
            max-width: 600px;
        }
    }
`

const Image = styled(GatsbyImage)`
    box-shadow: var(--shadow);
    max-width: 600px;
    width: 100%;
    height: fit-content;
    min-width: 400px;
    
    img{
        border-radius: 8px;
    }

    @media (max-width: 900px){
        min-width: unset;
    }
`