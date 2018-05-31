/* argumentos de los metodos jquery ajax request:
1- url del archivo(en el mismo server) que procesara la solicitud
2- el queryString o json a enviar
3- la funcion que procesara la respuesta del server*/

//selecciona los elementos y vincula el evento
$('#selector a').on('click', function(e) {
    //evita el comportamiento por defecto
    e.preventDefault();

    //prepara el/los dato/s que se van a enviar
    var queryString = 'vote=' + $(e.target).attr('id');//e.target.getAttribute('id');

    //envia un ajax request get
    $.get('votes.php', queryString, function (data) {
        $('#selector').html(data);
        //document.getElementById('selector').innerHTML(data);
    })
})
