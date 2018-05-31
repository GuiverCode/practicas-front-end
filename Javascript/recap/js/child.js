var list = document.getElementsByTagName('ul')[0];//selecciona el 1er elemento <ul>
var firstChild = list.firstChild;//selecciona el 1er hijo del elemento <ul>
var lastChild = list.lastChild;//selecciona el ultimo hijo del elemento <ul>
//establece un nuevo valor para el atributo class
firstChild.setAttribute('class','complete');
lastChild.setAttribute('class','cool');
console.log(firstChild.innerText);
