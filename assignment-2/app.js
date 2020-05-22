(function () {
'use strict';

angular.module('ShoppingListsApp', [])
.controller('ToBuyListController', ToBuyListController)
.controller('BoughtListController', BoughtListController)
.provider('ShoppingListService', ShoppingListServiceProvider)
.config(Config);

Config.$inject = ['ShoppingListServiceProvider'];
function Config(ShoppingListServiceProvider) {
  // Initialize lists
  ShoppingListServiceProvider.defaults.maxItems = 10;
  ShoppingListServiceProvider.defaults.defaultItems = [
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

ToBuyListController.$inject = ['ShoppingListService'];
function ToBuyListController(ShoppingListService) {
  var toBuyList = this;

  toBuyList.errorMessage="Everything is bought!";
  toBuyList.items = ShoppingListService.getToBuyItems();

  toBuyList.buyItem = function (itemIndex) {
    ShoppingListService.buyItem(itemIndex);
  };
}

BoughtListController.$inject = ['ShoppingListService'];
function BoughtListController(ShoppingListService) {
  var boughtList = this;

  boughtList.errorMessage = "Nothing bought yet";
  boughtList.items = ShoppingListService.getBoughtItems();

}

function ShoppingListService(maxItems, itemsToBuy) {
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

function ShoppingListServiceProvider() {
  var provider = this;
  var shoppingList;

  provider.defaults = {
    maxItems: 5,
    toBuyItems: []
  };

  provider.$get = function () {
    if (typeof shoppingList === "undefined") {
      shoppingList = new ShoppingListService(provider.defaults.maxItems,
                                                 provider.defaults.defaultItems);
    }
    return shoppingList;
  };
}
})();
