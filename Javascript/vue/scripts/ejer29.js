var vm = new Vue({
    el:'#app29',
    data:{
        numeros:[1,2,3,4,5,6,7,8,9,10,11,12]
    },
    computed:{
       /* numerosPares: function(){
            return this.numeros.filter(n => (n%2 == 0))
        }*/
        numerosPares: function(){
            return this.numeros.filter(function(n){
                return (n%2 == 0) 
            })
        }
    }
})

//para mostrar una version filtrada u ordenada de un array sin alterar al array original
//se puede realizar el calculo en computed y retornar la version del array