export default {
    hero: (url) => {
        return {
            "event": "contact",
            "section": "homepage",
            "pageURL":  url ? url : '/',
            "buttonName": "Contact us",
            "location": "top of the page"
        }
    },
    services: (items) => {
        const listItems = []
        items.map((el, index) => {
            listItems.push({
                'list': 'Services',
                'name': el.title,
                'brand ': 'inwedo.com',
                'position': index + 1,
                'category': el.title,
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
                'event': 'See_more',
                'section': 'homepage',
                'pageURL': url ? url : '/',
                'buttonName': 'See all services',
                'location': 'top of the page'
            }
        },
        second: (url) => {
            return {
                'event': 'contact',
                'section': 'homepage',
                'pageURL': url ? url : '/',
                'buttonName': 'Estimate project',
                'location': 'middle of the page',
                'position': '1'
            }
        },
        third: (url) => {
            return {
                'event': 'contact',
                'section': 'homepage',
                'pageURL': url ? url : '/',
                'buttonName': 'Estimate project',
                'location': 'bottom of the page',
                'position': '2'
            }
        }
    },
    caseStudies: [
        (name, url) => {
            return {
                'event': 'learn_more',
                'section': 'homepage',
                'pageURL': url ? url : '/',
                'buttonName': 'Read case study',
                'location': 'middle of the page',
                'type': 'post',
                'name': name,
                'position': '1'
            }
        },
        (name, url) => {
            return {
                'event': 'learn_more',
                'section': 'homepage',
                'pageURL': url ? url : '/',
                'buttonName': 'Read case study',
                'location': 'middle of the page',
                'type': 'post',
                'name': name,
                'position': '2'
            }
        },
        (name, url) => {
            return {
                'event': 'learn_more',
                'section': 'homepage',
                'pageURL': url ? url : '/',
                'buttonName': 'Read case study',
                'location': 'middle of the page',
                'type': 'post',
                'name': name,
                'position': '3'
            }
        }
    ],
    numbers: (url) => {
        return {
            'event': 'See_more',
            'section': 'homepage',
            'pageURL': url ? url : '/',
            'buttonName': 'About us',
            'location': 'middle of the page'
        }
    }
}