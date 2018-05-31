$(function(){
	var $newItemButton = $('#newItemButton');
	var $newItemForm = $('#newItemForm');
	
	$newItemForm.hide(); //esconde el formulario
	$newItemButton.show(); //muestra el boton

	$('#showForm').on('click', function(){
		$newItemButton.hide();
		$newItemForm.show();
	});

	$newItemForm.on('submit', function(e){
		e.preventDefault();
		var newItem = $('#itemDescription').val();
		$('ul').append('<li>' + newItem + '</li>');
		$newItemForm.hide();
		$newItemButton.show();
		$('#itemDescription').val('');//vacia el input
	});

});