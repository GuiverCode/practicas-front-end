//.html() y .text() actualizan el contenido de todos los elementos
$(function() {
    //selecciona los <li> que contiene la palabra "pine" y actualiza su text
    $('li:contains("pine")').text('almonds');
    //la funcion parametro recupera el contenido actual del elemento
    $('li.hot').html(function() {
        //coloca el contenido de cada <li> dentro de un <em>
        return '<em>' + $(this).text() + '</em>';
    })
    //elimina el <li> con id=one
    $('li[id=one]').remove();
})