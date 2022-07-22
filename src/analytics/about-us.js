export default {
    cta: {
        first: (url) => {
            return {
                'event': 'learn more',
                'section': "About Us",
                "pageURL": url ? url : '/',
                'buttonName': 'Get insights from our blog 🗲',
                'location': 'middle of the page',
                'position': '1'
            }
        },
        second: (url) => {
            return {
                'event': 'contact',
                'section': "About Us",
                "pageURL": url ? url : '/',
                'buttonName': 'Send a short brief',
                'location': 'bottom of the page',
                'position': '2'
            }
        },
    },
    successStories: (name, position, url) => {
        let type = 'case studies'
        if (url.includes('/blog/')) {
            type = 'post'
        }
        return {
            'event': 'learn more',
            'section': "About Us",
            "pageURL": url ? url : '/',
            'buttonName': 'Read more',
            'location': 'middle of the page',
            'type': type,
            'name': name,
            'position': position + 1
        }
    },
    twoColumn: (url) => {
        return {
            "event": "learn more",
            'section': "About Us",
            "pageURL": url ? url : '/',
            "buttonName": "Find out more about how we work",
            "location": "bottom of the page"
        }
    }
}