Vue.component('my-component',{
    props: ['item', 'index'],
    template: '<li> {{index}}. {{item}} </li>'
})

var vm = new Vue({
    el:'#app33',
    data:{
        items:['perro','gato','loro','leon']
    }
})