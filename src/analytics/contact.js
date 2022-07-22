export default {
    contactLinks: (name, url, action) => {
        return {
            'event': 'contact',
            'action': action,
            'buttonName': name,
            'pageURL': url ? url : '/',
            'location': 'footer'
        }
    }
}