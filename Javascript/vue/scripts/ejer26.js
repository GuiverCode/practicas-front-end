var vm = new Vue({
    el:'#app26',
    data:{
        loginType:'username',
        styleObject:{
            border: '1px solid #eee',
            radius: '2px',
            padding: '25px 50px',
            size: '1.2em',
        }
    },
    methods:{
        toggle: function(){
            if(this.loginType === 'username'){
                this.loginType = ''
            }
            else{
                this.loginType = 'username'
            }
        }
    }
})