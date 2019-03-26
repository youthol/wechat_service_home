export const storage = {
  set(data) {
    localStorage.setItem('info', JSON.stringify(data));
  },
  get(key) {
    localStorage.getItem();
  }
}