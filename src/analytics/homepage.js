export default {
    hero: {
        "event": "contact",
        "section": "homepage",
        "pageURL": "/",
        "buttonName": "Contact us",
        "location": "Menu"
    },
    services: (items) => {
        const listItems = []

        items.map(el => {
            debugger //

            return {
                'list': 'Blog',
                'category': 'HUMAN RESOURCES',
                'variant': 'OUR CULTURE',
                'name': 'Inwedo wygrywa konkurs na firmę przyjazną człowiekowi',

                'price': '88.53', //ilość znaków w artykule / 100

                'id': 'post-3441',
                'brand ': 'inwedo.com',
                'position': 1,
                'dimension1': 'Ania Świderska', // autor tekstu.
                'dimension2': '24032022' //data publikacji
            }
        })

        return {
            'event': 'listView',
            'ecommerce': {
                'currencyCode': 'PLN',
                'impressions': listItems
            }
        }
    },
    cta: (items) => {
        const listItems = []

        return {
            first: {
                'event': 'See_more',
                'section': 'homepage',
                'pageURL': '/',
                'buttonName': 'See all services',
                'location': 'top of the page'
            },
            second: {
                'event': 'contact',
                'section': 'homepage',
                'pageURL': '/',
                'buttonName': 'Estimate project',
                'location': 'middle of the page',
                'position': '1'
            },
            third: {
                'event': 'contact',
                'section': 'homepage',
                'pageURL': '/',
                'buttonName': 'Estimate project',
                'location': 'bottom of the page',
                'position': '2'
            }
        }
    },
    caseStudies: {
        first: {
            'event': 'learn_more',
            'section': 'homepage',
            'pageURL': '/',
            'buttonName': 'Read case study',
            'location': 'middle of the page',
            'type': 'case study',
            'name': 'Capacity planner',
            'position': '1'
        },
        second: {
            'event': 'learn_more',
            'section': 'homepage',
            'pageURL': '/',
            'buttonName': 'Read case study',
            'location': 'middle of the page',
            'type': 'case study',
            'name': 'Svensk Kolnlagring',
            'position': '2'
        },
        third: {
            'event': 'learn_more',
            'section': 'homepage',
            'pageURL': '/',
            'buttonName': 'Read case study',
            'location': 'middle of the page',
            'type': 'case study',
            'name': 'Green Factory',
            'position': '3'
        }
    },
    numbers: {
        'event': 'See_more',
        'section': 'homepage',
        'pageURL': '/',
        'buttonName': 'About us',
        'location': 'middle of the page'
    }
}