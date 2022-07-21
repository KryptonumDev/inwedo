export default {
    cta: {
        first: (url) => {
            return {
                'event': 'contact',
                'section': 'portfolio post',
                'pageURL': url ? url : '/',
                'buttonName': "Let's talk!",
                'location': 'middle of the page',
                'position': '1'
            }
        },
        second: (url) => {
            return {
                'event': 'contact',
                'section': 'portfolio post',
                'pageURL': url ? url : '/',
                'buttonName': "Let's talk!",
                'location': 'bottom of the page',
                'position': '2'
            }
        },
    },
    inView: (items) => {
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
                'list': 'other posts',
                'name': el.caseStudies.previewCard.previewTitle,
                'brand ': 'inwedo.com',
                'position': index + 1,
                'category': category ? category : 'none',
                'variant': 'post',
                'price': 'none',
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
    productView: (item) => {
        let category = ''
        item.categoriesPortfolio.nodes.forEach((el, index) => {
            if (index > 0) {
                category += (' | ' + el.name)
            } else {
                category += el.name
            }
        })
        return {
            'event': 'ViewProduct',
            'ecommerce': {
                'detail': {
                    'actionField': {
                        'list': 'Portfolio'
                    },
                    'products': [{
                        'category': category ? category : 'none',
                        'name': item.caseStudies.previewCard.previewTitle,
                        'price': 'none',
                        'id': item.guid,
                        'variant': 'post',
                        'brand ': 'inwedo.com',
                        'position': 1,
                        'dimension1': 'inwedo',
                        'dimension2': '18072022'
                    }]
                }
            }
        }
    }
}