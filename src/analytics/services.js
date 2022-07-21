export default {
    hero: (url) => {
        return {
            "event": "contact",
            "section": "services",
            "pageURL": url ? url : '/',
            "pageURL": "/",
            "buttonName": "Let’s talk",
            "location": "top of the page"
        }
    },
    devCards: {
        listView: (twoColumn, items) => {
            const listItems = []
            listItems.push({
                'list': 'Services',
                'name': twoColumn.title,
                'brand ': 'inwedo.com',
                'position': 1,
                'category': twoColumn.title,
                'variant': 'page-site',
                'price': 'none',
                'id': twoColumn.button.url,
                'dimension1': 'inwedo',
                'dimension2': '18072022'
            })
            items?.map((el, index) => {
                listItems.push({
                    'list': 'Services',
                    'name': el.cardTitle,
                    'brand ': 'inwedo.com',
                    'position': index + 2,
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
        caseStudies: (name, position, url) => {
            return {
                'event': 'learn_more',
                'section': 'services',
                'pageURL': url ? url : '/',
                'buttonName': 'Read more',
                'location': 'middle of the page',
                'type': 'post',
                'name': name,
                'position': position + 1
            }
        },
    },
    cta: {
        first: (url) => {
            return {
                'event': 'contact',
                'section': 'services',
                'pageURL': url ? url : '/',
                'buttonName': 'Book a call',
                'location': 'middle of the page'
            }
        },
        second: (url) => {
            return {
                'event': 'contact',
                'section': 'services',
                'pageURL': url ? url : '/',
                'buttonName': 'Estimate Project',
                'location': 'bottom of the page'
            }
        }
    },
    twoColumn: (twoColumn) => {
        return {
            'event': 'listView',
            'ecommerce': {
                'currencyCode': 'PLN',
                'impressions': {
                    'list': 'Services',
                    'name': twoColumn.title,
                    'brand ': 'inwedo.com',
                    'position': 1,
                    'category': twoColumn.title,
                    'variant': 'page-site',
                    'price': 'none',
                    'id': 'twoColumn.button.url',
                    'dimension1': 'inwedo',
                    'dimension2': '18072022'
                }
            }
        }
    }

}