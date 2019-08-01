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
    
    removeByCode(itemCode) {
        const list = this.list;
        for(let i = 0; i < list.length; i++) {
            const item = list[i];
            if(item.code === itemCode) {
                list.splice(i, 1);
            }
        }
    }
}

export default ItemSet;