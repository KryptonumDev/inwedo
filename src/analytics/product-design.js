import { urlsMapping } from './../contstants/urlMapping'

export default {
    hero: (url) => {
        return {
            "event": "contact",
            "section": "Services | Product Design",
            "pageURL": url ? url : '/',
            "buttonName": "Work with our product designers",
            "location": "top of the page"
        }
    },
    cta: {
        first: (url) => {
            return {
                'event': 'contact',
                "section": "Services | Product Design",
                "pageURL": url ? url : '/',
                'buttonName': 'Discovery Workshops',
                'location': 'top of the page'
            }
        },
        second: (url) => {
            return {
                'event': 'contact',
                "section": "Services | Product Design",
                "pageURL": url ? url : '/',
                'buttonName': 'Let’s talk',
                'location': 'middle of the page'
            }
        },
        third: (url) => {
            return {
                'event': 'contact',
                "section": "Services | Product Design",
                "pageURL": url ? url : '/',
                'buttonName': 'Learn more',
                'location': 'bottom of the page'
            }
        }
    },
    successStories: (name, position, url) => {
        let type = 'case studies'
        if (url.includes('/blog/')) {
            type = 'post'
        }
        return {
            'event': 'learn_more',
            "section": "Services | Product Design",
            "pageURL": url ? url : '/',
            'buttonName': 'Read more',
            'location': 'middle of the page',
            'type': type,
            'name': name,
            'position': position + 1
        }
    },
    technologies: {
        inView: (items) => {
            const listItems = []
            items.map((el, index) => {
                listItems.push({
                    "list": "Services | Product Design",
                    'name': el.techologieIcon.altText ? el.techologieIcon.altText : 'technologies alt is empty',
                    'brand ': 'inwedo.com',
                    'position': index + 1,
                    'category': el.techologieIcon.altText ? el.techologieIcon.altText : 'technologies alt is empty',
                    'variant': 'page-site',
                    'price': urlsMapping[el.technologieUrl],
                    'id': el.technologieUrl,
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
        onClick: (item, index) => {
            return {
                'event': 'productClick',
                'ecommerce': {
                    'click': {
                        'actionField': {
                            'list': 'Services | Product Design'
                        },
                        'products': [{
                            'category': item.techologieIcon.altText ? item.techologieIcon.altText : 'technologies alt is empty',
                            'name': item.techologieIcon.altText ? item.techologieIcon.altText : 'technologies alt is empty',
                            'price': urlsMapping[item.technologieUrl],
                            'id': item.technologieUrl,
                            'variant': 'page-site',
                            'brand ': 'inwedo.com',
                            'position': index + 1
                        }]
                    }
                }
            }
        }
    },
}