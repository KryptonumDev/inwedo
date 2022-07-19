export default {
    hero: {
        "event": "contact",
        "section": "Services",
        "pageURL": "/services/dedicated-team-it-outsourcing-agile-teams-on-demand/",
        "buttonName": "Schedule a consultation",
        "location": "top of the page"
    },
    relatedServices: (items) => {
        const listItems = []
        items.map((el, index) => {
            listItems.push({
                'list': 'Services',
                'name': el.servisTitle,
                'brand ': 'inwedo.com',
                'position': index + 1,
                'category': el.servisTitle,
                'variant': 'page-site',
                'price': '88.53', //ilość znaków w artykule / 100
                'id': 'post-3441', //idstrony
                'dimension1': 'inwedo',
                'dimension2': '18072022'
            })
        })

        return {
            'event': 'listView',
            'ecommerce': {
                'currencyCode': 'PLN',
                'impressions': listItems
            }
        }
    },
    cta: {
        first: {
            'event': 'contact',
            'section': 'Services',
            'pageURL': '/services/dedicated-team-it-outsourcing-agile-teams-on-demand/',
            'buttonName': 'Tell us about your project',
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
    },
    twoColumn: {
        "event": "learn more",
        "section": "Services",
        "pageURL": "/services/dedicated-team-it-outsourcing-agile-teams-on-demand/",
        "buttonName": "About-us",
        "location": "Menu"
    }
}