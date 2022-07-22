export default {
    hero: (url) => {
        return {
            "event": "contact",
            "section": "Services | Discovery Workshop",
            "pageURL": url ? url : '/',
            "buttonName": "Define your own MVP backlog",
            "location": "top of the page"
        }
    },
    cta: {
        first: (url) => {
            return {
                'empty': 'empty'
            }
        },
        second: (url) => {
            return {
                'event': 'contact',
                "section": "Services | Discovery Workshop",
                "pageURL": url ? url : '/',
                'buttonName': 'Let’s talk',
                'location': 'bottom of the page'
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
            "section": "Services | Discovery Workshop",
            "pageURL": url ? url : '/',
            'buttonName': 'Read more',
            'location': 'middle of the page',
            'type': type,
            'name': name,
            'position': position + 1
        }
    }
}