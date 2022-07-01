export const checkLanguageUrl = (location, url) => {
    let a = location.pathname.substring(0, 4)

    if (a === '/pl/') {
        return '/pl' + url
    }

    return url
}