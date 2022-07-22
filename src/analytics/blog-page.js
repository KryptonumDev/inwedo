export default {
    cta: (url, name) => {
        return {
            'event': 'contact',
            "section": "Blog Post",
            "pageURL": url ? url : '/',
            'buttonName': name ? name : 'error in src/analytics/blog-page.js',
            'location': 'blog post'
        }
    },
    productView: (item) => {
        let category = ''
        item.categories.nodes.forEach((el, index) => {
            if (index > 0) {
                category += (' | ' + el.name.substr(3))
            } else {
                category += el.name.substr(3)
            }
        })

        return {
            'event': 'ViewProduct',
            'ecommerce': {
                'detail': {
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
                        'position': 1,
                        'dimension1': item.authors.nodes[0].author.userName,
                        'dimension2': item.date
                    }]
                }
            },
        }
    },
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
    listView: (items) => {
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
        })

        return {
            'event': 'listView',
            'ecommerce': {
                'currencyCode': 'PLN',
                'impressions': listItems
            }
        }
    },
    scrollStart: (item) => {
        let category = ''
        item.categories.nodes.forEach((el, index) => {
            if (index > 0) {
                category += (' | ' + el.name.substr(3))
            } else {
                category += el.name.substr(3)
            }
        })
        return {
            'event': 'addToCart',
            'ecommerce': {
                'currencyCode': 'PLN',
                'add': {
                    'products': [{
                        'category': category ? category : 'none',
                        'name': item.blogPost.previewCard.previewTitle,
                        'price': 'none', 
                        'id': item.guid,
                        'variant': 'post',
                        'brand ': 'inwedo.com',
                        'position': 2
                    }]
                }
            }
        }
    },
    scroll: (item, step) => {
        let category = ''
        item.categories.nodes.forEach((el, index) => {
            if (index > 0) {
                category += (' | ' + el.name.substr(3))
            } else {
                category += el.name.substr(3)
            }
        })
        return {
            'event': 'checkout',
            'ecommerce': {
                'checkout': {
                    'actionField': { 'step': step, },
                    'products': [{
                        'category': category ? category : 'none',
                        'name': item.blogPost.previewCard.previewTitle,
                        'price': 'none',
                        'id': item.guid,
                        'variant': 'post',
                        'brand ': 'inwedo.com',
                        'position': 1
                    }]
                }
            }
        }
    },
    scrollEnd: (item) => {
        let category = ''
        item.categories.nodes.forEach((el, index) => {
            if (index > 0) {
                category += (' | ' + el.name.substr(3))
            } else {
                category += el.name.substr(3)
            }
        })
        return {
            'event': 'transactionComplete',
            'ecommerce': {
                'purchase': {
                    'actionField': {
                        'id': item.guid + '-' + item.formatedDate,
                        'revenue': 'none',
                        'tax': '0',
                        'shipping': '0'
                    },
                    'products': [{
                        'category': category ? category : 'none',
                        'name': item.blogPost.previewCard.previewTitle,
                        'price': 'none',
                        'id': item.guid,
                        'variant': 'post',
                        'brand ': 'inwedo.com',
                        'quantity': 1
                    }]
                }
            }
        }
    }
}