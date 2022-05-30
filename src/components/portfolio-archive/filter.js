import React from "react"
import styled from "styled-components"
import { Container } from "../../style"

export default function Filter({ data, currentFilter, currentSubFilter, changeFilters, changeCurrentSubFilter }) {
    return (
        <Wrapper>
            <Container>
                <MainGrid count={data.nodes.length + 1}>
                    <FilterItem slug={'all'} activeSlug={currentFilter} onClick={() => (changeFilters('all'))}>
                        All
                    </FilterItem>
                    {data.nodes.map(el => (
                        <FilterItem slug={el.slug} activeSlug={currentFilter} onClick={() => (changeFilters(el.slug))}>
                            <span className="h4">{el.name}</span>
                        </FilterItem>
                    ))}
                </MainGrid>
                {data.nodes.map(el => (
                    <SubGrid slug={el.slug} activeSlug={currentFilter}>
                        <SubFilterItem slug={'all'} activeSlug={currentSubFilter} onClick={() => (changeCurrentSubFilter('all'))}>
                            <span className="p">All</span>
                        </SubFilterItem>
                        {el.wpChildren.nodes.map(innerEl => (
                            <SubFilterItem slug={innerEl.slug} activeSlug={currentSubFilter} onClick={() => (changeCurrentSubFilter(innerEl.slug))}>
                                <span className="p">{innerEl.name}</span>
                            </SubFilterItem>
                        ))}
                    </SubGrid>
                ))}
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: 64px;
    margin-bottom: 128px;
`

const MainGrid = styled.div`
    position: relative;
    max-width: 1020px;
    margin: 0 auto 32px auto;
    display: grid;
    grid-gap: 48px;
    grid-template-columns: repeat(${props => props.count}, 1fr);
    &::after{
        content: "";
        position: absolute;
        bottom: -1px;
        left: 0;
        right: 0;
        background: #EBF2F8;
        height: 1px;
    }
`

const FilterItem = styled.button`
    padding: 12px 0;
    text-align: center;
    position: relative;
    border: none;
    background-color: transparent;
    cursor: pointer;
    &::after{
        content: "";
        position: absolute;
        background: var(--color-accent);
        left: 0;
        right: 0;
        bottom: 0;
        height: 4px;
        transition: opacity .2s linear;
        opacity: ${props => props.slug === props.activeSlug ? '1' : '0'};
    }
`

const SubGrid = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition: opacity .2s linear;
    pointer-events: ${props => props.slug === props.activeSlug ? 'all' : 'none'};
    opacity: ${props => props.slug === props.activeSlug ? '1' : '0'};
`

const SubFilterItem = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 4px 20px;
    border-radius: 50px;
    background: ${props => props.slug === props.activeSlug ? 'var(--color-accent)' : '#EBF2F8'};
    span{
        white-space: nowrap;
        color: ${props => props.slug === props.activeSlug ? '#fff' : 'var(--color-black)'};
    }
`