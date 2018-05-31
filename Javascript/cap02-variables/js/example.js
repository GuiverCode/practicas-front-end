var greeting = 'Howdy';
var userName = 'Molly';
var message = 'please check your order:';
var sign = 'Montague House';
var tiles = sign.length, cost = 5, shipping = 7;

var welcome = greeting + ' ' + userName + ', ' +message;
var subTotal = tiles * cost;
var grandTotal = subTotal + shipping;

//obtiene el elemento cuyo id es greeting
var elGreeting = document.getElementById('greeting');
//cambia el texto del elemento 
elGreeting.textContent = welcome;

//obtiene el elemento cuyo id es sign
var elSign = document.getElementById('userSign');
//cambia el texto del elemento 
elSign.textContent = sign;

//obtiene el elemento cuyo id es tiles
var elTiles = document.getElementById('tiles');
//cambia el texto del elemento 
elTiles.textContent = tiles;

//obtiene el elemento cuyo id es subtotal
var elSubtotal = document.getElementById('subtotal');
//cambia el texto del elemento 
elSubtotal.textContent = '$' + subTotal;

//obtiene el elemento cuyo id es shipping
var elShipping = document.getElementById('shipping');
//cambia el texto del elemento 
elShipping.textContent = '$' + shipping;

//obtiene el elemento cuyo id es grandTotal
var elGrandtotal = document.getElementById('grandTotal');
//cambia el texto del elemento 
elGrandtotal.textContent = '$' + grandTotal;




