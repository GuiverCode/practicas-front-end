var vm = new Vue({
    el:'#app28',
    data:{
        persona: {
            nombre:'guille',
            apellido:'veron',
            edad:22
        }
    }
})

/*esto no es reactivo: vm.persona['cedula']
solucion:Vue.set(object, index, newValue) 
Vue.set(vm.persona, 'cedula', 5660226)
Para pasar varios atributos:
vm.persona = Object.assign({}, vm.persona, {
  age: 27,
  favoriteColor: 'Vue Green'
})

*/
