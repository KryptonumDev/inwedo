import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { datalayerPush } from "../../helpers/datalayer"
import { Container } from "../../style"
import Filter from "./filter"
import Items from "./items"

export default function JoinUs({ data: { sectionTitle, categoryTitle, seniorityTitle, showOfferText, applyOfferText, noPostsText }, offers, seniority, categories, analytics, location }) {

    const [activeCategories, setActiveCategories] = useState([])
    const [activeSeniority, setActiveSeniority] = useState([])

    const [defautlArray] = useState(offers)
    const [filtredArray, setFiltredArray] = useState(offers)

    useEffect(() => {
        setFiltredArray(() => {
            if (activeSeniority.length || activeCategories.length) {
                let filtredArr = defautlArray.filter(el => {
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

                    return (isSeniority && isCategory)
                })
                let categoriesString = ''
                let seniorityString = ''
                activeCategories?.forEach((el, index) => {
                    if (index === 0) {
                        categoriesString += el
                    } else {
                        categoriesString += (" | " + el)
                    }
                });
                activeSeniority?.forEach((el, index) => {
                    if (index > 0) {
                        seniorityString += (' | ' + el)
                    } else {
                        seniorityString += el
                    }
                })
                if (!activeCategories.length) {
                    categoriesString = 'all'
                }
                if (!activeSeniority.length) {
                    seniorityString = 'all'
                }
                datalayerPush(analytics.productListView(filtredArr, categoriesString + ' | ' + seniorityString))
                return filtredArr
            }

            datalayerPush(analytics.productListView(defautlArray, 'Job Offer'))
            return defautlArray
        })
    }, [activeSeniority, activeCategories])

    return (
        <Wrapper id="offers-listing" >
            <Container>
                <Title>{sectionTitle}</Title>
                <Filter location={location} analytics={analytics} title={categoryTitle} altFilters={activeSeniority} filters={categories} set={setActiveCategories} active={activeCategories} />
                <Filter location={location} analytics={analytics} title={seniorityTitle} altFilters={activeCategories} filters={seniority} set={setActiveSeniority} active={activeSeniority} />
                {!!filtredArray.length
                    ? <Items analytics={analytics.productClick} data={filtredArray} showOfferText={showOfferText} applyOfferText={applyOfferText} />
                    : <NoPosts>
                        <span className='colored'>{noPostsText}</span>
                    </NoPosts>}
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


const NoPosts = styled.div`
    padding: 30px;
    width: fit-content;
    margin: 0 auto;
    margin-top: clamp(48px,7.291666666666667vw,64px);
    border-radius: 24px;
    background: var(--color-white);
    box-shadow: var(--shadow);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-sizing: border-box;

    span{
        font-weight: 400;
        font-size: clamp(20px, ${24 / 768 * 100}vw, 30px);
        line-height: 160%;
        max-width: 736px;
        margin: 0 auto;
        display: block;
        text-align: center;
    }
`