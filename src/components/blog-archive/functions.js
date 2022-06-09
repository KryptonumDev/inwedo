export const filterSearch = (location, defaultUrl) => {
    if (defaultUrl === location) {
        return null
    }
    if (location.includes('?')) {
        const categories = []
        const equalsId = []

        for (let i = 0; i < location.length; i++) {
            if (location[i] === '=' && location[i - 1] === 'r') {
                equalsId.push(i)
            }
        }

        equalsId.forEach((el, id, arr) => {
            const isLastElement = el == arr[arr.length - 1]
            if (isLastElement) {
                categories.push(location.substr(el + 1))
            } else {
                const categoryLength = (arr[id + 1] - 7) - (el + 1)
                categories.push(location.substr(el + 1, categoryLength))
            }
        })
        return categories
    }
    return null
}

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