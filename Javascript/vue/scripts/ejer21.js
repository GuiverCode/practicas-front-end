Vue.component('tab-home',{
    template: '<div>Home component</div>'
})
Vue.component('tab-posts',{
    template: '<div>Posts component</div>'
})
Vue.component('tab-archive',{
    template: '<div>Archive component</div>'
})

var vm = new Vue({
    el:'#app21',
    data:{
        currentTab: 'Home',
        tabs: ['Home', 'Posts', 'Archive']
    },
    computed:{
        currentTabComponent: function(){
            //retorna el nombre del componente actual
            return 'tab-' + this.currentTab.toLowerCase()
        }
    }
})