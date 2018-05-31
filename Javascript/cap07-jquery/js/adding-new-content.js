$(function () {
    //agrega contenido antes del elemento 
    $('ul').before('<p class="notice">Just an updated</p>');

    //agrega contenido justo despues del tag de apertura
    $('li.hot').prepend('+ ');

    //agrega contenido antes del tag de cierre
    $('ul').append('<li>gluten-free soy sauce</li>');
})