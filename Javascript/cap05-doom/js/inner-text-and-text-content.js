/*Diferencia entre textContent e innerText:
- innerText no retorna texto de elementos ocultos por reglas CSS
- innerText no es soportado por algunos navegadores
*/
var elemento = document.getElementById('one');
var elInnerText = elemento.innerText;
var elTextContent = elemento.textContent;


var msg = '<p>textContent: ' + elTextContent + '</p>';
msg += '<p>innerText: ' + elInnerText + '</p>';

var el = document.getElementById('scriptResults');
el.innerHTML = msg;