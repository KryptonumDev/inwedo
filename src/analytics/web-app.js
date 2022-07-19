export default {
    hero: {
        "event": "contact",
        "section": "Services",
        "pageURL": "/",
        "buttonName": "Schedule a consultation",
        "location": "top of the page"
    },
    technologies: (items) => {
        const listItems = []
        items.map((el, index) => {
            listItems.push({
                'list': 'Services',
                'name': el.cardTitle,
                'brand ': 'inwedo.com',
                'position': index + 1,
                'category': el.cardTitle,
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
    },
    cta: {
        first: {
            'event': 'contact',
            'section': 'Services',
            'pageURL': '/',
            'buttonName': 'Get our web development advice',
            'location': 'middle of the page'
        },
        second: {
            'event': 'contact',
            'section': 'Services',
            'pageURL': '/',
            'buttonName': 'Let’s talk',
            'location': 'bottom of the page'
        }
    },
    successStories: (position, name) => {
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
    developmentTypes: (items) => {
        const listItems = []
        items.map((el, index) => {
            listItems.push({
                'list': 'Services',
                'name': el.typeTitle,
                'brand ': 'inwedo.com',
                'position': index + 1,
                'category': el.typeTitle,
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
    },
}