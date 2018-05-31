//crea elementos para agregar al DOM
var contenido = '<div class =\"header\"><a id=\"close\" href=\"#\">Close</a></div>';
contenido += '<div><h2>System Maintenance</h2>';
contenido += '<p>Our servers are being updated between 3 and 4 a.m. During this time, there may be minor discruptions to service.</p></div>'

//agrega los nuevos elementos al DOM
var elNote = document.createElement('div');
elNote.setAttribute('id','note');
elNote.innerHTML = contenido;
document.body.appendChild(elNote);

//funcion que elimina el elemento elNote del DOM
function removeNote(){
    document.body.removeChild(elNote);
}

var elClose = document.getElementById('close');
elClose.addEventListener('click',removeNote,false);