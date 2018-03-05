var level = 2;
var msg;

switch(level){
    case 1:
        msg = 'Nivel 1';
        break;
    case 2:
        msg = 'Nivel 2';
        break;
    case 3:
        msg = 'Nivel 3';
        break;
    case 4:
        msg = 'Nivel 4';
        break;
    default:
        msg = 'Default';
        break;    
}

var elAnswer = document.getElementById('answer');
elAnswer.textContent = msg;