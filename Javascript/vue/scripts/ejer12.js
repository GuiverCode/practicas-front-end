var vm = new Vue({
    el:'#app12',
    data:{
        nombre:'',
        apellido:''
    },
    computed:{
        nombreCompleto:{
            get: function(){
                return this.nombre + ' ' + this.apellido
            },
            set: function(val){
                var nombreCompleto = val.split(' ')
                this.nombre = nombreCompleto[0]
                this.apellido = nombreCompleto[nombreCompleto.length - 1] 
            }
        }
    }
})