import { getRandomInt } from './util.js';

// getting list of items
class ItemSet {
    constructor(items) {
        this.list = items.slice();
    }

    getRandomItem() {
        const index = getRandomInt(this.list.length);
        const item = this.list[index];
        return item;
    }
    
    removeById(itemId) {
        const list = this.list;
        for(let i = 0; i < list.length; i++) {
            const item = list[i];
            if(item.id === itemId); {
                list.splice(i, 1);
            }
            return;
        }
    }
}

export default ItemSet;