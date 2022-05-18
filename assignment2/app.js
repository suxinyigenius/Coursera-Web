(function(){
'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject =['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
    var buyitem = this;
    buyitem.items =ShoppingListCheckOffService.getItems();
    buyitem.removeitem = function(itemIndex){
        ShoppingListCheckOffService.removeitem(itemIndex);
    };
    buyitem.additem= function(name,quantity){
        ShoppingListCheckOffService.additem(name,quantity)
    }
    buyitem.empty= function(){
        return buyitem.items.length==0;
    }
}

AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
    var boughtitem = this;
    boughtitem.items =  ShoppingListCheckOffService.getboughtItems();
    boughtitem.empty= function(){
        return boughtitem.items.length ==0;
    }
    };


function ShoppingListCheckOffService(){
    var service = this;
    var tobuylist = [
        {name: "Tomatoes",quantity :3},
        {name: "Kinder ",quantity :2 },
        {name :"Watermelons", quantity:1},
        {name: "Tissues", quantity:4 },
        {name: "Juices", quantity:2}
    ];
    service.getItems= function(){
        return tobuylist;
    };
    service.removeitem= function (itemIndex){
        tobuylist.splice(itemIndex, 1);
    };
    var boughtlist=[];
    service.additem = function(itemname,quantity){
        var item={
            name:itemname,
            quantity:quantity
        };
        boughtlist.push(item);
    };
    service.getItems = function(){
        return tobuylist;
    };
    service.getboughtItems = function(){
        return boughtlist;
    };
    
}


})();