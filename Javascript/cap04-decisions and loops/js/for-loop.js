var puntuaciones = [50,75,62];
var dim = puntuaciones.length;
var msg='';

for (var i = 0; i<dim; i++){
    msg += 'Round ' + (i+1) +': ';
    msg += puntuaciones[i] +'<br>';
}

var elAnswer = document.getElementById('answer');
elAnswer.innerHTML = msg;