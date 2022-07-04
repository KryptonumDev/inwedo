import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { urlSystem } from './../../contstants/urlSystem'
import { Container } from "../../style"

export default function Filter({ activeSearch, defaultPosts, setInputValue, inputValue, setFilter, categories: { nodes }, activeFilters, language, submitButtonText, searchInputPlaceholder, setSearch, matchingArticle, searchedPhrase }) {

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

    const [searchResults, changeSearchResults] = useState(0)

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

    useEffect(() => {
        let posts = defaultPosts.filter(el => el.blogPost.previewCard.previewTitle.toLowerCase().includes(inputValue.toLowerCase()))
        changeSearchResults(posts.length)
    }, [inputValue])

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const keyDown = (event) => {
        if (event.code === "Enter" && typeof window !== "undefined") {
            event.preventDefault()
            setSearch()

            const href = document.getElementById("posts")
            const offsetTop = href.offsetTop
           
            window.scroll({
              top: offsetTop,
              behavior: "smooth"
            });
        }
    }

    const search = () => {
        if (typeof window !== "undefined") {
            setSearch()

            const href = document.getElementById("posts")
            const offsetTop = href.offsetTop
           
            window.scroll({
              top: offsetTop,
              behavior: "smooth"
            });
        }
    }

    return (
        <Wrapper matchingArticle={matchingArticle} input={inputValue} postNumber={searchResults}>
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
                        <div>
                            <input onKeyDown={(e) => { keyDown(e) }} value={inputValue} placeholder={searchInputPlaceholder} onChange={handleChange} />
                        </div>
                        <button className="button" type="button" onClick={() => { search() }}>{submitButtonText}</button>
                    </form>
                </Content>
                {activeSearch !== ''
                    ? <SearchedPhrase>
                        {searchedPhrase} “{activeSearch}”
                    </SearchedPhrase>
                    : null}
            </Container>
        </Wrapper>
    )
}

const SearchedPhrase = styled.div`
    font-weight: 400;
    font-size: 18px;
    line-height: 151%;
    position: absolute;
    bottom: 0;
    z-index: -1;
    transform: translateY(calc(100% + clamp(24px, ${44 / 768 * 100}vw, 64px)));
`

const Wrapper = styled.div`
    margin-top: var(--margin-xl);
    position: relative;

    form{
        display: grid;
        grid-template-columns: 1fr auto;
        grid-gap: 16px;
        height: clamp(30px, ${36 / 768 * 100}vw, 48px);

        @media (max-width: 768px){
            max-width: 500px;
        }

        div{
            background: linear-gradient(84.56deg, #0B5CD6 12.23%, #21AEFC 94.22%);
            border-radius: 9px;
            position: relative;

            &::after{
                content:  '${props => props.postNumber} ${props => props.matchingArticle}';
                position: absolute;
                z-index: 0;
                left: 1px;
                right: 1px;
                bottom: 1px;
                top: 1px;
                background-color: #fff;
                border-top-left-radius: ${props => props.input !== '' ? 'unset' : '8px'};
                border-top-right-radius: ${props => props.input !== '' ? 'unset' : '8px'};
                border-bottom-left-radius: 8px;
                border-bottom-right-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                transform: ${props => props.input !== '' ? 'translateY(calc(100% + 1px))' : 'unset'};
                transition: transform .2s cubic-bezier(0.23, 1, 0.320, 1);
                box-shadow: var(--shadow);
            }
        }
    }

    input{
        margin-right: 16px;
        padding: 11px 16px;
        border-radius: 8px;
        position: relative;
        z-index: 2;
        border: none;
        height: calc(100% - 2px);
        width: calc(100% - 2px);
        box-sizing: border-box;
        margin-left: 1px;
        margin-top: 1px;

        &::before{
            content: "";
        }
    }

    button{
        border: none;
    }
`

const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 64px;

    @media (max-width: 768px) {
        grid-gap: 20px;
        grid-template-columns: 1fr;
        max-width: 530px;
    }
`

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: clamp(10px, ${13 / 768 * 100}vw, 16px) clamp(20px, ${26 / 768 * 100}vw, 32px);
`

const Item = styled.a`
    white-space: nowrap;
    padding: 2px clamp(9px, ${14 / 768 * 100}vw, 18px);
    border: 2px solid transparent;
    background: #EBF2F8;
    border-radius: 8px;
    text-transform: uppercase;
    font-weight: 400;
    font-size: clamp(8px, ${10 / 768 * 100}vw, 12px);
    line-height: 210%;

    &.active{
        position: relative;

        &::after{
            content: "";
            position: absolute;
            left: -3px;
            right: -3px;
            bottom: -3px;
            top: -3px;
            z-index: -1;
            border-radius: 9px;
            background: var(--color-accent);
        }
    }
`