$(function(){
	
	//recoge los elementos <li> cuyo indece es menor que 2
	$('li:lt(2)').removeClass('hot');
	$('li:eq(0)').addClass('complete');
	$('li:gt(2)').addClass('cool');
});