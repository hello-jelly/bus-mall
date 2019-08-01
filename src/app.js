import store from './data/store.js';
import ItemSet from './item-set.js';
// import { getRandomInt, findById } from './util.js';
// import displayItem from './display-item.js';


const imgButtons = document.querySelectorAll('button[name=item]');
const choiceContainer = document.getElementById('item-choice-container');
const resultsContainer = document.getElementById('results-container');
const resultsButton = document.getElementById('results-button');

const items = store.getItems();
const masterItemSet = new ItemSet(items);
const selectedItems = [];
const displayedItems = [];
let itemsToDisplay;
let userItem;
let turns = 0;

function renderItems() {
    let itemSet = masterItemSet;
    if(userItem && masterItemSet.list.length > 3) {
        itemSet = new ItemSet(masterItemSet.list);
        itemSet.removeByCode(userItem.code);
    }

    itemsToDisplay = [];
    // generates 3 random imgs to display, stores and removes from item set
    for(let i = 0; i < 3; i++) {
        let renderItem = itemSet.getRandomItem();
        itemsToDisplay.push(renderItem);
        itemSet.removeByCode(renderItem.code);
        let img = imgButtons[i].querySelector('img');
        img.src = renderItem.image;
        img.classList.remove('hidden');
    }
}
renderItems();


// for(let i = 0; i < radioInputs.length; i++) {
//     const radioInput = radioInputs[i];
//     radioInput.addEventListener('input', );
// }