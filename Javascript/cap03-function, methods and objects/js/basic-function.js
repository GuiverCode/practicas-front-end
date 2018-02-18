var msg = 'Sign up to recieve our newsletter for 10% off!';

//bloque de funcion javascript
function updateMessage(){
    var elMessage = document.getElementById('message');
    elMessage.textContent = msg;
}

//llamada a la funcion
updateMessage();
