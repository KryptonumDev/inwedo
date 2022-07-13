import React from "react"
import { Helmet } from "react-helmet"
import { urlSystem } from "../../contstants/urlSystem"
import { breadcrumbsServices, breadcrumbsTechnologies, breadcrumbsCareers, breadcrumbsBlog, breadcrumbsArchive, breadcrumbsHowWeWork } from "./breadcrums"
import OgPlaceholder from './../../images/team.jpg'

export default function Seo({ data, lang, alternates, location, type, id, template, currTemplate, ogImg, author }) {

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
    } else if (type === 'How We Work') {
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

    const ldJson = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items
    };

    return (
        <Helmet htmlAttributes={{ lang: lang }}>
            <meta charSet="utf-8" />
            <meta name="robots" content="noindex" />

            {items.length > 1 ? (
                <script type="application/ld+json">
                    {JSON.stringify(ldJson)}
                </script>
            ) : null}

            <meta property="og:url" content={location.href} />
            <meta property="og:site_name" content={data.opengraphSiteName} />

            {data?.title
                ? <title>{data.title}</title>
                : null}
            {data?.title
                ? <meta property="twitter:title" content={data.title} />
                : null}
            {data?.title
                ? <meta property="og:title" content={data.title} />
                : null}

            {data?.metaDesc
                ? <meta name="description" content={data.metaDesc} />
                : null}
            {data?.metaDesc
                ? <meta property="twitter:description" content={data.metaDesc} />
                : null}
            {data?.metaDesc
                ? <meta property="og:description" content={data.metaDesc} />
                : null}

            {type === 'post' || type === 'careers post'
                ? <meta property="og:type" content='article' />
                : <meta property="og:type" content='website' />}
            {type === 'post' || type === 'careers post'
                ? <meta property="article:published_time" content={data.opengraphModifiedTime} />
                : null}
            {type === 'post' || type === 'careers post'
                ? <meta property="article:modified_time" content="2022-07-18T12:00:00+00:00" />
                : null}

            {data.opengraphImage?.publicURL
                ? <meta property="og:image" content={data.opengraphImage.publicURL} />
                : ogImg
                    ? <meta property="og:image" content={ogImg} />
                    : <meta property="og:image" content={OgPlaceholder} />}

            {data.opengraphImage?.publicURL
                ? <meta property="twitter:image" content={data.opengraphImage.publicURL} />
                : ogImg
                    ? <meta property="twitter:image" content={ogImg} />
                    : <meta property="twitter:image" content={OgPlaceholder} />}

            {author
                ? <meta property="article:author" content={author} />
                : null}

            {alternates?.nodes.map(el => {
                let href

                if (type === 'archive' || type === 'technology' || type === 'post' || type === 'careers post') {
                    href = location.origin + urlSystem[template][el.language.slug] + el.page.url
                } else {
                    href = location.origin + urlSystem[el.template.templateName][el.language.slug]
                }

                return (
                    <link rel="alternate" hreflang={el.language.slug} href={href} />
                )
            })}
            <link rel="canonical" href={location.href} />


            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Inwedo",
                    "url": "https://inwedo.netlify.app/",
                    "logo": "https://inwedo.netlify.app/static/94aaf8dddfeca81d0ced5fb826c31c93/31aa6/Inwedo-Logo-refresh.webp",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+48 42 634 00 96",
                        "contactType": "customer service"
                    },
                    "sameAs": [
                        "https://www.facebook.com/inwedo",
                        "https://www.instagram.com/inwedo_/",
                        "https://clutch.co/profile/inwedo"
                    ],
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Łódź, Poland",
                        "postalCode": "90-248",
                        "streetAddress": "Polskiej Organizacji Wojskowej 25"
                    }
                })}
            </script>
        </Helmet>
    )
}