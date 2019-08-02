import store from './data/store.js';
import ItemSet from './item-set.js';
import { renderListTotals, renderListSelections, renderChart } from './render-list.js';

const items = store.getItems();
const imgButtons = document.querySelectorAll('button[name=item]');
const header = document.getElementById('header');
const productSelection = document.getElementById('product-selection');
const resultsContainer = document.getElementById('results-container');
const resultsButton = document.getElementById('results-button');
const choiceList = document.getElementById('choice-list');
const displayedList = document.getElementById('viewed-list');
const chart = document.getElementById('chart');

let masterItemSet = new ItemSet(items);
const displayedItems = {};
let selectedItems = {};
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
    // Checks for turn count, if 25 then disables and hides img buttons and reveals the results button
    // when reveal button clicked it hides self and reveals chart
    if(turns > 24) {
        imgButtons.disable;
        productSelection.classList.add('hidden');
        header.classList.add('hidden');
        resultsButton.classList.remove('hidden');
    }
    
    if(masterItemSet.list.length < 3) {
        masterItemSet = new ItemSet(items);
        for(let i = 0; i < itemsToDisplay.length; i++) {
            masterItemSet.removeByCode(itemsToDisplay[i].code);
        }
    }

    let itemSet = masterItemSet;

    itemsToDisplay = [];

    // generates 3 random imgs to display, stores and removes from item set
    for(let i = 0; i < 3; i++) {
        let renderItem = itemSet.getRandomItem();
        itemsToDisplay.push(renderItem);
        tally(displayedItems, renderItem.code);
        itemSet.removeByCode(renderItem.code);

        // displaying image and removing hidden class
        let button = imgButtons[i];
        button.value = renderItem.code;
        let img = button.querySelector('img');
        img.src = renderItem.image;
        img.alt = renderItem.code;
        img.classList.remove('hidden');
    }
}

// adding event listener to each button instead of container
for(let button of imgButtons) {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        turns++;
        tally(selectedItems, button.value);
        renderItems();
    });
}

resultsButton.addEventListener('click', (event) => { 
    event.preventDefault();
    resultsButton.classList.add('hidden');
    chart.classList.remove('hidden');

    renderChart(chart, selectedItems, displayedItems);
    renderListSelections(selectedItems, displayedItems, choiceList);
    renderListTotals(displayedItems, displayedList);
    resultsContainer.classList.remove('hidden');
    return;
});

renderItems();