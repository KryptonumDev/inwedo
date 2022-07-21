export default {
    hero: (url) => {
        return {
            "event": "contact",
            "section": "Services | Product Development",
            "pageURL": url ? url : '/',
            "buttonName": "Get your product development plan",
            "location": "top of the page"
        }
    },
    cta: {
        first: (url) => {
            return {
                'event': 'See_more',
                "section": "Services | Product Development",
                "pageURL": url ? url : '/',
                'buttonName': 'Learn more about how we work',
                'location': 'top of the page'
            }
        },
        second: (url) => {
            return {
                'event': 'contact',
                "section": "Services | Product Development",
                "pageURL": url ? url : '/',
                'buttonName': 'Let’s talk',
                'location': 'middle of the page'
            }
        },
        third: (url) => {
            return {
                'event': 'contact',
                "section": "Services | Product Development",
                "pageURL": url ? url : '/',
                'buttonName': 'Let’s talk',
                'location': 'bottom of the page'
            }
        }
    },
    successStories: (name, position, url) => {
        return {
            'event': 'learn_more',
            "section": "Services | Product Development",
            "pageURL": url ? url : '/',
            'buttonName': 'Read more',
            'location': 'middle of the page',
            'type': 'post',
            'name': name,
            'position': position + 1
        }
    },
    related: (items) => {
        const listItems = []
        items.map((el, index) => {
            listItems.push({
                "list": "Services | Product Development",
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
    }
}