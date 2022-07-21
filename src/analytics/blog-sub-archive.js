export default {
    productClick: (item, index) => {
        let category = ''
        item.categories.nodes.forEach((el, index) => {
            if (index > 0) {
                category += (' | ' + el.name.substr(3))
            } else {
                category += el.name.substr(3)
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
    listView: (items, showCount, step) => {
        const listItems = []
        items.map((el, index) => {

            let category = ''
            el.categories.nodes.forEach((el, index) => {
                if (index > 0) {
                    category += (' | ' + el.name.substr(3))
                } else {
                    category += el.name.substr(3)
                }
            })

            if (step) {
                if (index >= showCount && index < showCount + step) {
                    listItems.push({
                        'list': 'other posts',
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
                }
            } else {
                if (index < showCount) {
                    listItems.push({
                        'list': 'other posts',
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
                }
            }
        })

        return {
            'event': 'listView',
            'ecommerce': {
                'currencyCode': 'PLN',
                'impressions': listItems
            }
        }
    },
    loadMore: (url, count) => {
        return {
            'event': 'LoadMore',
            'action': 'click - Load More | ' + count,
            'buttonName': 'Load More',
            'pageURL': url ? url : '/',
        }
    }
}