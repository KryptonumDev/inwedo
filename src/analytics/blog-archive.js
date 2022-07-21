export default {
    cta: {
        first: (url) => {
            return {
                'empty': 'empty'
            }
        },
        second: (url) => {
            return {
                'empty': 'empty'
            }
        }
    },
    filter: (url, filter) => {
        let filterName = ''
        filter?.forEach((el, index) => {
            if (index === 0) {
                filterName += el
            } else {
                filterName += (" | " + el)
            }
        });
        if (filter === null) {
            filterName = 'all'
        }

        return {
            'event': 'tag',
            'name': filterName,
            'pageURL': url ? url : '/',
        }
    },
    pagination: (url, page, event) => {
        return {
            'event': event,
            'action': 'click - Page | ' + page,
            'buttonName': 'Page ' + page,
            'pageURL': url ? url : '/',
        }
    },
    listView: (items, filter) => {
        const listItems = []
        items.map((el, index) => {

            let category = ''
            el.categories.nodes.forEach((el, index) => {
                if (index > 0) {
                    category += (' | ' + el.name)
                } else {
                    category += el.name
                }
            })

            listItems.push({
                'list': filter,
                'name': el.blogPost.previewCard.previewTitle,
                'brand ': 'inwedo.com',
                'position': index + 1,
                'category': category ? category : 'none',
                'variant': 'post',
                'price': 'none',
                'id': el.guid,
                'dimension1': el.authors.nodes[0].author.userName,
                'dimension2': el.date
            })
        })

        if (!listItems.length) {
            listItems.push({
                'list': filter + ' | empty'
            })
        }

        return {
            'event': 'listView',
            'ecommerce': {
                'currencyCode': 'PLN',
                'impressions': listItems
            }
        }
    },
    productClick: (item, index) => {
        let category = ''
        item.categories.nodes.forEach((el, index) => {
            if (index > 0) {
                category += (' | ' + el.name)
            } else { 
                category += el.name
            }
        })

        return {
            'event': 'productClick',
            'ecommerce': {
                'click': {
                    'actionField': {
                        'list': 'Blog'
                    },
                    'products': [{
                        'category': category ? category : 'none',
                        'name': item.blogPost.previewCard.previewTitle,
                        'price': 'none',
                        'id': item.guid,
                        'variant': 'post',
                        'brand ': 'inwedo.com',
                        'position': index + 1
                    }]
                }
            },
        }
    },
    socialMedia: (name, url) => {
        return {
            'event': 'SM_click',
            'buttonName': name,
            'type': 'Let’s stay in touch!',
            'pageURL': url,
        }
    }
}