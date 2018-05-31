var item = document.getElementById('one');
//obtiene el contenido del elemento (incluyendo etiquetas html)
var content = item.innerHTML;
//agrega nuevo contenido al elemento (incluyendo etiquetas html)
item.innerHTML = '<a href=\"http://example.org\">' + content +'</a>';
