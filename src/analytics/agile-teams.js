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
    relatedServices: (items) => {
        const listItems = []
        items.map((el, index) => {
            listItems.push({
                "list": "Services | Agile Teams",
                'name': el.servisTitle,
                'brand ': 'inwedo.com',
                'position': index + 1,
                'category': el.servisTitle,
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
                "section": "Services | Agile Teams",
                "pageURL": url ? url : '/',
                'buttonName': 'Tell us about your project',
                'location': 'bottom of the page'
            }
        }
    },
    successStories: (position, name, url) => {
        return {
            'event': 'learn_more',
            "section": "Services | Agile Teams",
            "pageURL": url ? url : '/',
            'buttonName': 'Read more',
            'location': 'middle of the page',
            'type': 'post',
            'name': name,
            'position': position+1
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
    }
}