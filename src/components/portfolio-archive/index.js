import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Filter from "./filter"
import PostsGrid from "./posts-grid"
import { datalayerPush } from '../../helpers/datalayer'

export default function Archive({ parentCategories, children, posts, data, location, analytics }) {

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
        if (currentSubFilter === 'all' && currentFilter === 'all') {
            dataleyerAnalytics(defaultPosts, 'all', showCount)
            changeFiltredPosts(defaultPosts)
        } else {
            let filtredPosts = defaultPosts.filter(el => {
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
            })

            dataleyerAnalytics(filtredPosts, currentFilter + ' | ' + currentSubFilter, showCount)
            changeFiltredPosts(filtredPosts)
        }
    }, [currentFilter, currentSubFilter])

    const LoadMore = () => {
        let clickCount = (showCount - 5) / 4
        datalayerPush(analytics.loadMore(location, clickCount))
        changeShowCount(showCount + 4)

        if (currentSubFilter === 'all' && currentFilter === 'all') {
            dataleyerAnalytics(defaultPosts, 'all', showCount+4)
        } else {
            dataleyerAnalytics(defaultPosts, currentFilter + ' | ' + currentSubFilter, showCount+4)
        }
    }

    const dataleyerAnalytics = (posts, filter, loadCount) => {
        const showedPosts = []
        posts.forEach((el, index) => {
            if (index <= loadCount) {
                showedPosts.push(el)
            }
        })
        datalayerPush(analytics.inView(showedPosts, filter))
    }

    return (
        <>
            <Filter
                defaultPosts={defaultPosts}
                data={parentCategories}
                currentFilter={currentFilter}
                currentSubFilter={currentSubFilter}
                changeFilters={changeFilters}
                changeCurrentSubFilter={changeCurrentSubFilter}
            />
            {!!filtredPosts.length
                ? <>
                    {filtredPosts.length > 0
                        ? <PostsGrid analytics={analytics} data={filtredPosts} from={'0'} to={'3'} />
                        : null}
                    {children}
                    {filtredPosts.length > 0
                        ? <PostsGrid analytics={analytics} data={filtredPosts} from={'4'} to={showCount} />
                        : null}
                    {filtredPosts.length > showCount + 1
                        ? <Button onClick={() => { LoadMore() }} className="button">{data.loadMore}</Button>
                        : null}
                </>
                : <NoPosts id='posts'>
                    <span className='colored'>{data.noPostsText}</span>
                </NoPosts>
            }
        </>
    )
}

const Button = styled.button`
    margin: 64px auto 0 auto;
    border: none;
`

const NoPosts = styled.div`
    padding: 30px 130px;
    width: fit-content;
    margin: 64px auto 0 auto;
    border-radius: 24px;
    background: var(--color-white);
    box-shadow: var(--shadow);
    display: flex;
    justify-content: center;
    align-items: center;

    span{
        font-weight: 400;
        font-size: clamp(16px, ${24 / 768 * 100}vw, 30px);
        line-height: 160%;
    }

    @media (max-width: 640px) {
        padding: 30px;
    }
`