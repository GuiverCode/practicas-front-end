Vue.component('button-counter',{
    //data debe ser una funcion que retorna un valor
    data: function(){
        return {
            count : 0
        }
    },
    template:'<button v-on:click="count++">You clicked me {{count}} times</button>'
})

var vm = new Vue({el:'#components-demo'})