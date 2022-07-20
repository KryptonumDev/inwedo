export default {
    hero: (url) => {
        return {
            "event": "contact",
            "section": "Services | Web App",
            "pageURL": url ? url : '/',
            "buttonName": "Schedule a consultation",
            "location": "top of the page"
        }
    },
    technologies: (items) => {
        const listItems = []
        items.map((el, index) => {
            listItems.push({
                'list': 'Services | Web App',
                'name': el.cardTitle,
                'brand ': 'inwedo.com',
                'position': index + 1,
                'category': el.cardTitle,
                'variant': 'page-site',
                'price': 'none',
                'id': el.button.url,
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
        first: (url) => {
            return {
                'event': 'contact',
                'section': 'Services | Web App',
                "pageURL": url ? url : '/',
                'buttonName': 'Get our web development advice',
                'location': 'middle of the page'
            }
        },
        second: (url) => {
            return {
                'event': 'contact',
                'section': 'Services | Web App',
                "pageURL": url ? url : '/',
                'buttonName': 'Let’s talk',
                'location': 'bottom of the page'
            }
        }
    },
    successStories: (name, position, url) => {
        return {
            'event': 'learn_more',
            'section': 'Services | Web App',
            "pageURL": url ? url : '/',
            'buttonName': 'Read more',
            'location': 'middle of the page',
            'type': 'post',
            'name': name,
            'position': position + 1
        }
    },
    developmentTypes: (items) => {
        const listItems = []
        items.map((el, index) => {
            listItems.push({
                'list': 'Services | Web App',
                'name': el.typeTitle,
                'brand ': 'inwedo.com',
                'position': index + 1,
                'category': el.typeTitle,
                'variant': 'page-site',
                'price': 'none',
                'id': el.button.url,
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