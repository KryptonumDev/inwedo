export default {
    filter: (categoryFilters, seniorityFilters, url) => {
        let categories = ''
        let seniority = ''
        categoryFilters?.forEach((el, index) => {
            if (index === 0) {
                categories += el
            } else {
                categories += (" | " + el)
            }
        });
        seniorityFilters?.forEach((el, index) => {
            if (index > 0) {
                seniority += (' | ' + el)
            } else {
                seniority += el
            }
        })
        if (!categoryFilters.length) {
            categories = 'all'
        }
        if (!seniorityFilters.length) {
            seniority = 'all'
        }
        debugger
        return {
            'event': 'tag',
            'name': categories + ' | ' + seniority,
            'pageURL': url ? url : '/',
        }
    },
    productListView: (items, filter) => {
        const listItems = []
        items.map((el, index) => {

            let category = ''
            let seniority = ''
            el.categoriesJob.nodes.forEach((el, index) => {
                if (index > 0) {
                    category += (' | ' + el.name)
                } else {
                    category += el.name
                }
            })
            el.seniority.nodes.forEach((el, index) => {
                if (index > 0) {
                    seniority += (' | ' + el.name)
                } else {
                    seniority += el.name
                }
            })

            listItems.push({
                'list': filter,
                'name': el.careersPost.jobInformation.jobTitle,
                'brand ': 'inwedo.com',
                'position': index + 1,
                'category': category ? category : 'none',
                'variant': seniority ? seniority : 'none',
                'price': 'none',
                'id': el.guid,
                'dimension1': 'inwedo',
                'dimension2': el.date
            })
        })

        if (!listItems.length) {
            listItems.push({
                'list': filter + ' | empty'
            })
        }

        return {
            'event': 'listView',
            'ecommerce': {
                'currencyCode': 'PLN',
                'impressions': listItems
            }
        }
    },
    productClick: (item, index) => {

        let category = ''
        let seniority = ''
        item.categoriesJob.nodes.forEach((el, index) => {
            if (index > 0) {
                category += (' | ' + el.name)
            } else {
                category += el.name
            }
        })
        item.seniority.nodes.forEach((el, index) => {
            if (index > 0) {
                seniority += (' | ' + el.name)
            } else {
                seniority += el.name
            }
        })

        return {
            'event': 'productClick',
            'ecommerce': {
                'click': {
                    'actionField': {
                        'list': 'Job Offer'
                    },
                    'products': [{
                        'category': category ? category : 'none',
                        'name': item.careersPost.jobInformation.jobTitle,
                        'price': 'none',
                        'id': item.guid,
                        'variant': seniority ? seniority : 'none',
                        'brand ': 'inwedo.com',
                        'position': index + 1
                    }]
                }
            },
        }
    },
    contactLinks: (name, url, action) => {
        return {
            'event': 'contact',
            'action': action,
            'buttonName': name,
            'pageURL': url ? url : '/',
            'location': 'middle of the page'
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
    careersPath: (items) => {
        const listItems = []
        items.map((el, index) => {
            listItems.push({
                'list': 'Careers pathes',
                'name': el.title,
                'brand ': 'inwedo.com',
                'position': index + 1,
                'category': el.title,
                'variant': 'page-site',
                'price': 'none',
                'id': el.link.url,
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
}