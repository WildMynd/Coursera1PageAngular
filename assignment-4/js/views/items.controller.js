(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['list','catId'];
  function ItemsController(list,catId) {
    var itemsList = this;
    itemsList.list = list;
    itemsList.catId = catId;
  }

})();
