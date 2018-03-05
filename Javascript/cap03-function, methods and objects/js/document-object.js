//atributos y metodos del DOM
var msg = '<p><b>page title: </b>' + document.title + '<br>';
msg += '<b>page address: </b>' + document.URL + '<br>';
msg += '<b>last modified: </b>' +document.lastModified + '</p>';

var elFooter = document.getElementById('footer');
elFooter.innerHTML = msg;
