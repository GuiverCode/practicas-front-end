// JSON SIN JQUERY
var xhr = new XMLHttpRequest();

//evento que se enciende cuando el servidor responde 
xhr.onload = function () {
    if(xhr.status ===200){//respuesta exitosa

        //convierte el json devuelto por el servidor a un objeto javascript
        var obj = JSON.parse(xhr.responseText);
        var newContent = '<h2>Exchange Rates</h2>';
        var today = new Date();
        var hr = today.getHours();
        var mn = today.getMinutes();

        //crea un div para los cambios de moneda
        var newElement = document.createElement('div');
        newElement.setAttribute('id','rates');
        document.getElementById('exchangerates').appendChild(newElement);

         //crea un div para el refresh
        newElement = document.createElement('div');
        newElement.setAttribute('id','reload');
        document.getElementById('exchangerates').appendChild(newElement);

        //agrega el nuevo contenido al div creado
        for (key in obj) {
          
            newContent += '<div class ="'+ key + '">';
            newContent += key + ': ' + obj[key] + '</div>';
            
        }
        newContent += '<br>Last update: ' + hr + ':' + mn;
        //inserta el nuevo contenido a la pagina
        document.getElementById('rates').innerHTML = newContent;
    } 
}
xhr.open('GET','data/rates.json','true');
xhr.send(null);

/*
// JSON CON JQUERY
//contenedores para nuevo contenido en la pagina
$('#exchangerates').append('<div id="rates"></div><div id="reload"></div>');

function loadRates() 
{
    $.getJSON('data/rates.json').done(function(data) {
        //respuesta exitosa del servidor
        var newContent = '<h2>Exchange Rates</h2>';
        var today = new Date();
        var hr = today.getHours();
        var mn = today.getMinutes();

        for (key in data) 
        {  
            newContent += '<div class ="'+ key + '">';
            newContent += key + ': ' + data[key] + '</div>';   
        }
        newContent += '<br>Last update: ' + hr + ':' + mn;
        $('#rates').html(newContent);
    }).fail(function(){
        //respuesta fallida del servidor
        $('#rates').html('Algo salió mal, intenta de nuevo más tarde.');
    }).always(function() {
        //se ejecuta siempre sea exitosa o fallida la respuesta
        var refresh = '<a id = "refresh" href="#"><img src="img/refresh.png"></a>';
        $('#reload').html(refresh);
        $('#refresh').on('click', function(e) {
            e.preventDefault();
            loadRates();
        })
    });
}
loadRates();
*/