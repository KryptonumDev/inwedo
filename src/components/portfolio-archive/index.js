import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Filter from "./filter"
import PostsGrid from "./posts-grid"
import { useUrlUpdate } from './../../helpers/useUrlUpdate'
import { checkLanguageUrl } from "../../helpers/checkLanguageUrl"

export default function Archive({ parentCategories, children, posts, data, location }) {

    const [currentFilter, changeCurrentFilter] = useState('all')

    const [currentSubFilter, changeCurrentSubFilter] = useState('all')

    const changeFilters = (slug) => {
        changeCurrentFilter(slug)
        changeCurrentSubFilter('all')
    }

    const [showCount, changeShowCount] = useState(9)

    const [defaultPosts] = useState(posts.nodes)
    const [filtredPosts, changeFiltredPosts] = useState(posts.nodes)

    useEffect(() => {
        changeFiltredPosts(defaultPosts.filter(el => {
            if (currentSubFilter === 'all' && currentFilter === 'all') {
                return defaultPosts
            }

            if (currentSubFilter === 'all') {
                for (let i = 0; i < el.categoriesPortfolio.nodes.length; i++) {
                    if (el.categoriesPortfolio.nodes[i].slug === currentFilter) {
                        changeCurrentFilter(currentFilter)
                        return true
                    }
                }
            } else {
                for (let i = 0; i < el.categoriesPortfolio.nodes.length; i++) {
                    if (el.categoriesPortfolio.nodes[i].slug === currentSubFilter) {
                        return true
                    }
                }
            }

            return false
        }))
    }, [currentFilter, currentSubFilter])

    return (
        <>
            <Filter
                data={parentCategories}
                currentFilter={currentFilter}
                currentSubFilter={currentSubFilter}
                changeFilters={changeFilters}
                changeCurrentSubFilter={changeCurrentSubFilter}
            />
            {filtredPosts.length > 0
                ? <PostsGrid data={filtredPosts} from={'0'} to={'3'} />
                : null}
            {children}
            {filtredPosts.length > 0
                ? <PostsGrid data={filtredPosts} from={'4'} to={showCount} />
                : null}
            {filtredPosts.length > changeShowCount + 1
                ? <Button onClick={() => { changeShowCount(showCount + 4) }} className="button">{data.loadMoreText}</Button>
                : null}
        </>
    )
}

const Button = styled.button`
    margin: 64px auto 0 auto;
`