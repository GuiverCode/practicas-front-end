$(document).ready(function() {
    //reemplaza el texto de los elementos <li> que contienen la palabra "pine"
    $('li:contains("pine")').text('almonds');
    //agrega una etiqueta <em> al texto de los elementos <li> con la clase .hot
    $('li.hot').html(function() {
        return '<em>' + $(this).text() + '</em>';
    })
    //elimina el elemento <li> cuyo id es one
    $('li#one').remove();
})

/*function changingContent() {
    var itemsList = document.querySelectorAll('li.hot');
    var content;

    for(var i=0; i<itemsList.length; i++){
        content = itemsList[i].textContent
        itemsList[i].innerHTML = '<strong>' + content + '</strong>';
    }
}

window.addEventListener('DOMContentLoaded',changingContent, false);*/
