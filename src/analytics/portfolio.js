export default {
    cta: {
        first: {
            'event': 'See_more',
            'section': 'homepage',
            'pageURL': '/',
            'buttonName': 'See all services',
            'location': 'top of the page'
        },
        second: {
            'empty': 'empty'
        }
    },
    inView: (items, from, to) => {
        const listItems = []
        items.map((el, index) => {
            if (index >= from && index <= to) {
                listItems.push({
                    'list': 'Services',
                    'name': '',
                    'brand ': 'inwedo.com',
                    'position': index + 1,
                    'category': '',
                    'variant': 'page-site',
                    'price': '88.53', //ilość znaków w artykule / 100
                    'id': 'post-3441', //idstrony
                    'dimension1': 'inwedo',
                    'dimension2': '18072022'
                })
            }
        })

        return {
            'event': 'listView',
            'ecommerce': {
                'currencyCode': 'PLN',
                'impressions': listItems
            }
        }
    }
}