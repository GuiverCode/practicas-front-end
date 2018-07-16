
var vm = new Vue({
    el:'#app14',
    data:{
        question:'',
        answer:'No puedo responder hasta que hagas una pregunta!',
    },  
    watch:{
        question: function(newQuestion, oldQuestion){
            this.answer = 'Esperando por la pregunta...'
            this.debouncedGetAnswer()
        }
    },
    created: function(){
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods:{
        getAnswer: function(){
            if(this.question.indexOf('?') == -1){
                this.answer = 'Las preguntas llevan signo de interrogacion. :)'
                return
            }
            this.answer = 'Pensando...'
            var vm = this
            axios.get('https://yesno.wtf/api')
            .then(function(response){
                vm.answer = response.data.answer
            })
            .catch(function(error){
                vm.answer = 'Error. Ups, algo salió mal'
            })
        }
    }
})
