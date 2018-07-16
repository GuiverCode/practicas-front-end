var app5 = new Vue({
    el:'#app-5',
    data : {
        message: 'Hello friend!'
    },
    methods: {
        reverseMessage: function() {
            //split separa cuando encuentra un espacio
            this.message = this.message.split('').reverse().join('')
        }
    }
})