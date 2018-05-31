//selecciona el elemento a remover
//el 4 elemento de un li
var removeEl = document.getElementsByTagName('li')[3];

//selecciona el elemento padre
var containerEl = removeEl.parentNode;

//elimina el elemento
containerEl.removeChild(removeEl);