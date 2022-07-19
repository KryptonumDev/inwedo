export default {
    hero: {
        "event": "contact",
        "section": "Services",
        "pageURL": "/",
        "buttonName": "Define your own MVP backlog",
        "location": "top of the page"

    },
    cta: {
        first: {
            'event': 'contact',
            'section': 'Services',
            'pageURL': '/',
            'buttonName': 'Let’s talk',
            'location': 'middle of the page'
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