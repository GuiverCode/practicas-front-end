var vm = new Vue({
    el:'#app15',
    data:{
        esActivo: false,
        esInactivo: true
    },
    methods: {
        cambiar : function(){
            this.esActivo = !this.esActivo
            this.esInactivo = !this.esInactivo
        }
    }
})