export default {
    mainLinks: (position, name) => {
        return {
            'event': 'menu_click',
            'section': 'header',
            'pageURL': '/',
            'buttonName': name,
            'location': 'menu',
            'position': position+1
        }
    },
    subLinks: (parent, position, name) => {
        return {
            'event': 'menu_click',
            'section': 'header',
            'pageURL': '/',
            'buttonName': name,
            'location': parent + ' sub-menu',
            'position': position+1
        }
    }
}