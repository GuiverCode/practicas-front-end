new Vue({
    el:'#app36',
    data:{usuario:''},
    methods:{
        saludo: function(event){
            //event es el nativo event object
            if(!this.usuario){
                alert('Debe ingresar su nombre :)');
                return
            }
            alert('Hola, ' + this.usuario);
            alert('Evento: ' + event.target.tagName);
        },
        decirAlgo: function(algo){
            alert(algo);
        },
        pararlink : function(mensaje, event){
            if(event){
                //event object
                event.preventDefault();
                alert(mensaje);
                return;
            }
        }
    }
    
})