// When there is no native storage interface, we default to an in-memory map
const memMap = {};
const StorageController = {
  async: 0,

  getItem(path: string): string | null {
    return localStorage.getItem(path);
  },

  setItem(path: string, value: string) {
    localStorage.setItem(path, value);
  },

  removeItem(path: string) {
    localStorage.removeItem(path);
  },

  getAllKeys() {
    // 创建一个数组来存储所有的 key
    const allKeys = [];
    // 遍历所有索引，通过 index 获取对应的 key 并存入数组
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i); // 获取第 i 个位置的键名
        if (key !== null) { // 确保 key 有效
            allKeys.push(key);
        }
    }
    return allKeys;
  },

  clear() {
    localStorage.clear();
  },
};

export default StorageController;
