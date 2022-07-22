export default {
    mainLinks: (position, name, url) => {
        return {
            'event': 'menu_click',
            'section': 'footer',
            'pageURL': url ? url : '/',
            'buttonName': name,
            'location': 'footer',
            'position': position + 1
        }
    },
    externalLink: (buttonName, url, extenalUrl) => {
        return {
            'event': 'Links_external',
            'buttonName': buttonName,
            'pageURL': url ? url : '/',
            'externalURL': extenalUrl
        }
    },
    socialMedia: (name, url) => {
        return {
            'event': 'SM_click',
            'buttonName': name,
            'type': 'footer',
            'pageURL': url ? url : '/',
        }
    },
    contactLinks: (name, url) => {
        return {
            'event': 'contact',
            'action': 'telefon',
            'buttonName': name,
            'pageURL': url ? url : '/',
            'location': 'footer'
        }
    }
}