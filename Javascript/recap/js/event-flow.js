//el tercer parametro del addEventListener indica el orden de los eventos
//false = desde el mas especifico hasta el mas general
//true = desde el mas general hasta el mas especico

var firstItem = document.getElementById('one');
var content = firstItem.innerHTML;
//agrega un link
firstItem.innerHTML = '<a href=\"http://example.org\">' + content + '</a>';
var child = firstItem.firstChild;
var parent = firstItem.parentNode;

console.log(child.innerHTML);
console.log(firstItem.innerHTML);
console.log(parent.innerHTML);

function prueba(){
    alert(this.innerHTML);
}

//vincula los eventos 
firstItem.addEventListener('click',prueba, false);
child.addEventListener('click',prueba, false);
parent.addEventListener('click',prueba, false);
