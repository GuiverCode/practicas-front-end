var msg = 'Sign up to recieve our newsletter for 10% off!';

function updateMessage(){
    var elMessage = document.getElementById('message');
    elMessage.textContent = msg;
}

updateMessage();