Vue.component('custom-input',{
    props: ['valor'],
    template:'<input v-bind:value="valor" v-on:input="$emit(\'input\', $event.target.value)"></input>'
})

var vm = new Vue({
    el:'#app19'
})