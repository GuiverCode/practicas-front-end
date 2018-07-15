Vue.component('blog-post',{
    props: ['title'], //atributo que recibe el componente
    template: '<h3> {{ title }} </h3>'
})

var vm = new Vue({el:'#app17'})