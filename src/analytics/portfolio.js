export default {
    cta: {
        first: (url) => {
            return {
                'empty': 'empty'
            }
        },
        second: (url) => {
            return {
                'event': 'contact',
                'section': 'Portfolio',
                'pageURL': url ? url : '/',
                'buttonName': 'Get an estimate',
                'location': 'bottom of the page'
            }
        }
    },
    inView: (items, filter) => {
        const listItems = []
        items.map((el, index) => {

            let category = ''
            el.categoriesPortfolio.nodes.forEach((el, index) => {
                if (index > 0) {
                    category += (' | ' + el.name)
                } else {
                    category += el.name
                }
            })

            listItems.push({
                'list': filter,
                'name': el.caseStudies.previewCard.previewTitle,
                'brand ': 'inwedo.com',
                'position': index + 1,
                'category': category ? category : 'none',
                'variant': 'post',
                'price': el.caseStudies.wordCount ? el.caseStudies.wordCount : 'word count field is empty',
                'id': el.guid,
                'dimension1': 'inwedo',
                'dimension2': '18072022'
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
    productClick: (item, index) => {
        let category = ''
        item.categoriesPortfolio.nodes.forEach((el, index) => {
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
                        'list': 'Portfolio'
                    },
                    'products': [{
                        'category': category ? category : 'none',
                        'name': item.caseStudies.previewCard.previewTitle,
                        'price': item.caseStudies.wordCount ? item.caseStudies.wordCount : 'word count field is empty',
                        'id': item.guid,
                        'variant': 'post',
                        'brand ': 'inwedo.com',
                        'position': index + 1
                    }]
                }
            },
        }
    },
    filter: (url, filter) => {
        return {
            'event': 'tag',
            'name': filter,
            'pageURL': url ? url : '/',
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