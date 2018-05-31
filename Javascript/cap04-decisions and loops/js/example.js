var factor = 3;
var operador = 'Multiplicacion';
var msg = '';


if(operador === 'Multiplicacion'){
    for(var i = 1; i <= 10; i++){
        msg += i + ' x ' + factor + ' = ' + (i*factor) + '<br>';
    }
}else{
    for(var i = 1; i <= 10; i++){
        msg += i + ' + ' + factor + ' = ' + (i+factor) + '<br>';
    }
}

var elBlackboard = document.getElementById('blackboard');
elBlackboard.innerHTML = msg;

