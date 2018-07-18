var vm = new Vue({
    el:'#app30',
    data:{
        numeros : [1,2,3,4,5,6,7,8,9,10]
    },
    methods:{
        pares: function(numbers){
            return numbers.filter(function(n){
                return (n%2 == 0)
            })
        }
    }
})