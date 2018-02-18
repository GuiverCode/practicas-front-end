//crea un objeto hotel con notacion literal.
var hotel = {
    name: 'Park',
    rooms: 77,
    booked: 77
};

//agrega nuevas propiedades
hotel.gym = true;
hotel.pool = false;

//elimina la propiedad booked del objeto
delete hotel.booked;

//obtiene los elementos html
var elHotel = document.getElementById('hotelName');
var elPool = document.getElementById('pool');
var elGym = document.getElementById('gym');

//actualiza los elementos html
elHotel.textContent = hotel.name;
elPool.className = hotel.pool;
elGym.className = hotel.gym;


