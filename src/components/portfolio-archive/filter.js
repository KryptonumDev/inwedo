import React from "react"
import styled from "styled-components"
import { Container } from "../../style"

export default function Filter({ data, currentFilter, currentSubFilter, changeFilters, changeCurrentSubFilter }) {
    return (
        <Wrapper>
            <LocContainer>
                <MainGrid count={data.nodes.length + 1}>
                    <FilterItem slug={'all'} activeSlug={currentFilter} onClick={() => (changeFilters('all'))}>
                        <span className="h4">All</span>
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
            </LocContainer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: 64px;
    margin-bottom: 128px;
`

const LocContainer = styled(Container)`
    padding: 0;
`

const MainGrid = styled.div`
    position: relative;
    max-width: 1020px;
    margin: 0 auto 32px auto;
    display: grid;
    grid-gap: clamp(0px, 2.08vw, 48px);
    grid-template-columns: repeat(${props => props.count}, 1fr);
    &::after{
        content: "";
        position: absolute;
        bottom: 0px;
        left: 0;
        right: 0;
        background: #EBF2F8;
        height: 3px;
    }

    @media (max-width: 540px) {
        grid-gap: 0;
    }

    span{
        font-size: clamp(14px, 2.08vw, 18px);
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
        height: 3px;
        z-index: 10;
        transition: opacity .2s linear;
        opacity: ${props => props.slug === props.activeSlug ? '1' : '0'};
    }
`

const SubGrid = styled.div`
    flex-wrap: wrap;
    width: 100%;
    box-sizing: border-box;
    padding: 0 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: clamp(16px, 3.125vw, 32px);
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
        font-size: clamp(14px, 2.08vw, 16px);
    }
`