Vue.component('lista-tarea',{
    props: ['tarea', 'index'],
    template: '<li><span>{{index}}. {{tarea.descripcion}}</span> <button v-on:click="$emit(\'borrar\')">Borrar</button></li>'
})

function Tarea(id,descripcion){
    this.id = id;
    this.descripcion = descripcion;
}

var vm = new Vue({
    el:'#app34',
    data:{
        tareas : [new Tarea(1,'pasear al perro'), new Tarea(2,'ir al super')],
        nuevaTarea:''
    },
    methods:{
        agregar: function(){
            //verificar que se halla cargado una tarea
            if(!this.nuevaTarea){
                console.log('Debes ingresar una tarea');
                return;
            }
            var nuevoId = 1;
            if(!this.tareas.length == 0){
                var ultimaTarea = this.tareas[this.tareas.length - 1];
                nuevoId = ultimaTarea.id +1;
            }
            this.tareas.push(new Tarea(nuevoId, this.nuevaTarea));
             
        }
    }

})