function renderList(counts, list) {
    let objectKeys = Object.keys(counts);
    for(let itemKey of objectKeys) {
        const li = document.createElement('li');    
        li.innerText = `${itemKey} : ${counts[itemKey]}`
        list.appendChild(li);
    }
}

export default renderList;