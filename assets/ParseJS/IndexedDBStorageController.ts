/* global window */

let IndexedDBStorageController: any = {
  async: 1,
  getItemAsync(path: string) {
    return localStorage.getItem(path);
  },
  setItemAsync(path: string, value: string) {
    return localStorage.setItem(path, value);
  },
  removeItemAsync(path: string) {
    return localStorage.removeItem(path);
  },
  getAllKeysAsync() {
    return null;
  },
  clear() {
    return localStorage.clear();
  },
};

export default IndexedDBStorageController;
