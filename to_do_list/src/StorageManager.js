class StorageManager {
    save(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    load(key) {
        let savedAssignments = localStorage.getItem(key);
        return JSON.parse(savedAssignments);
    }
}

let storageManager = new StorageManager();
export default storageManager;