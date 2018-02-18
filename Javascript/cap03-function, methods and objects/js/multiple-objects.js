//crear multiples instancias de un objeto a traves de un template

//template Hotel
function Hotel(name, rooms, booked){
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailibility = function(){
        return this.rooms - this.booked;
    };
}

//crea dos instancias de Hotel
var hotelQuay = new Hotel('Quay', 30, 17);
var hotelPark = new Hotel('Park', 55, 32);

//detalles para la pagina web
var details1 = hotelQuay.name + ' rooms: '+ hotelQuay.checkAvailibility();
var details2 = hotelPark.name + ' rooms: '+ hotelPark.checkAvailibility();

//obtiene los elementos html
var elHotel1 = document.getElementById('hotel1');
var elHotel2 = document.getElementById('hotel2');

//actualiza los valores de los elementos
elHotel1.textContent = details1;
elHotel2.textContent = details2;

