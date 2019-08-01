import store from './data/store.js';
import ItemSet from './item-set.js';
// import { getRandomInt, findById } from './util.js';
// import displayItem from './display-item.js';


const imgButtons = document.querySelectorAll('button[name=item]');
const choiceContainer = document.getElementById('item-choice-container');
const resultsContainer = document.getElementById('results-container');
const resultsButton = document.getElementById('results-button');

const items = store.getItems();
let masterItemSet = new ItemSet(items);
const selectedItems = [];
const displayedItems = {};
let itemsToDisplay;

let turns = 0;

function tally(items, code) {
    if(items[code]) {
        items[code] += 1;
    } else {
        items[code] = 1;
    }
}

function renderItems() {
    // Check for turn count here before continuing
    if(turns > 5) {
        imgButtons.disable;
        choiceContainer.classList.add('hidden');
        resultsButton.classList.remove('hidden');
        console.log('turns is 5');
        resultsButton.addEventListener('click', (event) => { 
            // reveal chart??
        })
    } else {
        if(masterItemSet.list.length < 3) {
            masterItemSet = new ItemSet(items);
            for(let i = 0; i < itemsToDisplay.length; i++) {
                masterItemSet.removeByCode(itemsToDisplay[i].code);
            }
        }}

    let itemSet = masterItemSet;

    itemsToDisplay = [];
    // generates 3 random imgs to display, stores and removes from item set
    for(let i = 0; i < 3; i++) {
        let renderItem = itemSet.getRandomItem();
        itemsToDisplay.push(renderItem);
        tally(displayedItems, renderItem.code);
        itemSet.removeByCode(renderItem.code);

        // displaying image and removing hidden class
        let img = imgButtons[i].querySelector('img');
        img.src = renderItem.image;
        img.alt = renderItem.code;
        img.classList.remove('hidden');
    }
}

choiceContainer.addEventListener('click', (event) => {
    event.preventDefault();
    turns++;
    renderItems();
    console.log(turns);
});

renderItems();
