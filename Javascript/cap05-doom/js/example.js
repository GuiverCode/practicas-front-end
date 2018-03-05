//agregando items al inicio y al final de la lista
var lista = document.getElementsByTagName('ul')[0];

//agrega items al final
var item2 = document.createElement('li');
var text2 = document.createTextNode('quenia');
item2.appendChild(text2);
lista.appendChild(item2);

//agrega items al inicio
var item1 = document.createElement('li');
var text1 = document.createTextNode('kale');
item1.appendChild(text1);
lista.insertBefore(item1, lista.firstChild);

//establece la misma clase a todos los elementos li
var listitems = document.getElementsByTagName('li');
for(var i = 0; i<listitems.length; i++){
    listitems[i].className = 'cool';
}

var numItems = listitems.length;//n elementos en la lista
var elHeading = document.querySelector('h2');//obtiene h2
//tambien seria valido usar nodeValue
var newtextHeading = elHeading.textContent;//obtiene texto h2
newtextHeading += '<span>' + numItems + '</span>';//nuevo texto h2
elHeading.innerHTML = newtextHeading; //actualiza texto h2


