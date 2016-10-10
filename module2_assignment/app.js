(function () {
'use strict';

angular.module('ShoppingListCheckOff',[])

.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var itemToBuy = this;

  itemToBuy.itemsToBuyList = ShoppingListCheckOffService.getTobuy();
  itemToBuy.removeItem = function(itemIndex){
    ShoppingListCheckOffService.removeItem(itemIndex);
  }

}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var itemBought = this;

  itemBought.itemsBoughtList = ShoppingListCheckOffService.getBought();
}


function ShoppingListCheckOffService() {
  var service = this;

  var itemsToBuyList = [{name:"Apples", quantity:"10"},{name:"Bananas", quantity:"6"},{name:"Candy", quantity:"10"},{name:"Donuts", quantity:"2"},{name:"Eggs", quantity:"8"}];
  var itemsBoughtList = [];

  service.getTobuy = function () {
    return itemsToBuyList;
  };

  service.getBought = function () {
    return itemsBoughtList;
  };

  service.removeItem = function (itemIndex) {
    itemsBoughtList.push(itemsToBuyList[itemIndex]);
    itemsToBuyList.splice(itemIndex,1);
  };

  //
  // service.getItems = function () {
  //   return items;
  // };
}
})();
