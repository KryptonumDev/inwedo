export default {
    mainLinks: (position, name, url) => {
        return {
            'event': 'menu_click',
            'section': 'header',
            'pageURL': url ? url : '/',
            'buttonName': name,
            'location': 'menu',
            'position': position + 1
        }
    },
    subLinks: (parent, position, name, url) => {
        return {
            'event': 'menu_click',
            'section': 'header',
            'pageURL': url ? url : '/',
            'buttonName': name,
            'location': parent + ' sub-menu',
            'position': position + 1
        }
    },
    contact: (url) => {
        return {
            'event': 'contact',
            'section': 'header',
            'pageURL': url ? url : '/',
            'buttonName': 'Contact us',
            'location': 'Menu'
        }
    }
}