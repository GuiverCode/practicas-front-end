//getJSON() retorna un objeto js, no hay que parsear 
$('#exchangerates').append('<div id="rates"></div><div id="reload"></div>');

function loadRates() {
    $.getJSON('data/rates.json').done(
        function(data) {//peticion exitosa
        var d = new Date();                                  
        var hrs = d.getHours();                             
        var mins = d.getMinutes();                          
        var msg = '<h2>Exchange Rates</h2>';
        for (key in data) { //por cada atributo en data
            //crea un div que contendra el atributo actual         
            msg += '<div class="' + key + '">' + key + ': ' + data[key] + '</div>';  
        }
        msg += '<br>Last update: ' + hrs + ':' + mins + '<br>'; // Show update time
        $('#rates').html(msg); 
    }).fail( function() {
        $('#rates').text('Sorry. Try again later');
    }).always( function () {
        //inserta un enlace para refrescar la pag
        var reload = '<a id="refresh" href="#">';
        reload += '<img src="img/refresh.png"</a>';
        $('#reload').html(reload);
        $('#refresh').on('click', function (e) {
            //evita el comportamiento por defecto del enlace
            e.preventDefault();
            loadRates();
        })
    })
}

loadRates();

