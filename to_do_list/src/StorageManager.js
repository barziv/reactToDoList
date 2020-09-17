class StorageManager {
  save(host, value) {
    fetch(host+"/save", {
      method: "POST",
      mode: 'no-cors',
      credentials: "include",
      body: JSON.stringify(value)
    });
  }

  async load(host) {
    let res = await fetch(host+"/load", {
      method: "GET",
      mode: 'cors',
      credentials: "include"
    });
    let data = await res.json();
    return data;
  }
}

let storageManager = new StorageManager();
export default storageManager;
