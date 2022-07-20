import React from "react"
import styled from "styled-components"
import { Container } from "../../style"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { datalayerPush } from "../../helpers/datalayer"

export default function TwoColumnFlex({ data: { image, title, subTitle, text, button }, technology, reverse, descReverse, analytics, location }) {

    const click = () => {
        if (button.url) {
            datalayerPush(analytics(location))
        }
    }

    return (
        <Wrapper>
            <Container>
                <Flex as={button.url ? null : 'div'} onClick={() => { click() }} isLink={button.url} descReverse={descReverse} reverse={reverse} to={button.url} technology={technology}>
                    <div className="text">
                        {technology
                            ? <h2 className="h1">{title}</h2>
                            : <h2 className="h4 line">{title}</h2>}
                        <div className="h3" dangerouslySetInnerHTML={{ __html: subTitle }} />
                        <div className="p" dangerouslySetInnerHTML={{ __html: text }}></div>
                        {button.url
                            ? <p className="link">{button.name}</p>
                            : null}
                    </div>
                    <Image className="image" image={image.localFile.childImageSharp.gatsbyImageData} alt={image.altText} />
                </Flex>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);
        
        .h4{
            margin-bottom: 16px;
            opacity: .55;
            font-size: clamp(14px, 2.08vw, 18px);

                @media (max-width: 850px){
                    display: block;
                    max-width: 500px;
                    margin: 0 auto 16px auto;
                    box-sizing: border-box;
                }
        }


`

const Flex = styled(Link)`
    display: flex;
    justify-content: space-between;
    flex-direction: ${props => props.descReverse ? 'row-reverse' : 'row'};
    align-items: center;
    gap: clamp(32px, ${100 / 1440 * 100}vw, 100px);

        ${props => props.isLink ? `
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
        `: null}


    .image{
        box-shadow: var(--shadow);
        border-radius: 8px;
        width: fit-content;
        height: fit-content;
        min-width: 400px;

        img{
            transition: transform .2s cubic-bezier(0.39, 0.575, 0.565, 1);
            border-radius: 8px;
        }

        @media (max-width: 850px) {
            width: 100%;
            min-width: unset;
        }
    }

    .text{
        max-width: ${props => props.technology ? `630px` : '509px'};
        margin-left: ${props => props.technology ? null : `clamp(0px, ${74 / 1440 * 100}vw, 74px)`};
        width: 100%;
        .h1{
            margin-bottom: 16px;
        }
        .h3{
            margin-bottom: 24px;
            font-size: clamp(20px, 2.86vw, 24px);
        }
        .p{
            margin-bottom: 24px;
            font-size: clamp(14px, 1.95vw, 16px);

            p+p{
                margin-top: 24px;
            }
        }

        a{
            background: var(--color-accent);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
        }
    }

    @media (max-width: 1024px) {
        .text{
            margin-left: 0;
        }
    }

    @media (max-width: 850px) {
        flex-direction: ${props => props.reverse ? 'column' : 'column-reverse'};
        gap: 32px;
        max-width: 500px;
        margin: 0 auto;

        .text .p{
            margin-bottom: ${props => props.reverse ? '0' : '24px'};
        }
    }
`

const Image = styled(GatsbyImage)`
`