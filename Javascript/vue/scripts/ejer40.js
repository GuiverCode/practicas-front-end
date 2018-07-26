Vue.component('my-input',{
    props: ['valor'],
    template: '<div><input v-bind:value="valor" v-on:input="$emit(\'input\',$event.target.value)"></div>'
})

Vue.component('my-check',{
    props: ['check1','check2'],
    template: '<div><input type="radio" value="a" v-bind:checked="check1" v-on:change="$emit(\'change\',$event.target.checked)"><input type="radio" value="b" v-bind:checked="check2" v-on:change="$emit(\'change\',$event.target.checked)"></div>'
})

var vm = new Vue({
    el: '#app40',
    data:{
        val:'',
        check1:true,
        check2:false
    }
})


