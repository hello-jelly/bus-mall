import items from '../src/data/items.js';
import ItemSet from '../src/item-set.js';


const test = QUnit.test;

QUnit.module('Item Set');

test('Get a random img', (assert) => {
    const itemSet = new ItemSet(items);
});

const itemSet = new ItemSet (items);

assert.equal(items.list, items);
assert.deepEqual(items.list, items);

const formData = new FormData(form);

test('remove an item from list', (assert) => {
    const itemSet = new ItemSet(items);
    const itemToRemove = items[0];
    itemSet.removeById(itemToRemove.id);
    assert.notOk(itemSet.list.includes(itemToRemove));
});