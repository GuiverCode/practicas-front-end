var elMap = document.getElementById('loc');//elemento que sostendra la localizacion
var msg = 'Sorry, we were unable to get your location';

if(Modernizr.geolocation){
    navigator.geolocation.getCurrentPosition(success, fail);
    elMap.textContent = 'Checking location...';
}
else{
    elMap.textContent = msg;
}

function success(position) {
    msg = '<h3>Longitud: ' + position.coords.longitude; + '</h3>';
    msg += '<h3>Latitud: ' + position.coords.latitude; + '</h3>';
    elMap.innerHTML = msg;
}

function fail(msg) {
    elMap.textContent = msg;
    console.log(msg.code);
}

/*
getCurrentPosition: Solicita la localizacion del usuario, retorna un objeto position
success: Es la funcion que sera llamada si la respuesta es exitosa para manejara la localizacion del usuario
fail: Es la funcion que sera llamada si la respuesta es fallida
parametro msg del fail: mensaje de error
*/