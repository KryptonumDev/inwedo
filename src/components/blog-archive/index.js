import React, { useEffect, useState } from "react"
import { checkLanguageUrl } from "../../helpers/checkLanguageUrl"
import CallToAction from "../cta"
import Filter from "./filter"
import PostGrid from "./post-grid"
import Pagination from "./pagination"
import { fakeRelocate, resetFiltredPosts, resetSearchedPosts } from "./functions"
import styled from "styled-components"
import { datalayerPush } from '../../helpers/datalayer'

export default function Archive({ location, data, cta, cta2, categories, language, otherData, analytics }) {

    const [defaultUrl] = useState(checkLanguageUrl(location, '/blog/'))

    const [currentPage, changeCurrentPage] = useState(() => {
        const page = location.pathname.slice(defaultUrl.length).slice(0, -1)
        if (page === '') {
            return 1
        }
        return +page
    })

    const [isAltLayout, setIsAltLayout] = useState(currentPage !== 1)
    const [activeFilters, changeActiveFilters] = useState(null)
    const [activeSearch, setActiveSearch] = useState('')
    const [inputValue, setInputValue] = useState('')


    const [defaultPosts] = useState(() => {
        let unfiltredPosts = [...data.nodes]
        let posts = []
        let featuredId

        for (let i = 0; i < data.nodes.length; i++) {
            if (data.nodes[i].blogPost.isfeaturedPost === true) {
                featuredId = i
                break
            }
        }

        posts.push(...unfiltredPosts.splice(featuredId, 1))
        posts = [...posts, ...unfiltredPosts]

        return posts
    })
    const [filtredPosts, changeFiltredPosts] = useState(resetFiltredPosts(defaultPosts, activeFilters))

    const setFilter = (e, filter) => {
        e.preventDefault()
        let newArr
        if (filter === 'all') {
            newArr = null  // no filters
        } else if (activeFilters === '') {
            newArr = [filter]
        } else if (activeFilters !== null) {
            const index = activeFilters.findIndex(el => el === filter)
            if (index === -1) {
                newArr = [...activeFilters, filter] // add filter
            } else {
                activeFilters.splice(index, 1)
                if (activeFilters.length) {
                    newArr = [...activeFilters] // delete filter
                } else {
                    newArr = null // no filters
                }
            }
        } else {
            newArr = [filter] // add first filter
        }

        inView('filter', newArr)
        datalayerPush(analytics.filter(defaultUrl, newArr))
        changeActiveFilters(newArr)
        setInputValue('')
        setActiveSearch('')
        changeFiltredPosts(resetFiltredPosts(defaultPosts, newArr))
        setIsAltLayout(currentPage !== 1 || newArr !== null)
        changeCurrentPage(1)
    }

    const setSearch = () => {
        if (inputValue === '') {
            setActiveSearch('')
            changeActiveFilters(null)
            setIsAltLayout(false)
        } else {
            changeActiveFilters('')
            setActiveSearch(inputValue)
            setIsAltLayout(true)
        }

        inView('search', inputValue)
        changeFiltredPosts(resetSearchedPosts(defaultPosts, inputValue))
        setInputValue('')
        changeCurrentPage(1)
    }

    const setPage = (page) => {
        changeCurrentPage(page)
        if (activeFilters === null && activeSearch === '') {
            datalayerPush(analytics.pagination(defaultUrl + currentPage + '/', page, 'pagination'))
        } else if (activeFilters !== null) {
            datalayerPush(analytics.pagination(defaultUrl, page, 'pagination with filter'))
        } else if (activeSearch !== '') {
            datalayerPush(analytics.pagination(defaultUrl, page, 'pagination with search'))
        }
    }

    useEffect(() => {
        const newURL = defaultUrl + currentPage + '/'
        if (activeFilters === null && activeSearch === '') {
            inView('default')
            if (currentPage !== 1) {
                fakeRelocate(newURL, location)
            } else {
                fakeRelocate(defaultUrl, location)
            }
        } else if (activeFilters !== null) {
            inView('filter', activeFilters)
            fakeRelocate(defaultUrl, location)
        } else if (activeSearch !== '') {
            inView('search', activeSearch)
            fakeRelocate(defaultUrl, location)
        }
        setIsAltLayout(currentPage !== 1 || activeFilters !== null || activeSearch !== '')
    }, [currentPage])

    const inView = (type, phrase) => {
        let filter = ''
        const items = []

        if (type === 'filter') {
            let filterName = ''
            phrase?.forEach((el, index) => {
                if (index === 0) {
                    filterName += el
                } else {
                    filterName += (" | " + el)
                }
            });
            if (filter === null) {
                filterName = 'all'
            }
            filter = 'Filter: ' + filterName
            
            let filtered = resetFiltredPosts(defaultPosts, phrase)
            filtered.forEach((el, index) => {
                if (
                    (isAltLayout && index >= (9 * (currentPage - 1) + (currentPage - 1)) && index <= (9 * (currentPage) + (currentPage - 1)))
                    ||
                    (!isAltLayout && index >= 0 && index <= 9)
                ) {
                    items.push(el)
                }
            })
        } else if (type === 'search') {
            filter = 'Search: ' + phrase
            
            let filtered = resetSearchedPosts(defaultPosts, inputValue)
            filtered.forEach((el, index) => {
                if (
                    (isAltLayout && index >= (9 * (currentPage - 1) + (currentPage - 1)) && index <= (9 * (currentPage) + (currentPage - 1)))
                    ||
                    (!isAltLayout && index >= 0 && index <= 9)
                ) {
                    items.push(el)
                }
            })
        } else if (type === 'default') {
            filter = 'Blog'
            defaultPosts.forEach((el, index) => {
                if (
                    (isAltLayout && index >= (9 * (currentPage - 1) + (currentPage - 1)) && index <= (9 * (currentPage) + (currentPage - 1)))
                    ||
                    (!isAltLayout && index >= 0 && index <= 9)
                ) {
                    items.push(el)
                }
            })
        }

        datalayerPush(analytics.listView(items, filter))
    }

    return (
        <div>
            <Filter activeSearch={activeSearch} matchingArticle={otherData.matchingArticlesText} searchedPhrase={otherData.searchedPhraseText} defaultPosts={defaultPosts} inputValue={inputValue} setInputValue={setInputValue} setSearch={setSearch} submitButtonText={otherData.submitButtonText} searchInputPlaceholder={otherData.searchInputPlaceholder} language={language} setFilter={setFilter} categories={categories} data={data} activeFilters={activeFilters} />
            {!!filtredPosts.length
                ? <>
                    {isAltLayout
                        ? (<>
                            <PostGrid id='posts' analytics={analytics} isAltLayout={isAltLayout} data={filtredPosts} from={0} to={9} currentPage={currentPage} />
                            {filtredPosts.length < 5
                                ? null
                                : <Pagination defaultUrl={defaultUrl} changeCurrentPage={setPage} currentPage={currentPage} itemCount={filtredPosts.length} />}
                            <CallToAction data={cta} />
                        </>)
                        : (<>
                            <PostGrid id='posts' analytics={analytics} isAltLayout={isAltLayout} data={defaultPosts} from={0} to={3} />
                            <CallToAction data={cta} />
                            <PostGrid analytics={analytics} isDefault={true} isAltLayout={isAltLayout} data={defaultPosts} from={4} to={6} />
                            {defaultPosts.length < 5
                                ? null
                                : <CallToAction data={cta2} />
                            }
                            <PostGrid analytics={analytics} isDefault={true} isAltLayout={isAltLayout} data={defaultPosts} from={7} to={9} />
                            {defaultPosts.length < 5
                                ? null
                                : <Pagination defaultUrl={defaultUrl} changeCurrentPage={setPage} currentPage={currentPage} itemCount={defaultPosts.length} />}
                        </>)}
                </>
                : <NoPosts id='posts'>
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