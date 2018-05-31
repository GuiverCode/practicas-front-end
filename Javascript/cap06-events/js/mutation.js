var elAdd = document.querySelector('div.button a');
var elList = document.getElementById('list');
var elCount = document.getElementById('counter');

function addItem(e){
    //evita el comportamiento del link por defecto 
    e.preventDefault();

    //crea un item
    var item = document.createElement('li');
    var textItem = document.createTextNode('New list item');
    item.appendChild(textItem);

    //agrega un nuevo item a la lista
    elList.appendChild(item);
}

function updateCount(){
    elCount.textContent = elList.getElementsByTagName('li').length;
}

elAdd.addEventListener('click', addItem, false);
elList.addEventListener('DOMNodeInserted', updateCount, false);