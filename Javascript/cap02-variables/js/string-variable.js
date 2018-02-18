var username;
var message;

username = 'Holly';
message = 'See our upcoming range';

//obtiene el elemento cuyo id es 'name'
var elName = document.getElementById('name');
//modifica el texto del elemento 
elName.textContent = username;

//obtiene el elemento cuyo id es 'note'
var elNote = document.getElementById('note');
//modifica el texto del elemento 
elNote.textContent = message;

