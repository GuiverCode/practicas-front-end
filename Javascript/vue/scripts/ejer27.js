var vm = new Vue({
    el:'#app27',
    data:{
        parentMessage: 'Parent',
        items:[
            {message: 'item 1'},
            {message: 'item 2'},
            {message: 'item 3'}
        ]
    }
})
//con v-for se tiene a todos los atributos de data, no solo al elemento que se esta iterando
/*
p1= {
    nombre: 'guille',
    apellido: 'veron',
    edad:22 
 }
 
 p2= {
     nombre: 'david',
     apellido: 'veron',
     edad:19 
  }

var vm = new Vue({
    el:'#app28',
    data:{
        personas:[p1,p2] 
    }
})
*/