var colors; // aqui el valor de colors es undefined
colors = ['white', 'black', 'custom']; // aqui es un array

//actualiza el tercer elemento de un array
colors[2] = 'beige';

//obtiene el elemento cuyo id es color
var elColors = document.getElementById('color');

//reemplaza el texto del elemento
elColors.textContent = colors[2];