/*//before: agrega contenido antes del elemento seleccionado
$('ul').before('<p>Just updated</p>');
//prepend agrega contenido despues del tag de apertura del elemento seleccionado
$('li.hot').prepend('+ ');
//append agrega contenido antes del tag de cierre </>
//$('ul').append('<li>gluten-free soy sauce</li>');
var $newItem = $('<li><em>gluten-free</em> soy sauce</li>');
$('ul').append($newItem);*/

//mismo codigo en javascript puro
var items = document.querySelectorAll('li.hot');
var content = '';
if (items.length > 0) {
    for(var i=0; i<items.length; i++){
        items[i].innerHTML = '+ ' + items[i].innerHTML;
    }
}
