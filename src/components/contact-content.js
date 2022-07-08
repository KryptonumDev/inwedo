import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"
import ContactForm from "./forms/contact-page"

export default function Content({ data: { textUnderTitle, pageTitle, form, contactPerson, map } }) {
    return (
        <Wrapper>
            <Container>
                <Titles>
                    <h1 className="h4 line">{pageTitle}</h1>
                    <p className="h1">{textUnderTitle}</p>
                </Titles>
                <Flex>
                    <Form>
                        <ContactForm data={form} />
                    </Form>
                    <OtherInform>
                        <Map>
                            <GatsbyImage className="image" image={map.mapImg.localFile.childImageSharp.gatsbyImageData} alt={map.mapImg.altText} />
                            <div className="content">
                                <p className="h3">{map.addressTitle}</p>
                                <div className="p" dangerouslySetInnerHTML={{ __html: map.addressText }} />
                            </div>
                        </Map>
                        <Person>
                            <p className="h3">{contactPerson.sectionTitle}</p>
                            <div className="content">
                                <GatsbyImage className="image" image={contactPerson.personAvatar.localFile.childImageSharp.gatsbyImageData} alt={contactPerson.personAvatar.altText} />
                                <div>
                                    <p className="h4">{contactPerson.personName}</p>
                                    <p className="p">{contactPerson.personPosition}</p>
                                    <a className="p link" href={'mailto:' + contactPerson.personEmail}>{contactPerson.personEmail}</a>
                                    <a className="p link" href={'tel:' + contactPerson.personPhone}>{contactPerson.personPhone}</a>
                                </div>
                            </div>
                        </Person>
                    </OtherInform>
                </Flex>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: 160px;
`

const Titles = styled.div`
    margin-bottom: 64px;

    .h4{
        margin-bottom: 16px;
        opacity: .55;
    }
`

const Flex = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const Map = styled.div`
    border-radius: 8px;
    box-shadow: var(--shadow);
    background-color: var(--color-white);
    .content{
        padding: 48px;

        .h3{
            margin-bottom: 16px;
        }
    }

    @media (max-width: 768px){
        .image{
            width: 100%;
            display: block;
        }
    }
`

const Person = styled.div`
    margin-top: 36px;

    .content{
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 32px;
        margin-top: 24px;

        .image{
            width: fit-content;
            height: fit-content;

            img{
                border-radius: 50%;
            }
        }

        a{
            display: block;
            font-weight: 300;
        }

        p.p{
            margin-bottom: 8px;
        }
    }
`

const OtherInform = styled.div`
    max-width: 635px;
    width: 100%;
    margin-top: 25px;

    @media (max-width: 768px){
        max-width: unset;
        margin-top: 48px;
    }
`

const Form = styled.div`
    max-width: 534px;
    margin-right: 32px;

    @media (max-width: 768px){
        max-width: unset;
        margin-right: 0;

    }
`