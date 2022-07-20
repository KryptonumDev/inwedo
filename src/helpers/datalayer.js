import { getCookie } from './../helpers/cookie-manager'

export function datalayerPush() {
    // let isAnalytics = getCookie('statistics')
    if (typeof window !== "undefined" && !!arguments) {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push(arguments)
    }
} 