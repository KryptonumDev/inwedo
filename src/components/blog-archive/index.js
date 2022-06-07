import React, { useState } from "react"
import CallToAction from "../cta"
import Filter from "./filter"
import Post from "./first-post"
import PostGrid from "./post-grid"

export default function Archive({ data, cta, cta2, categories }) {

    // const [defaultPosts] = useState(data.nodes)
    // const [filtredPosts, changeFiltredPosts] = useState(data.nodes)


    return (
        <>
            <Filter categories={categories} data={data} />
            <Post data={filtredPosts[0]} />
            <PostGrid data={filtredPosts} from={1} to={3} />
            <CallToAction data={cta} />
            <PostGrid data={filtredPosts} from={4} to={6} />
            {filtredPosts.length < 5
                ? null
                : <CallToAction data={cta2} />
            }
            <PostGrid data={filtredPosts} from={7} to={9} />
            {filtredPosts.length < 5
                ? null
                : 'pagination'
            }
        </>
    )
}