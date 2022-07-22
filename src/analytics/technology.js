export default {
    hero: (url) => {
        return {
            "event": "contact",
            "section": "Services | Technology",
            "pageURL": url ? url : '/',
            "buttonName": "Get your product development plan",
            "location": "top of the page"
        }
    },
    cta: {
        first: (url) => {
            return {
                'event': 'See_more',
                'section': "Services | Technology",
                "pageURL": url ? url : '/',
                'buttonName': 'Let’s talk',
                'location': 'top of the page',
                'position': '1'
            }
        },
        second: (url) => {
            return {
                'event': 'contact',
                'section': "Services | Technology",
                "pageURL": url ? url : '/',
                'buttonName': 'Learn more about technology',
                'location': 'middle of the page',
                'position': '2'
            }
        },
        third: (url) => {
            return {
                'event': 'contact',
                'section': "Services | Technology",
                "pageURL": url ? url : '/',
                'buttonName': 'Let’s talk',
                'location': 'bottom of the page',
                'position': '3'
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
            'section': "Services | Technology",
            "pageURL": url ? url : '/',
            'buttonName': 'Read more',
            'location': 'middle of the page',
            'type': type,
            'name': name,
            'position': position
        }
    },
    technologies: (items) => {
        const listItems = []
        items.map((el, index) => {
            listItems.push({
                'list': "Services | Technology",
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