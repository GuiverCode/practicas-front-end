//obtiene el elemento nodo
var itemTwo = document.getElementById('two');

//obtiene el texto del text nodo
var elText = itemTwo.textContent;
//elText = itemTwo.firstChild.nodeValue;
//reemplaza el texto
elText = elText.replace('pine nuts','kalesita');

//actualiza el text nodo
itemTwo.textContent = elText;

//itemTwo.firstChild.nodeValue = 'Kale';
