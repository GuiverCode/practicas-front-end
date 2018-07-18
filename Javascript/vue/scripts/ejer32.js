
function Item(name, isAvailable){
    this.name = name;
    this.isAvailable = isAvailable
}

var vm = new Vue({
    el:'#app32',
    data:{
        items:[
            new Item('item1',false),
            new Item('item2',true),
            new Item('item3',false),
            new Item('item4',true)
        ]
    }
})

