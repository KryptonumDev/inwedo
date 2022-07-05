export const resetFiltredPosts = (defaultPosts, activeFilters) => {
    if (activeFilters !== null) {
        return defaultPosts.filter(el => {
            let itemCategories = el.categories.nodes
            for (let i = 0; i < itemCategories.length; i++) {
                for (let j = 0; j < activeFilters.length; j++) {
                    if (itemCategories[i].blogCategory.categoryUrl === activeFilters[j]) {
                        return true
                    }
                }
            }
        })
    }
    return defaultPosts
}

export const resetSearchedPosts = (defaultPosts, search) => {
    if(search !== null){
        return defaultPosts.filter(el => {
            let isCategory = false
            el.categories.nodes.forEach(el => {
                if(el.name.toLowerCase().includes(search.toLowerCase())){
                    isCategory = true
                }
            })
            let isTitle = el.blogPost.previewCard.previewTitle.toLowerCase().includes(search.toLowerCase())
            let isText = el.blogPost.previewCard.previewText.toLowerCase().includes(search.toLowerCase())

            return isCategory || isTitle || isText
        })
    }
    return defaultPosts
}

export const fakeRelocate = (url, location) => {
    if (typeof window !== `undefined` && typeof url !== `undefined`) {
        window.history.pushState({}, '', url);
    }
}