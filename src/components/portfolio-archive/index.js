import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Filter from "./filter"
import PostsGrid from "./posts-grid"

export default function Archive({ parentCategories, children, posts, data }) {

    const [currentFilter, changeCurrentFilter] = useState('all')
    const [currentSubFilter, changeCurrentSubFilter] = useState('all')

    const changeFilters = (slug) => {
        changeCurrentFilter(slug)
        changeCurrentSubFilter('all')
    }

    const [defaultPosts] = useState(posts.nodes)
    const [filtredPosts, changeFiltredPosts] = useState(posts.nodes)
    const [showCount, changeShowCount] = useState(9)

    useEffect(() => {
        changeFiltredPosts(defaultPosts.filter(el => {
            if (currentSubFilter === 'all' && currentFilter === 'all') {
                return defaultPosts
            }

            if (currentSubFilter === 'all') {
                for (let i = 0; i < el.categoriesPortfolio.nodes.length; i++) {
                    if (el.categoriesPortfolio.nodes[i].slug === currentFilter) {
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
            <PostsGrid data={filtredPosts} from={'0'} to={'3'} />
            {children}
            <PostsGrid data={filtredPosts} from={'4'} to={showCount} />
            {filtredPosts.length > changeShowCount + 1
                ? <Button onClick={() => { changeShowCount(showCount + 4) }} className="button">{data.loadMoreText}</Button>
                : null}
        </>
    )
}

const Button = styled.button`
    margin: 64px auto 0 auto;
`