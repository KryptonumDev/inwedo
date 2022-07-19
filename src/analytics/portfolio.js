export default {
    cta: {
        first: (url) => {
            return {
                'empty': 'empty'
            }
        },
        second: (url) => {
            return {
                'event': 'See_more',
                'section': 'homepage',
                'pageURL': url ? url : '/',
                'buttonName': 'See all services',
                'location': 'top of the page'
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
                'variant': 'casestudies',
                'price': 'undefined',
                'id': el.id,
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
    loadMore: (url, count) => {
        return {
            'event': 'LoadMore',
            'action': 'click - Load More | ' + count,
            'buttonName': 'Load More',
            'pageURL': url ? url : '/',
        }
    }
}