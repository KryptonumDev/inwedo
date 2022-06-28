import React, { useEffect, useState } from "react"
import { checkLanguageUrl } from "../../helpers/checkLanguageUrl"
import { useUrlUpdate } from "../../helpers/useUrlUpdate"
import CallToAction from "../cta"
import Filter from "./filter"
import Post from "./first-post"
import PostGrid from "./post-grid"
import { navigate } from "gatsby"
import Pagination from "./pagination"
import { filterSearch, resetFiltredPosts } from "./functions"
import styled from "styled-components"

export default function Archive({ location, data, cta, cta2, categories, language, otherData }) {

    const [defaultUrl] = useState(checkLanguageUrl(location, '/blog/'))
    const [isAltLayout, setIsAltLayout] = useState((location.pathname === defaultUrl && location.search === "") ? false : true)

    const [activeFilters, changeActiveFilters] = useState(filterSearch(location.search, defaultUrl))

    const [currentPage, changeCurrentPage] = useState(() => {
        if (location.search.includes('?')) {
            let pageId = null
            for (let i = 0; i < location.search.length; i++) {
                if (location.search[i] === '=' && location.search[i - 1] === 'e') {
                    pageId = i
                }
            }
            if (pageId !== null) {
                let a = +location.search.substr(pageId + 1)
                return a
            }
            return 1
        } else {
            let page = location.pathname.substr(defaultUrl.length)

            if (page !== "") {
                return +page
            }
            return 1
        }
    })


    const [newUrl, setNewUrl] = useState(() => {
        if (location.search !== "") {
            return defaultUrl + location.search
        }
        if (currentPage !== 1) {
            return defaultUrl + currentPage
        }
        return defaultUrl
    })

    const [defaultPosts] = useState(data.nodes)
    const [filtredPosts, changeFiltredPosts] = useState(resetFiltredPosts(defaultPosts, activeFilters))

    const setFilter = (e, filter) => {
        e.preventDefault()

        let combinedUrl
        if (filter === 'all') { // choice all 
            combinedUrl = defaultUrl

        } else if (location.search === '') { // choice first filter
            combinedUrl = defaultUrl + '?filter=' + filter

        } else if (location.search.includes(('?filter=' + filter))) { // unchoice first filter

            combinedUrl = newUrl.replace(('?filter=' + filter), '')

            if (!combinedUrl.includes('?')) { // check to do another first filter

                let nextFilterId

                for (let i = 0; i < combinedUrl.length; i++) {
                    if (combinedUrl[i] === '&') {
                        nextFilterId = i
                        break
                    }
                }
                if (nextFilterId) {
                    for (let j = 0; j < combinedUrl.length; j++) {
                        if (combinedUrl[j] === '&' && combinedUrl[j + 1] === 'p') {
                            combinedUrl = combinedUrl.substr(0, j)
                            break
                        }
                    }

                    combinedUrl = combinedUrl.substr(0, nextFilterId) + '?' + combinedUrl.substr(nextFilterId + 1)
                } else {
                    combinedUrl = defaultUrl
                }
            }

        } else if (location.search.includes(('&filter=' + filter))) { // unchice secondary filter

            combinedUrl = newUrl.replace(('&filter=' + filter), '')
            if (combinedUrl.includes('&page')) {
                combinedUrl = combinedUrl.replace(('&page=' + currentPage), '')
            }
        } else { // add secondary filter
            combinedUrl = newUrl + '&filter=' + filter
            if (combinedUrl.includes('&page')) {
                combinedUrl = combinedUrl.replace(('&page=' + currentPage), '')
            }
        }

        changeActiveFilters(filterSearch(combinedUrl, defaultUrl))
        setNewUrl(combinedUrl)
    }

    const setPage = (page) => {
        changeCurrentPage(page)
        if (!location.search.includes('?')) {
            if (page === 1) {
                setNewUrl(defaultUrl)
            } else {
                setNewUrl(defaultUrl + page)
            }
        } else if (!location.search.includes('page=')) {
            setNewUrl(defaultUrl + location.search + '&page=' + page)
        } else {
            let pageId = null
            let newSearch

            for (let i = 0; i < location.search.length; i++) {
                if (location.search[i] === '=' && location.search[i - 1] === 'e') {
                    pageId = i + 1
                }
            }

            if (page !== 1) {
                newSearch = defaultUrl + location.search.substr(0, pageId) + page

            } else {
                newSearch = defaultUrl + location.search.substr(0, pageId - 6)
            }

            setNewUrl(newSearch)
        }
    }

    useEffect(() => {
        changeFiltredPosts(resetFiltredPosts(defaultPosts, activeFilters))

        if (location.search.includes('page') && !newUrl.includes('page')) {
            changeCurrentPage(1)
        }

    }, [activeFilters])

    useEffect(() => {
    }, [currentPage])

    useEffect(() => {
        setIsAltLayout((location.pathname === defaultUrl && !newUrl.includes('?')) ? false : true)
        navigate(newUrl)
    }, [newUrl])

    useUrlUpdate(newUrl)

    return (
        <div>
            <Filter language={language} setFilter={setFilter} categories={categories} data={data} activeFilters={activeFilters} />
            {!!filtredPosts.length
                ? <>
                    <Post data={filtredPosts[0]} />
                    {isAltLayout
                        ? (
                            <>
                                <PostGrid data={filtredPosts} from={1} to={9} />
                                {
                                    filtredPosts.length < 5
                                        ? null
                                        : <Pagination changeCurrentPage={setPage} currentPage={currentPage} itemCount={filtredPosts.length} />
                                }
                                <CallToAction data={cta} />
                            </>
                        )
                        : (
                            <>
                                <PostGrid data={filtredPosts} from={1} to={3} />
                                <CallToAction data={cta} />
                                <PostGrid data={filtredPosts} from={4} to={6} />
                                {filtredPosts.length < 5
                                    ? null
                                    : <CallToAction data={cta2} />
                                }
                                <PostGrid data={filtredPosts} from={7} to={9} />
                                {
                                    filtredPosts.length < 5
                                        ? null
                                        : <Pagination changeCurrentPage={setPage} currentPage={currentPage} itemCount={filtredPosts.length} />
                                }
                            </>
                        )
                    }
                </>
                : <NoPosts>
                    <span className='colored'>{otherData.noPostsText}</span>
                </NoPosts>}

        </div>
    )
}

const NoPosts = styled.div`
    padding: 30px 130px;
    width: fit-content;
    margin: 128px auto 0 auto;
    border-radius: 24px;
    background: var(--color-white);
    box-shadow: var(--shadow);
    display: flex;
    justify-content: center;
    align-items: center;

    span{
        font-weight: 400;
        font-size: 29.7931px;
        line-height: 160%;
    }
`