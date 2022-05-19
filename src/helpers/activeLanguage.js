export const activeLanguage = (location) => {
    let defLocale = 'en'

    if (location.pathname.includes('/pl/')) {
        return 'pl'
    }

    return defLocale
}