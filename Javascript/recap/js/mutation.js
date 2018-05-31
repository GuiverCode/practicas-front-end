/*mutation events
DOMNodeInserted: se enciende cuando un nuevo elemento es insertado al DOM*/

function agregarItem(e){
    //agrega un nuevo elemento a la lista
    var newItem = document.createElement('li');
    newItem.textContent = 'New item';
    elList.appendChild(newItem);
    e.preventDefault();
}

function actualizarContador(){
    var contador = document.getElementById('counter');
    var lista = document.querySelectorAll('li');
    contador.textContent = lista.length; 
     
}


var elLink = document.querySelector('a');//retorna el 1er elemento <a>
elLink.addEventListener('click', agregarItem, false);

//evento que se dispara cuando se inserta un nuevo elemento en la lista <ul>
var elList = document.getElementById('list')
elList.addEventListener('DOMNodeInserted',actualizarContador, false);