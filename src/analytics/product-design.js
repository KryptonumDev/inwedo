export default {
    hero: {
        "event": "contact",
        "section": "Services",
        "pageURL": "/services/digital-product-design-ux-ui/",
        "buttonName": "Work with our product designers",
        "location": "top of the page"
    },
    cta: {
        first: {
            'event': 'contact',
            'section': 'Services',
            'pageURL': '/services/digital-product-design-ux-ui/',
            'buttonName': 'Discovery Workshops',
            'location': 'top of the page'
        },
        second: {
            'event': 'contact',
            'section': 'Services',
            'pageURL': '/services/digital-product-design-ux-ui/',
            'buttonName': 'Let’s talk',
            'location': 'middle of the page'
        },
        third: {
            'event': 'contact',
            'section': 'Services',
            'pageURL': '/services/digital-product-design-ux-ui/',
            'buttonName': 'Learn more',
            'location': 'bottom of the page'
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
    }
}