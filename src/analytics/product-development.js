export default {
    hero: {
        "event": "contact",
        "section": "Services",
        "pageURL": "/",
        "buttonName": "Get your product development plan",
        "location": "top of the page"
    },
    cta: {
        first: {
            'event': 'See_more',
            'section': 'Services',
            'pageURL': '/',
            'buttonName': 'Learn more about how we work',
            'location': 'top of the page'
        },
        second: {
            'event': 'contact',
            'section': 'Services',
            'pageURL': '/',
            'buttonName': 'Let’s talk',
            'location': 'middle of the page'
        },
        third: {
            'event': 'contact',
            'section': 'Services',
            'pageURL': '/',
            'buttonName': 'Let’s talk',
            'location': 'bottom of the page'
        }
    },
    caseStudies: (position, name) => {
        return {
            'event': 'learn_more',
            'section': 'Services',
            'pageURL': '/',
            'buttonName': 'Read case study',
            'location': 'middle of the page',
            'type': 'case study',
            'name': name,
            'position': position
        }
    },
    related: (items) => {
        const listItems = []
        items.map((el, index) => {
            listItems.push({
                'list': 'Services',
                'name': el.servisTitle,
                'brand ': 'inwedo.com',
                'position': index + 1,
                'category': el.servisTitle,
                'variant': 'page-site',
                'price': '88.53', //ilość znaków w artykule / 100
                'id': 'post-3441', //idstrony
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
    }
}