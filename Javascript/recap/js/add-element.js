//crea un elemento que puede ser agregado al arbol DOM
var elemento = document.createElement('li');

//crea un text node
var txt = document.createTextNode('quinoa');

//adjunta el text node al elemento
elemento.appendChild(txt);

var el = document.getElementsByTagName('ul')[0];
el.appendChild(elemento);