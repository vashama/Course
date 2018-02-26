(function(){
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService)
{
    var buyItem = this;
    var toBuy;

    buyItem.toBuy = ShoppingListCheckOffService.gettoBuy();

    buyItem.itemName = "";
    buyItem.itemQuantity = "";

    buyItem.addToBought = function (itemName, itemQuantity, itemIndex)
    {
        ShoppingListCheckOffService.addToBought(itemName, itemQuantity, itemIndex);
    };

}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService)
{
    var boughtItem = this;
    var bought;

    boughtItem.bought = ShoppingListCheckOffService.getbought();

}

function ShoppingListCheckOffService()
{
    var service = this;

    var toBuy = [
        {
            name: "Milk",
            quantity: "1"
        },
        {
            name: "Cookies",
            quantity: "10"
        },
        {
            name: "Veggies",
            quantity: "7"
        },
        {
            name: "Bread Loaf",
            quantity: "2"
        },
        {
            name: "Jam",
            quantity: "1"
        }
    ];
    var bought = [];
    
    service.addToBought = function (itemName, itemQuantity, itemIndex) {
        var newItem = {
          name: itemName,
          quantity: itemQuantity
        };
    
    bought.push(newItem);

    toBuy.splice(itemIndex, 1);

    };

    service.gettoBuy = function () {
        return toBuy;
    };

    service.getbought = function () {
        return bought;
    };
}



})();