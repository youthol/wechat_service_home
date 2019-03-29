export const seStorage = {
  set(key, data) {
    sessionStorage.setItem(key, JSON.stringify(data));
  },
  get(key) {
    return JSON.parse(sessionStorage.getItem(key));
  },
  remove(key) {
    sessionStorage.removeItem(key);
  },
  clear() {
    sessionStorage.clear();
  }
}

export const loStorage = {
  set(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  },
  get(key) {
    return JSON.parse(localStorage.getItem(key));
  },
  remove(key) {
    localStorage.removeItem(key);
  },
  clear() {
    localStorage.clear();
  }
}