import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Container } from "../../style"
import Filter from "./filter"
import Items from "./items"

export default function JoinUs({ data: { sectionTitle, categoryTitle, seniorityTitle, showOfferText, applyOfferText }, offers, seniority, categories }) {

    const [activeCategories, setActiveCategories] = useState([])
    const [activeSeniority, setActiveSeniority] = useState([])

    const [defautlArray] = useState(offers)
    const [filtredArray, setFiltredArray] = useState(offers)

    useEffect(() => {
        setFiltredArray(() => {
            const arr = []

            if (activeSeniority.length || activeCategories.length) {
                return defautlArray.filter(el => {
                    let isCategory = !activeCategories.length
                    let isSeniority = !activeSeniority.length

                    if (!isCategory) {
                        el.categoriesJob.nodes.every(inEl => {
                            if (activeCategories.includes(inEl.slug)) {
                                isCategory = true
                                return false
                            }
                            return true
                        })
                    }

                    if (!isSeniority) {
                        el.seniority.nodes.every(inEl => {
                            if (activeSeniority.includes(inEl.slug)) {
                                isSeniority = true
                                return false
                            }
                            return true
                        })
                    }
                    debugger
                    return (isSeniority && isCategory)
                })
            }

            return defautlArray
        })
    }, [activeSeniority, activeCategories])

    return (
        <Wrapper>
            <Container>
                <Title>{sectionTitle}</Title>
                <Filter title={categoryTitle} filters={categories} set={setActiveCategories} active={activeCategories} />
                <Filter title={seniorityTitle} filters={seniority} set={setActiveSeniority} active={activeSeniority} />
                <Items data={filtredArray} showOfferText={showOfferText} applyOfferText={applyOfferText} />
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);
`

const Title = styled.h2`
    text-align: center;
    position: relative;
    padding: 16px 0 0 0;    
    max-width: 540px; 
    margin: 0 auto clamp(32px, 6.25vw, 64px) auto;
    font-size: clamp(16px, 3.125vw, 24px);
    font-weight: 400;
    line-height: 151%;


    &::before{
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 0;
        width: 40px;
        height: 1px;
        background-color: var(--color-black);
    }
`
