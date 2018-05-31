//originalmente la pagina tiene 3 elementos 'li' con la clase '.hot'

//selecciona el 1er elemento 'li' que tiene la clase '.hot'
var elHot = document.querySelector('li.hot');
elHot.className = 'cool';

//ahora quedan 2 elementos 'li' con la clase '.hot'

//selecciona todos los elementos 'li' con la clase '.hot'
var elements = document.querySelectorAll('li.hot');
elements[1].className = 'cool';

//finalmente solo queda un elemento 'li' con la clase '.hot'
//debido a que el arbol dom se actualizo en memoria