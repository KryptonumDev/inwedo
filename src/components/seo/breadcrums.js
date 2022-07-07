import { urlSystem } from "../../contstants/urlSystem"

export const breadcrumbsHowWeWork = (items, location, lang) => {
    let elemntsToAddCount = -1
    let elementsHashes = []
    for (let i = 0; i < location.pathname.length; i++) {
        if (location.pathname[i] === '/') {
            elemntsToAddCount++
            elementsHashes.push(i)
        }
    }
    let item = location.origin + location.pathname.substring(0, elementsHashes[1])
    if (item[item.length - 1] !== '/') {
        item += '/'
    }
    items.push({
        "@type": "ListItem",
        "position": 2,
        "name": urlSystem['About'][lang + '-name'],
        "item": item
    })
    item = location.origin + location.pathname
    if (item[item.length - 1] !== '/') {
        item += '/'
    }
    items.push({
        "@type": "ListItem",
        "position": 3,
        "name": urlSystem['How We Work'][lang + '-name'],
        "item": item
    })
}

export const breadcrumbsServices = (items, location, alternates, type, lang) => {
    let elemntsToAddCount = -1
    let elementsHashes = []
    for (let i = 0; i < location.pathname.length; i++) {
        if (location.pathname[i] === '/') {
            elemntsToAddCount++
            elementsHashes.push(i)
        }
    }
    if (elemntsToAddCount === 1) {
        items.push({
            "@type": "ListItem",
            "position": 2,
            "name": urlSystem[type][lang + '-name'],
            "item": location.href
        })
    }
    if (elemntsToAddCount === 2) {
        for (let j = 1; j <= elemntsToAddCount; j++) {
            let item = location.origin + location.pathname.substring(0, elementsHashes[j])
            items.push({
                "@type": "ListItem",
                "position": j + 1,
                "name": j === elemntsToAddCount ? urlSystem[alternates.nodes[0].template.templateName][lang + '-name'] : urlSystem[type][lang + '-name'],
                "item": item
            })
        }
    }
}

export const breadcrumbsTechnologies = (items, location, lang, currTemplate) => {
    let elemntsToAddCount = -1
    let elementsHashes = []
    for (let i = 0; i < location.pathname.length; i++) {
        if (location.pathname[i] === '/') {
            elemntsToAddCount++
            elementsHashes.push(i)
        }
    }
    let item = location.origin + location.pathname.substring(0, elementsHashes[1])
    if (item[item.length - 1] !== '/') {
        item += '/'
    }
    items.push({
        "@type": "ListItem",
        "position": 2,
        "name": urlSystem['Services'][lang + '-name'],
        "item": item
    })
    item = location.origin + location.pathname.substring(0, elementsHashes[2])
    if (item[item.length - 1] !== '/') {
        item += '/'
    }
    items.push({
        "@type": "ListItem",
        "position": 3,
        "name": urlSystem['Web App'][lang + '-name'],
        "item": item
    })
    item = location.origin + location.pathname
    if (item[item.length - 1] !== '/') {
        item += '/'
    }
    items.push({
        "@type": "ListItem",
        "position": 4,
        "name": currTemplate,
        "item": item
    })
}

export const breadcrumbsCareers = (items, location, lang, currTemplate) => {
    let elemntsToAddCount = -1
    let elementsHashes = []
    for (let i = 0; i < location.pathname.length; i++) {
        if (location.pathname[i] === '/') {
            elemntsToAddCount++
            elementsHashes.push(i)
        }
    }
    let item = location.origin + location.pathname.substring(0, elementsHashes[1])
    if (item[item.length - 1] !== '/') {
        item += '/'
    }
    items.push({
        "@type": "ListItem",
        "position": 2,
        "name": urlSystem['Careers Homepage'][lang + '-name'],
        "item": item
    })
    item = location.origin + location.pathname
    if (item[item.length - 1] !== '/') {
        item += '/'
    }
    items.push({
        "@type": "ListItem",
        "position": 3,
        "name": currTemplate,
        "item": item
    })
}

export const breadcrumbsArchive = (items, location, lang, currTemplate) => {
    let elemntsToAddCount = -1
    let elementsHashes = []
    for (let i = 0; i < location.pathname.length; i++) {
        if (location.pathname[i] === '/') {
            elemntsToAddCount++
            elementsHashes.push(i)
        }
    }
    let item = location.origin + location.pathname.substring(0, elementsHashes[1])
    if (item[item.length - 1] !== '/') {
        item += '/'
    }
    items.push({
        "@type": "ListItem",
        "position": 2,
        "name": urlSystem['Blog Archive'][lang + '-name'],
        "item": item
    })
    item = location.origin + location.pathname
    if (item[item.length - 1] !== '/') {
        item += '/'
    }
    items.push({
        "@type": "ListItem",
        "position": 3,
        "name": currTemplate,
        "item": item
    })
}

export const breadcrumbsBlog = (items, location, lang, currTemplate) => {
    let elemntsToAddCount = -1
    let elementsHashes = []
    for (let i = 0; i < location.pathname.length; i++) {
        if (location.pathname[i] === '/') {
            elemntsToAddCount++
            elementsHashes.push(i)
        }
    }
    let item = location.origin + location.pathname.substring(0, elementsHashes[1])
    if (item[item.length - 1] !== '/') {
        item += '/'
    }
    items.push({
        "@type": "ListItem",
        "position": 2,
        "name": urlSystem['Blog Archive'][lang + '-name'],
        "item": item
    })
    item = location.origin + location.pathname
    if (item[item.length - 1] !== '/') {
        item += '/'
    }
    items.push({
        "@type": "ListItem",
        "position": 3,
        "name": currTemplate,
        "item": item
    })
}

