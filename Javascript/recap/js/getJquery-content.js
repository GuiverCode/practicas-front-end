/*
//obtiene el contenido html del primer <ul>
var listHtml = $('ul').html();
//agrega contenido antes de cada </ul>
$('ul').append(listHtml);
*/

/*
//obtiene el texto dentro de cada elemento <ul>
var listText = $('ul').text();
//agrega contenido antes de cada </ul>
$('ul').append('<p>' + listText + '</p>');
*/

/*
//obtiene el contenido html del primer <li>
var listItemHtml = $('li').html();
//agrega contenido antes de cada </li>
$('li').append('<i>'+listItemHtml+ '</i>');
*/

//obtiene el texto dentro de todos los elementos <li>
var listItemText = $('li').text();
//agrega contenido antes de cada </li>
$('li').append('<i>'+ listItemText + '</i>');