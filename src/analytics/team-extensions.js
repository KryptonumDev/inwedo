export default {
    hero: {
        "event": "contact",
        "section": "Services",
        "pageURL": "/",
        "buttonName": "Schedule a consultation",
        "location": "top of the page"
    },
    technologies: (items) => {
        const listItems = []
        items.map((el, index) => {
            listItems.push({
                'list': 'Technologies',
                'name': el.techologieIcon.altText ? el.techologieIcon.altText : 'technologies alt is empty',
                'brand ': 'inwedo.com',
                'position': index + 1,
                'category': el.techologieIcon.altText ? el.techologieIcon.altText : 'technologies alt is empty',
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
    cta: {
        first: {
            'event': 'contact',
            'section': 'Services',
            'pageURL': '/',
            'buttonName': 'Tell us about your project',
            'location': 'middle of the page'
        },
        second: {
            'event': 'contact',
            'section': 'Services',
            'pageURL': '/',
            'buttonName': 'Hire a dedicated team',
            'location': 'bottom of the page'
        }
    },
    related: (items) => {
        const listItems = []
        items.map((el, index) => {
            listItems.push({
                'list': 'Services',
                'name': el.servisTitle,
                'brand ': 'inwedo.com',
                'position': index + 1,
                'category': el.servisTitle,
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
    }
}