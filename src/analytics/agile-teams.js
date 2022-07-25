import { urlsMapping } from './../contstants/urlMapping'

export default {
    hero: (url) => {
        return {
            "event": "contact",
            "section": "Services | Agile Teams",
            "pageURL": url ? url : '/',
            "buttonName": "Schedule a consultation",
            "location": "top of the page"
        }
    },
    relatedServices: {
        inView: (items) => {
            const listItems = []
            items.map((el, index) => {
                listItems.push({
                    "list": "Services | Agile Teams",
                    'name': el.servisTitle,
                    'brand ': 'inwedo.com',
                    'position': index + 1,
                    'category': el.servisTitle,
                    'variant': 'page-site',
                    'price': urlsMapping[el.button.url],
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
        onClick: (item, index) => {
            return {
                'event': 'productClick',
                'ecommerce': {
                    'click': {
                        'actionField': {
                            'list': 'Services | Team Extensions'
                        },
                        'products': [{
                            'category': item.servisTitle,
                            'name': item.servisTitle,
                            'price': urlsMapping[item.button.url],
                            'id': item.button.url,
                            'variant': 'page-site',
                            'brand ': 'inwedo.com',
                            'position': index + 1
                        }]
                    }
                }
            }
        }
    },
    cta: {
        first: (url) => {
            return {
                'event': 'contact',
                "section": "Services | Agile Teams",
                "pageURL": url ? url : '/',
                'buttonName': 'Tell us about your project',
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
            "section": "Services | Agile Teams",
            "pageURL": url ? url : '/',
            'buttonName': 'Read more',
            'location': 'middle of the page',
            'type': type,
            'name': name,
            'position': position + 1
        }
    },
    twoColumn: (url) => {
        return {
            "event": "learn more",
            "section": "Services | Agile Teams",
            "pageURL": url ? url : '/',
            "buttonName": "About-us",
            "location": "middle of the page"
        }
    },
    technologies: {
        inView: (items) => {
            const listItems = []
            items.map((el, index) => {
                listItems.push({
                    "list": "Services | Team Extensions",
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
                            'list': 'Services | Team Extensions'
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