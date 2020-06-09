(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('MainCategoryListController', MainCategoryListController);

  MainCategoryListController.$inject = ['cats'];
  function MainCategoryListController( cats) {
    var categoriesList = this;
    console.log("In category controller");
    categoriesList.items = cats;
    console.log("categoriesList.items length = " + categoriesList.items.length);
  }

})();
