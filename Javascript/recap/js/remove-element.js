//selecciona el elemento a eliminar
var removeEl = document.getElementsByTagName('li')[3];

//selecciona el elemento padre del elemento a ser eliminado
var parent = removeEl.parentNode;

//elimina el elemento
parent.removeChild(removeEl);

//crea un elemento
var a = document.createElement('a');
//agrega atributos al elemento
a.setAttribute('href','http://www.google.com');
a.id = 'a';
//agrega el elemento al DOM
document.getElementsByTagName('ul')[0].appendChild(a)
document.getElementById('a').textContent = 'hola';
//imprime en consola el valor del atributo href del elemento
console.log(document.getElementById('a').href);