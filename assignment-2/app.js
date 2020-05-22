(function () {
'use strict';

angular.module('ShoppingListCheckOffApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.provider('ShoppingListCheckOffService', ShoppingListCheckOffServiceProvider)
.config(Config);

Config.$inject = ['ShoppingListCheckOffServiceProvider'];
function Config(ShoppingListCheckOffServiceProvider) {
  // Initialize lists
  ShoppingListCheckOffServiceProvider.defaults.maxItems = 10;
  ShoppingListCheckOffServiceProvider.defaults.defaultItems = [
    {name:"Bacon",quantity:"1 Pound"},
    {name:"Bread",quantity:"1 Loaf"},
    {name:"Onions",quantity:"2 Pounds"},
    {name:"Kale",quantity:"3 Pounds"},
    {name:"Milk",quantity:"1 Quart"},
    {name:"Large Eggs",quantity:"1 Dozen"},
    {name:"Chocolate Chip Cookies",quantity:"1 Bag"},
    {name:"Strawberries",quantity:"1 Quart"},
    {name:"Ice Cream",quantity:"1 Gallon"}
  ];
}

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;

  toBuyList.errorMessage="Everything is bought!";
  toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

  toBuyList.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.errorMessage = "Nothing bought yet";
  boughtList.items = ShoppingListCheckOffService.getBoughtItems();

}

function ShoppingListCheckOffService(maxItems, itemsToBuy) {
  var service = this;

  service.toBuyItems = itemsToBuy;
  service.boughtItems = [];

  service.buyItem = function (index) {
    var item = service.toBuyItems[index];
    service.boughtItems.push(item);
    service.toBuyItems.splice(index,1);
  };

  service.getToBuyItems = function () {
    return service.toBuyItems;
  };

  service.getBoughtItems = function () {
    return service.boughtItems;
  };
}

function ShoppingListCheckOffServiceProvider() {
  var provider = this;
  var shoppingList;

  provider.defaults = {
    maxItems: 5,
    toBuyItems: []
  };

  provider.$get = function () {
    if (typeof shoppingList === "undefined") {
      shoppingList = new ShoppingListCheckOffService(provider.defaults.maxItems,
                                                 provider.defaults.defaultItems);
    }
    return shoppingList;
  };
}
})();
