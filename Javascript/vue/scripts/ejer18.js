//$emit: emite un evento al padre
//el segundo parametro emite un valor
//usando $event en el padre se puede acceder a dicho valor
Vue.component('blog-post',{
    props: ['post'],
    template: '<div><h3> {{ post.title }} </h3><button v-on:click = "$emit(\'agrandar-texto\',0.1)" >Agrandar</button><div v-html = "post.content"></div></div>'
})

var vm = new Vue({
    el:'#app18',
    data:{
        posts: [
            {id:1, title:'post 1', content:'vacio'},
            {id:2, title:'post 2', content:'vacio'},
            {id:3, title:'post 3', content:'vacio'}
        ],
        postFontSize:1
    },
    methods:{
        aumentar: function(cantAumento){
            this.postFontSize += cantAumento
        }
    }
})