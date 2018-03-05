(function () {
    var hotel = {
        name: 'Park',
        roomRate: 240,
        discount: 15,

        offerPrice: function(){
            var aux = (this.discount/100) * this.roomRate;
            return this.roomRate - aux;
        }
    };
    var elHotelName = document.getElementById('hotelName');
    elHotelName.textContent = hotel.name;
    var elRoomRate = document.getElementById('roomRate');
    elRoomRate.textContent = '$' + hotel.roomRate.toFixed(2);
    var elSpecialRate = document.getElementById('specialRate');
    elSpecialRate.textContent = '$' + hotel.offerPrice();

    var fechaIni = new Date('Feb 21, 2018 00:00:00');//fecha que inicia la oferta
    duracion = 7//duracion de la oferta en dias
    
    var fechaFin = calcularFechaFin(fechaIni,duracion);
    var diasOferta = calcularDiasOferta(fechaFin);

    function calcularFechaFin(fechaIni, duracion){
        //1 dia en milisegundos = 24*60*60*1000 
        var fechaFin = new Date(fechaIni.getTime() + 7*24*60*60*1000);
        return fechaFin;
    }

    function calcularDiasOferta(fechaFin){
        var fechaHoy = new Date();
        //1 dia = 24*60*60*1000 = 86400000 milisegundos
        var dias = Math.round((fechaFin.getTime() - fechaHoy.getTime()) / 86400000);
        return dias;
    }

   
    var elOfferEnds = document.getElementById('offerEnds');
    var dias = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    var meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    var msg;
    if (diasOferta > 0) {
        msg = 'La oferta expira el siguiente ';
        msg += dias[fechaFin.getDay()] + '<br>';
        msg += fechaFin.getDate() + ' ' + meses[fechaFin.getMonth()] +' ' + fechaFin.getFullYear();
        msg += '<br>Solo quedan ' + diasOferta + ' d&iacute;as!';
    } else {
     msg ='Lo sentimos, la oferta ha expirado'   
    }
    elOfferEnds.innerHTML = msg;


}());