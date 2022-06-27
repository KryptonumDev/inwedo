import React from "react"
import styled from "styled-components"

export default function Filter({ title, filters, active, set }) {

    const setFilter = (filter) => {
        if (active.includes(filter)) {
            const index = active.findIndex(el => el === filter)
            active.splice(index, 1)
            set([...active])
        } else {
            set([...active, filter])
        }
    }

    return (
        <Wrapper>
            <p>{title}</p>
            <Flex>
                <Item className={active.length ? '' : 'active'} onClick={() => { set([]) }}>
                    All
                </Item>
                {filters.map(el => (
                    <Item className={active.includes(el.slug) ? 'active' : ''} onClick={() => { setFilter(el.slug) }}>
                        {el.name}
                    </Item>
                ))}
            </Flex>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 0 0 16px 0;
    p{
        margin-bottom: 16px;
    }
`

const Flex = styled.div`
    display: flex;
    gap: clamp(8px, ${16 / 768 * 100}vw, 24px) clamp(8px, ${20 / 768 * 100}vw, 32px);
    align-items: center;
    flex-wrap: wrap;
`

const Item = styled.button`
    padding: 3px 19px;
    background-color: #EBF2F8;
    border: 1px solid #EBF2F8;
    border-radius: 8px;
    font-weight: 400;
    font-size: 12px;
    line-height: 213%;
    display: flex;
    align-items: center;
    text-align: center;
    font-feature-settings: 'ss01' on;
    position: relative;

    &.active{
        border: 1px solid transparent;
        &::after{
            right: -3px;
            left: -3px;
            bottom: -3px;
            top: -3px;

        }
    }

    &::after{
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background: var(--color-accent);
        border-radius: 10px;
        z-index: -1;
    }
`