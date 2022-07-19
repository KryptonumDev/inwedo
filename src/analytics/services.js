export default {
    hero: {
        "event": "contact",
        "section": "services",
        "pageURL": "/",
        "buttonName": "Let’s talk",
        "location": "top of the page"
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
                'price': '88.53', //ilość znaków w artykule / 100
                'id': 'post-3441', //idstrony
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
        caseStudies: (position, name) => {
            return {
                'event': 'learn_more',
                'section': 'services',
                'pageURL': '/',
                'buttonName': 'Read case study',
                'location': 'middle of the page',
                'type': 'case study',
                'name': name,
                'position': position
            }
        },
        cta: {
            first: {
                'event': 'contact',
                'section': 'services',
                'pageURL': '/',
                'buttonName': 'Book a call',
                'location': 'middle of the page'
            },
            second: {
                'event': 'contact',
                'section': 'services',
                'pageURL': '/',
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
                    'price': '88.53', //ilość znaków w artykule / 100
                    'id': 'post-3441', //idstrony
                    'dimension1': 'inwedo',
                    'dimension2': '18072022'
                }
            }
        }
    }

}