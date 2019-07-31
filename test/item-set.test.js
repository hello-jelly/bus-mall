import items from '../src/data/items.js';
import ItemSet from '../src/item-set.js';

const test = QUnit.test;

QUnit.module('Item Set');

test('Copying original item list', assert => {
    // arrange
    // import the items data

    // act
    const itemSet = new ItemSet(items);

    // assert
    assert.deepEqual(itemSet.list, items);
    assert.notEqual(itemSet.list, items);
});