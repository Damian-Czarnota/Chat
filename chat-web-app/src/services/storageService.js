export function saveInStorage(key, data) {
    localStorage.setItem(key, data)
}

export function getFromStorage(key) {
    return localStorage.getItem(key);
}