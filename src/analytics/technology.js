export default {
    hero: {
        "event": "contact",
        "section": "Services",
        "pageURL": "/",
        "buttonName": "Get your product development plan",
        "location": "top of the page"
    },
    cta: {
        first: {
            'event': 'See_more',
            'section': 'homepage',
            'pageURL': '/',
            'buttonName': 'See all services',
            'location': 'top of the page'
        },
        second: {
            'event': 'contact',
            'section': 'homepage',
            'pageURL': '/',
            'buttonName': 'Estimate project',
            'location': 'middle of the page',
            'position': '1'
        },
        third: {
            'event': 'contact',
            'section': 'homepage',
            'pageURL': '/',
            'buttonName': 'Estimate project',
            'location': 'bottom of the page',
            'position': '2'
        }
    },
    caseStudies: (position, name) => {
        return {
            'event': 'learn_more',
            'section': 'Services',
            'pageURL': '/',
            'buttonName': 'Read case study',
            'location': 'middle of the page',
            'type': 'case study',
            'name': name,
            'position': position
        }
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
}