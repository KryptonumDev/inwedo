export function datalayerPush(obj) {
    if (typeof window !== "undefined" && !!obj) {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push(obj)
    }
} 