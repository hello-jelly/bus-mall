import items from './items.js';

const store = {
    storage: window.localStorage,
    save(key, item) {
        const json = JSON.stringify(item);
        store.storage.setItem(key, json);
    },
    get(key) {
        const json = store.storage.getItem(key);
        const item = JSON.parse(json);
        return item;
    },
    getItems() {
        let products = store.get('items');
        if(!products) {
            store.save('items', items);
            products = items;
        }
        return products;
    },
};

export default store;