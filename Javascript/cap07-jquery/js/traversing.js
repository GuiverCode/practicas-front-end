/*cuando la pagina carga se esconde el elemento ul
y se agrega un link al elemento h2, luego se agrega
un manejador de evento click al elemento h2
el evento lazara una funcion que mostrara el elemento ul*/
$(function() {
    $('ul').hide();
    var $h2 = $('h2'); 
    $h2.append('<a class="show">Show</a>');//agrega un link al h2
    
    $h2.find('a').on('click', function() {
        $h2.next().fadeIn(500).children('.hot').addClass('complete');
        $h2.find('a').remove();
    })
})
