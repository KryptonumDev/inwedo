import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { urlSystem } from './../../contstants/urlSystem'
import { Container } from "../../style"

export default function Filter({ setFilter, categories: { nodes }, activeFilters, language }) {

    const [arr, changeArr] = useState(() => {
        const a = []

        if (activeFilters !== null) {
            nodes.forEach(el => {
                if (activeFilters.includes(el.slug)) {
                    a.push({ ...el, active: true })
                } else {
                    a.push({ ...el, active: false })
                }
            })

            return a
        }

        return nodes
    })

    useEffect(() => {
        changeArr(() => {
            const a = []

            if (activeFilters !== null) {
                nodes.forEach(el => {
                    if (activeFilters.includes(el.slug)) {
                        a.push({ ...el, active: true })
                    } else {
                        a.push({ ...el, active: false })
                    }
                })

                return a
            }

            return nodes
        })
    }, [activeFilters])

    return (
        <Wrapper>
            <Container>
                <Content>
                    <Grid>
                        <Item href={urlSystem['Blog Archive'][language]} className={activeFilters === null ? 'active' : null} onClick={(e) => { setFilter(e, 'all') }}>
                            all
                        </Item>
                        {arr.map((el, index) => (
                            <Item href={urlSystem['category'][language] + el.slug} className={el.active ? 'active' : null} key={el.slug} onClick={(e) => { setFilter(e, el.slug) }}>
                                {el.name.substr(3)}
                            </Item>
                        ))}
                    </Grid>
                    <form>
                    </form>
                </Content>
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
`

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px 32px;
`

const Item = styled.a`
    white-space: nowrap;
    padding: 2px 18px;
    border: 2px solid transparent;
    background: #EBF2F8;
    border-radius: 8px;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 12px;
    line-height: 26px;

    &.active{
        border: 2px solid black;
    }
`