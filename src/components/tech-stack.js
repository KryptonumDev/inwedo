import { Link } from "gatsby"
import React, { useEffect } from "react"
import styled from "styled-components"
import { Container } from "../style"
import { datalayerPush } from './../helpers/datalayer'

export default function TechStack({ data: { sectionTitle, technologies }, analytics }) {

    useEffect(() => {
        if (technologies[0]?.technologieUrl) {
            datalayerPush(analytics.inView(technologies))
        }
    }, [])

    return (
        <Wrapper>
            <Container>
                <h2 className="h3">{sectionTitle}</h2>
                <TechnologiesGrid>
                    {technologies.map((el,index) => (
                        <React.Fragment key={el.techologieIcon.altText}>
                            {el.technologieUrl
                                ? <TechnologiesLink onClick={() => {datalayerPush(analytics.onClick(el, index))}} to={el.technologieUrl} aria-label='link to technology page'>
                                    <img className="image" src={el.techologieIcon.localFile.publicURL} alt={el.techologieIcon.altText} />
                                </TechnologiesLink>
                                : <TechnologiesItem>
                                    <img className="image" src={el.techologieIcon.localFile.publicURL} alt={el.techologieIcon.altText} />
                                </TechnologiesItem>
                            }
                        </React.Fragment>
                    ))}
                </TechnologiesGrid>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);
    h2{
        text-align: center;
        max-width: 860px;
        margin: 0 auto 0 auto;
        padding-top: 16px;
        position: relative;
        font-size: clamp(20px, 2.86vw, 24px);

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
    }
`

const TechnologiesGrid = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(32px, 6.25vw, 64px);
    margin-top: clamp(32px, 6.25vw, 64px);

    @media (max-width: 876px) {
        flex-wrap: wrap;
        max-width: 80%;
        margin: 0 auto;
        margin-top: clamp(32px, 6.25vw, 64px);
    }

    @media (max-width: 350px) {
        max-width: unset;
    }
`

const TechnologiesLink = styled(Link)`
    width: clamp(55px, 9.11vw, 86px);
    height: clamp(55px, 9.11vw, 86px);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: var(--color-white);
    box-shadow: var(--shadow);
    transition: transform .2s cubic-bezier(0.39, 0.575, 0.565, 1);

    &:hover{
        transform: translateY(-6px);
    }

    .image{
        max-width: clamp(35px, 4.94vw, 54px);
        height: fit-content;
    }
`

const TechnologiesItem = styled.div`
    width: clamp(55px, 9.11vw, 86px);
    height: clamp(55px, 9.11vw, 86px);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: var(--color-white);
    box-shadow: var(--shadow);

    .image{
        max-width: clamp(35px, 4.94vw, 54px);
        height: fit-content;
    }
`