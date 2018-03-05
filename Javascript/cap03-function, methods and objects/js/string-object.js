//atributos y metodos del objeto String
var phrase = 'Home sweet home ';
var msg = '<h2>length</h2><p>' + phrase.length + '</p>';
msg += '<h2>uppercase</h2><p>' + phrase.toUpperCase() + '</p>';
msg += '<h2>lowercase</h2><p>' + phrase.toLowerCase() + '</p>';
msg += '<h2>character index</h2><p> 12<br>' + phrase.charAt(12) + '</p>';
msg += '<h2>first ee</h2><p>' + phrase.indexOf('ee') + '</p>';
msg += '<h2>last e</h2><p>' + phrase.lastIndexOf('e') + '</p>';
msg += '<h2>character index</h2><p>8-14<br>' + phrase.substr(8,14) + '</p>';
msg += '<h2>replace</h2><p>' + phrase.replace('me','w') + '</p>';

var elInfo = document.getElementById('info');
elInfo.innerHTML = msg;