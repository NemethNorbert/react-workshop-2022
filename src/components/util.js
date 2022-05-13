export function useCachedState(key, defaultValue) {
    let value = window.localStorage.getItem(key);

    if (value == undefined) {
        value = defaultValue;
        storeCachedState(key, value);
    }

    return JSON.parse(value);
}

export function storeCachedState(key, value) {
    window.localStorage.setItem(key, value);
}