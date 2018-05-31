/*html5 - events
DOMContentLoaded: Se dispara cuando el arbol DOM esta formado, puede que no todos los recursos(imagenes, scripts, css, etc) esten cargados, por esa razon es mas rapido que el load event
tanto load como DOMContentLoaded deben ser vinculados al window object*/

var el = document.getElementById('message');

function setup(){
    el.focus();
}

window.addEventListener('DOMContentLoaded',setup, false);
window.addEventListener('beforeunload', function(e){var msg = 'si pulsas salir se perderan los cambios.'; e.returnValue = msg; return msg;});

