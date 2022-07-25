import { urlsMapping } from "../contstants/urlMapping"

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
                'price': urlsMapping[twoColumn.button.url],
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
        twoColumnClick: (item) => {
            return {
                'event': 'productClick',
                'ecommerce': {
                    'click': {
                        'actionField': {
                            'list': 'Services'
                        },
                        'products': [{
                            'category': item.title,
                            'name': item.title,
                            'price': urlsMapping[item.button.url],
                            'id': item.button.url,
                            'variant': 'page-site',
                            'brand ': 'inwedo.com',
                            'position': 1
                        }]
                    }
                }
            }
        },
        otherClick: (item, index) => {
            return {
                'event': 'productClick',
                'ecommerce': {
                    'click': {
                        'actionField': {
                            'list': 'Services'
                        },
                        'products': [{
                            'category': item.cardTitle,
                            'name': item.cardTitle,
                            'price': urlsMapping[item.button.url],
                            'id': item.button.url,
                            'variant': 'page-site',
                            'brand ': 'inwedo.com',
                            'position': index + 2
                        }]
                    }
                }
            }
        },
        caseStudies: (name, position, url) => {
            let type = 'case studies'
            if (url.includes('/blog/')) {
                type = 'post'
            }
            return {
                'event': 'learn_more',
                'section': 'services',
                'pageURL': url ? url : '/',
                'buttonName': 'Read more',
                'location': 'middle of the page',
                'type': type,
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
    twoColumn: {
        inView: (twoColumn) => {
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
                        'price': urlsMapping[twoColumn.button.url],
                        'id': twoColumn.button.url,
                        'dimension1': 'inwedo',
                        'dimension2': '18072022'
                    }
                }
            }
        },
        click: (item) => {
            return {
                'event': 'productClick',
                'ecommerce': {
                    'click': {
                        'actionField': {
                            'list': 'Services'
                        },
                        'products': [{
                            'category': item.title,
                            'name': item.title,
                            'price': urlsMapping[item.button.url],
                            'id': item.button.url,
                            'variant': 'page-site',
                            'brand ': 'inwedo.com',
                            'position': 1
                        }]
                    }
                }
            }
        },
    }


}