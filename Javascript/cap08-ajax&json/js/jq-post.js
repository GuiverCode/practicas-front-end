/* argumentos de los metodos jquery ajax request:
1- url del archivo(en el mismo server) que procesara la solicitud
2- el queryString o json a enviar
3- la funcion que procesara la respuesta del server*/

/*selecciona el formulario al cual se le vinculara un evento*/
$('#register').on('click', function(e) {
    e.preventDefault();
    //recolecta los datos del formulario
    var details = $('#register').serialize();

    //envia los datos a traves de una ajax request
    $.post('register.php', details, function(data) {
        $('#register').html(data);
    })
})
