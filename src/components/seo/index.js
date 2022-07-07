import React from "react"
import { Helmet } from "react-helmet"
import parse from 'html-react-parser'
import { urlSystem } from "../../contstants/urlSystem"
import { breadcrumbsServices, breadcrumbsTechnologies, breadcrumbsCareers, breadcrumbsBlog, breadcrumbsArchive, breadcrumbsHowWeWork } from "./breadcrums"

export default function Seo({ data, lang, alternates, location, type, id, template, currTemplate }) {

    let fullHead = parse(data.fullHead)

    const items = [{
        "@type": "ListItem",
        "position": 1,
        "name": "Inwedo",
        "item": location.origin + '/'
    }]

    if (type === 'archive') {
        let idCode = id.slice(0, 8)
        alternates.nodes = alternates.nodes.filter(el => el.id.includes(idCode))
        breadcrumbsArchive(items, location, lang, currTemplate)
    } else if (type === 'technology') {
        alternates.nodes = alternates.nodes.filter(el => el.page.template === currTemplate)
        breadcrumbsTechnologies(items, location, lang, currTemplate)
    } else if (type === 'How We Work'){
        breadcrumbsHowWeWork(items, location, lang)
    } else if (type === 'post') {
        alternates.nodes = alternates.nodes.filter(el => el.page.template === currTemplate)
        breadcrumbsBlog(items, location, lang, currTemplate)
    } else if (type === 'careers post') {
        alternates.nodes = alternates.nodes.filter(el => el.page.template === currTemplate)
        breadcrumbsCareers(items, location, lang, currTemplate)
    } else {
        breadcrumbsServices(items, location, alternates, type, lang)
    }
    debugger
    return (
        <Helmet htmlAttributes={{ lang: lang }}>

            {data?.title
                ? <title>{data.title}</title>
                : null}
            {fullHead}
            {/* <meta name="google-site-verification" content="6ECIlKWTKRV13uT8My_fm4eN2kHfjUuz74nBH7kNXjE" /> */}

            {alternates?.nodes.map(el => {
                let href

                if (type === 'archive') {
                    href = location.origin + urlSystem[template][el.language.slug] + el.page.url
                } else if (type === 'technology' || type === 'post' || type === 'careers post') {
                    href = location.origin + urlSystem[template][el.language.slug] + el.page.url
                } else {
                    href = location.origin + urlSystem[el.template.templateName][el.language.slug]
                }

                return (
                    <link rel="alternate" hreflang={el.language.slug === 'en' ? 'x-default' : el.language.slug} href={href} />
                )
            })}
        </Helmet>
    )
}