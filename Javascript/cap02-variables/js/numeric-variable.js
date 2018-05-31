var price;
var quantity;
var total;

price = 5;
quantity = 14;
total = price * quantity;

//obtiene el elemento cuyo id es 'cost'
var el  = document.getElementById('cost');

//modifica el contenido del elemento cuyo id es 'cost'
el.textContent = '$' + total;