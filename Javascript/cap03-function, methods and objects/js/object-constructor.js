//creacion de un objeto con el constructor Object().
var hotel = new Object();

//Asignando propiedades y metodos al objeto.
hotel.name = 'Park';
hotel.rooms = 120;
hotel.booked = 77;
hotel.checkAvailibility = function(){
    return this.rooms - this.booked;
};

//obtiene el elemento cuyo id es hotelName.
var elName = document.getElementById('hotelName');
//actualiza el valor del elemento
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailibility();
