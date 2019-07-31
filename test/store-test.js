import store from '../src/data/store.js';
import items from '../src/data/items.js';

const test = QUnit.test;

QUnit.module('Store Test');

store.storage = window.sessionStorage;

test('Get & Save Methods', assert => {
    // arrange
    const key = 'boots';
    const value = { name: 'Boots' };
    //act
    store.save(key, value);
    const keep = store.get(key);
    // assert
    assert.deepEqual(keep, value);
});

test('get products through bootstrapping', assert => {
    // act
    const gotItems = store.getItems();
    // assert
    assert.deepEqual(gotItems, items);
});