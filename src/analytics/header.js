export default {
    mainLinks: (position, name) => {
        return {
            'event': 'menu_click',
            'section': 'homepage',
            'pageURL': '/',
            'buttonName': name,
            'location': 'menu',
            'position': position
        }
    },
    subLinks: (position, name) => {
        return {
            'event': 'menu_click',
            'section': 'homepage',
            'pageURL': '/',
            'buttonName': name,
            'location': 'sub-menu',
            'position': position
        }
    }
}