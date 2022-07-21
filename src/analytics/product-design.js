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
        return {
            'event': 'learn_more',
            "section": "Services | Product Design",
            "pageURL": url ? url : '/',
            'buttonName': 'Read more',
            'location': 'middle of the page',
            'type': 'post',
            'name': name,
            'position': position + 1
        }
    },
    technologies: (items) => {
        const listItems = []
        items.map((el, index) => {
            listItems.push({
                "list": "Services | Team Extensions",
                'name': el.techologieIcon.altText ? el.techologieIcon.altText : 'technologies alt is empty',
                'brand ': 'inwedo.com',
                'position': index + 1,
                'category': el.techologieIcon.altText ? el.techologieIcon.altText : 'technologies alt is empty',
                'variant': 'page-site',
                'price': 'none',
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
}