/* El event object posee propiedades que retornan la posicion del raton 
screenX y screenY: Retornan la posicion del raton dentro de la pantalla
pageX y pageY: Retornan la posicion del raton dentro de la pagina
clientX y clientY: Retornan la posicion del raton dentro del viewport
*/

function showMousePosition(e){
    var sx = document.getElementById('sx');
    var sy = document.getElementById('sy');
    var px = document.getElementById('px');
    var py = document.getElementById('py');
    var cx = document.getElementById('cx');
    var cy = document.getElementById('cy');
    
    sx.value = e.screenX;
    sy.value = e.screenY;
    px.value = e.pageX;
    py.value = e.pageY;
    cx.value = e.clientX;
    cy.value = e.clientY;
}

//agrega el event listener para el evento mousemove al body
document.body.addEventListener('mousemove',showMousePosition,false);