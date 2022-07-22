export default {
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
    productView: (item) => {
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
            'event': 'ViewProduct',
            'ecommerce': {
                'detail': {
                    'actionField': {
                        'list': 'Job Offer'
                    },
                    'products': [{
                        'category': category ? category : 'none',
                        'name': item.careersPost.jobInformation.jobTitle,
                        'price': 'none',
                        'id': item.guid,
                        'variant': 'post',
                        'brand ': 'inwedo.com',
                        'position': 1,
                        'dimension1': 'inwedo',
                        'dimension2': item.date
                    }]
                }
            },
        }
    }
}