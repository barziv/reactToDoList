function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
    
function loadFromLocalStorage(key) {
    let savedAssignments = localStorage.getItem(key);
    return JSON.parse(savedAssignments) ?? {};
}

export {
    saveToLocalStorage, loadFromLocalStorage
}