var sx = document.getElementById('sx');//elemento que sostiene screenX
var sy = document.getElementById('sy');//elemento que sostiene screeny
var px = document.getElementById('px');//elemento que sostiene pageX
var py = document.getElementById('py');//elemento que sostiene pageY
var cx = document.getElementById('cx');//elemento que sostiene clientX
var cy = document.getElementById('cy');//elemento que sostiene clientY

//actualiza la posicion de los elementos que sostienen sx, sy, px, py, cx, cy
function cambiaPosicion(e){
    sx.value = e.screenX;
    sy.value = e.screenY;
    px.value = e.pageX;
    py.value = e.pageY;
    cx.value = e.clientX;
    cy.value = e.clientY;
}

var el = document.getElementById('body');
//event object se pasa automaticamente como argumento
el.addEventListener('mousemove', cambiaPosicion, false);