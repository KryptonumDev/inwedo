export function useUrlUpdate(url) {
    if (typeof window !== `undefined` && typeof url !== `undefined`) {
        window.history.pushState({}, '', url);
    }
    return
}