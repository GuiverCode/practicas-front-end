//cuando se quiere especificar el tipo de c/ prop se utiliza notaciocion de array
/*Vue.component('blog-post',{
    props: {
        title: String,
        likes: Number,
        isPublished: Boolean,
        commentIds: Array,
        author: Object
      },
    template:'<div><h3>{{title}}</h3>Un post de: {{author.name}}</div>'
})*/
Vue.component('blog-post',{
    props:['post'],
    template: '<div><h3>{{post.title}}</h3>Un post de: {{post.author.name}}</div>'
})

var vm = new Vue({
    el:'#app39',
    data:{
        post: {
            title: 'Salud, Francia campeón del mundo!',
            likes:0,
            isPublished:true,
            commentIds:[],
            author:{name:'Jhon Duck'}
        }
    }
})

