export default {
    hero: {
        "event": "contact",
        "section": "homepage",
        "pageURL": "/",
        "buttonName": "Contact us",
        "location": "Menu"
    },
    services: (items) => {
        const listItems = []
        items.map((el, index) => {
            listItems.push({
                'list': 'Services',
                'name': el.title,
                'brand ': 'inwedo.com',
                'position': index+1,
                'category': el.title,
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
            'event': 'See_more',
            'section': 'homepage',
            'pageURL': '/',
            'buttonName': 'See all services',
            'location': 'top of the page'
        },
        second: {
            'event': 'contact',
            'section': 'homepage',
            'pageURL': '/',
            'buttonName': 'Estimate project',
            'location': 'middle of the page',
            'position': '1'
        },
        third: {
            'event': 'contact',
            'section': 'homepage',
            'pageURL': '/',
            'buttonName': 'Estimate project',
            'location': 'bottom of the page',
            'position': '2'
        }
    },
    caseStudies: [
        (name) => {
            return {
                'event': 'learn_more',
                'section': 'homepage',
                'pageURL': '/',
                'buttonName': 'Read case study',
                'location': 'middle of the page',
                'type': 'case study',
                'name': name,
                'position': '1'
            }
        },
        (name) => {
            return {
                'event': 'learn_more',
                'section': 'homepage',
                'pageURL': '/',
                'buttonName': 'Read case study',
                'location': 'middle of the page',
                'type': 'case study',
                'name': name,
                'position': '2'
            }
        },
        (name) => {
            return {
                'event': 'learn_more',
                'section': 'homepage',
                'pageURL': '/',
                'buttonName': 'Read case study',
                'location': 'middle of the page',
                'type': 'case study',
                'name': name,
                'position': '3'
            }
        }
    ],
    numbers: {
        'event': 'See_more',
        'section': 'homepage',
        'pageURL': '/',
        'buttonName': 'About us',
        'location': 'middle of the page'
    }
}