
function giveFocus(){
    var elMsg = document.getElementById('message');
    elMsg.focus();
}

window.addEventListener('DOMContentLoaded', giveFocus, false);
window.addEventListener('beforeunload',function(e){ var msg = 'Tienes cambios sin guardar'; e.returnValue = msg;},false);