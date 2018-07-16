var app11 = new Vue({
    el:'#app11',
    data:{
        message:'hola mundo'
    },
    computed:{
        reversedMessage: function(){
            //this apunta a la instancia app11
            return this.message.split(' ').reverse().join(' ')
        }
    }
})