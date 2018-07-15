//<slot> permite enviar contenido a un componente
Vue.component('alert-box',{
    template: '<div><strong>Error! </strong><slot></slot></div>'
})

new Vue({el:'#app20'})