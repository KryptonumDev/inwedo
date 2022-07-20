import { getCookie } from './../helpers/cookie-manager'

export function datalayerPush(obj) {
    // let isAnalytics = getCookie('statistics')
    if (typeof window !== "undefined" && !!obj) {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push(obj)
    }
} 

export function datalayerArguments(){
    if (typeof window !== "undefined" && !!arguments) {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push(arguments)
    }
}