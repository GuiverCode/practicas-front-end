var el = document.getElementById('one');

if(el.hasAttribute('class')){//si tiene el atributo class
    //obtiene el valor del atributo clase
    var att = el.getAttribute('class');
    var elemento = document.getElementById('scriptResults');
    elemento.innerHTML = '<p>El item 1 tiene una clase: ' + att + '</p>';
}