var vm = new Vue({
    el:'#app13',
    data: {
        nombre: 'Jhon',
        apellido: 'Lennon',
        nombreCompleto:'Jhon Lennon'
    },
    watch:{
        nombre: function(val){
            this.nombreCompleto = val + ' ' + this.apellido
        },
        apellido: function(val){
            this.nombre = this.nombre + ' ' + val 
        }
    }
})