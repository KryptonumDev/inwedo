export default {
    mainLinks: (position, name) => {
        return {
            'event': 'menu_click',
            'section': 'footer',
            'pageURL': '/',
            'buttonName': name,
            'location': 'menu',
            'position': position + 1
        }
    },
    socialMedia: (buttonName, url, extenalUrl) => {
        return {
            'event': 'Links_external',
            'buttonName': buttonName,
            'pageURL': url,
            'externalURL': extenalUrl
        }
    }
}