import { urlsMapping } from "../contstants/urlMapping"

export default {
    hero: (url) => {
        return {
            "event": "learn more",
            "section": "How We Work",
            "pageURL": url ? url : '/',
            "buttonName": "Explore possibilites",
            "location": "top of the page"
        }
    },
    cta: {
        first: (url) => {
            return {
                'event': 'learn more',
                "section": "How We Work",
                "pageURL": url ? url : '/',
                'buttonName': 'Read more',
                'location': 'middle of the page'
            }
        },
        second: (url) => {
            return {
                'event': 'learn more',
                "section": "How We Work",
                "pageURL": url ? url : '/',
                'buttonName': 'Agile team on demand',
                'location': 'middle of the page'
            }
        },
        third: (url) => {
            return {
                'event': 'learn more',
                "section": "How We Work",
                "pageURL": url ? url : '/',
                'buttonName': 'Read on our blog',
                'location': 'bottom of the page'
            }
        },
        fourth: (url) => {
            return {
                'event': 'contact',
                "section": "How We Work",
                "pageURL": url ? url : '/',
                'buttonName': 'Estimate project',
                'location': 'bottom of the page'
            }
        }
    },
    cards: {
        inView: (items) => {
            const listItems = []
            items.map((el, index) => {
                listItems.push({
                    "list": "How We Work",
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
                            'list': 'How We Work'
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
    related: {
        inView: (items) => {
            const listItems = []
            items.map((el, index) => {
                listItems.push({
                    "list": "How We Work",
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
                            'list': 'How We Work'
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
    }
}