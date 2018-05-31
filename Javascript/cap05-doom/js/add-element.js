//agregar elementos a traves de la manipulacion del Dom

//crea un nuevo elemento nodo
var newEl = document.createElement('li');

//crea un nuevo text nodo
var newText = document.createTextNode('quinoa');

//adjundo el texto nodo al elemento nodo
newEl.appendChild(newText);

//selecciona la posicion donde se va a agregar el elemento al arbol doom
//se adjuntara al 1er elemento ul
var posicion = document.getElementsByTagName('ul')[0];
posicion.appendChild(newEl);