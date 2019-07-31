import store from './data/store.js';
import items from './data/items.js';

const test = QUnit.test;

QUnit.module('Items Store');

store.storage = window.sessionsStorage;

QUnit.testStart(() => {
    store.storage.clear();
});

test('get item and save', (assert) => {
    const key = 'boots';
    const boots = { name: 'Boots' };
    store.save(key, boots);
    const got = store.get(key);
    assert.deepEqual(got, boots);
});

test('get items and use bootstrapped items', (assert) => {
    const products = store.getItems();
    assert.deepEqual(products, items);
});