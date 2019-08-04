export function renderListTotals(counts, list) {
    let objectKeys = Object.keys(counts);
    for(let itemKey of objectKeys) {
        const li = document.createElement('li');    
        li.innerText = `${itemKey} : ${counts[itemKey]}`;
        list.appendChild(li);
    }
}

export function renderListSelections(counts, totals, list) {
    let objectKeys = Object.keys(counts);
    for(let itemKey of objectKeys) {
        const li = document.createElement('li');
        const count = counts[itemKey];
        const total = totals[itemKey];
        const percentage = (count / total * 100).toFixed();
        
        li.innerText = `${itemKey} : ${count} (${percentage}%)`;
        list.appendChild(li);
    }
}

function mapObjectData(keys, object) {
    return keys.map((key) => {
        if(object[key]) {
            return object[key];
        } else {
            return 0;
        }
    });
}

export function renderChart(chartElement, counts, totals) {
    Chart.defaults.global.defaultFontColor = 'black';
    const ctx = chartElement.getContext('2d');
    const products = Object.keys(totals);
    const timesDisplayedData = mapObjectData(products, totals);
    const timesSelectedData = mapObjectData(products, counts);

    const barChartData = {
        labels: products,
        datasets: [{
            label: 'Times Displayed ',
            backgroundColor: 'rgba(255, 0, 0, .5)',
            borderColor: 'rgba(255, 0, 0, 1)',
            borderWidth: 1,
            data: timesDisplayedData,
        }, {
            label: 'Times Clicked',
            backgroundColor: 'rgba(0, 0, 255, .5)',
            borderColor: 'rgba(0, 0, 255, 1)',
            borderWidth: 1,
            data: timesSelectedData
        }]

    };

    new Chart(ctx, {
        type: 'bar',
        defaultFontColor: 'black',
        data: barChartData,
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'PRODUCT RESULTS'
            }
        }
    });
}