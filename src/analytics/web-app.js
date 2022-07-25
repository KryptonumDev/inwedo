import { urlsMapping } from './../contstants/urlMapping'

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
    technologies: {
        inView: (items) => {
            const listItems = []
            items.map((el, index) => {
                listItems.push({
                    'list': 'Services | Web App',
                    'name': el.cardTitle,
                    'brand ': 'inwedo.com',
                    'position': index + 1,
                    'category': el.cardTitle,
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
                            'list': 'Services | Web App'
                        },
                        'products': [{
                            'category': item.cardTitle,
                            'name': item.cardTitle,
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
        let type = 'case studies'
        if (url.includes('/blog/')) {
            type = 'post'
        }
        return {
            'event': 'learn_more',
            'section': 'Services | Web App',
            "pageURL": url ? url : '/',
            'buttonName': 'Read more',
            'location': 'middle of the page',
            'type': type,
            'name': name,
            'position': position + 1
        }
    },
    developmentTypes: {
        inView: (items) => {
            const listItems = []
            items.map((el, index) => {
                listItems.push({
                    'list': 'Services | Web App',
                    'name': el.typeTitle,
                    'brand ': 'inwedo.com',
                    'position': index + 1,
                    'category': el.typeTitle,
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
                            'list': 'Services | Web App'
                        },
                        'products': [{
                            'category': item.typeTitle,
                            'name': item.typeTitle,
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
    }
}