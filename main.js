let splash = () => {
    return new Promise(resolve) => {
        fetch(`https://source.unsplash.com/`).then((response) => {   
    let item = document.createElement('div');
    item.classList.add('item');
    item.innerHTML = `<img class="beach-image" src="${response.url}" alt="beach image"/>`     
    document.body.appendChild(item);
  }) 
}

async function getSplash() {
    const a = await splash();
    const b = await splash();
    return a, b; 
}



/* function renderItem(){
  fetch(`https://source.unsplash.com/1600x900/?beach`).then((response) => {   
    let item = document.createElement('div');
    item.classList.add('item');
    item.innerHTML = `<img class="beach-image" src="${response.url}" alt="beach image"/>`     
    document.body.appendChild(item);
  }) 
}
*/


/* fetch('https://api.unsplash.com/').then(function(response) {
            return response.json();
        }).then(function(myJson) {
            console.log(JSON.stringify(myJson));
        })
    }
}
*/