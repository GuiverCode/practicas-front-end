var vm = new Vue({
    el: '#app-8',
    data: {message:'hola mundo'},
    //es llamada cuando se crea una instancia
    created: function() {
        console.log('se creo una instancia')
    },
    //es llamada cuando se actualiza la instancia
    updated : function(){
        console.log('se realizo una actualizacion')
    }
})