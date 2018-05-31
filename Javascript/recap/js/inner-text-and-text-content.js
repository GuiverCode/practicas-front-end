var firstItem = document.getElementById('one');
var showTextContent = firstItem.textContent;
var showInnerText = firstItem.innerText;

var el = document.getElementById('scriptResults');
var msg = '<p>textContent: ' + showTextContent + '</p>';
msg += '<p>innerText: ' + showInnerText + '</p>';
el.innerHTML  = msg;
firstItem.textContent = 'sourdrough bread'