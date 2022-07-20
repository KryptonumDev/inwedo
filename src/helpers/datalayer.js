import { getCookie } from './../helpers/cookie-manager'

export function datalayerPush(obj) {
    let isAnalytics = getCookie('statistics')
    if (typeof window !== "undefined" && !!obj && isAnalytics == 'true') {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push(obj)
    }
} 