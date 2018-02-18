var title;
var message;

title = "Molly's Special Offers";
message = '<a href="sale.html">25% off</a>';

//obtiene el elemento html cuyo id es 'title'
var elTitle = document.getElementById('title');
//agrega html a la pagina
elTitle.innerHTML = title;

var elNote = document.getElementById('note');
elNote.innerHTML = message