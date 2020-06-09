(function () {
  'use strict';

  angular.module('Data')
  .service('MenuDataService', MenuDataService);


  MenuDataService.$inject = ['$q', '$http']
  function MenuDataService($q, $http) {
    var service = this;
    console.log("In Menu Data Service");
    service.categoryUrl = 'https://davids-restaurant.herokuapp.com/categories.json';
    service.itemsUrl = 'https://davids-restaurant.herokuapp.com/menu_items.json?category=';

    service.getCategories = function () {
      var deferred = $q.defer();

      console.log("In menu data get categories");
      var categories;

      $http.get(service.categoryUrl).then(function(response) {
        categories = response.data;
  //      console.log("SUCCESS: Found " + categories.length + " items");
  //      console.log("details: "+ JSON.stringify(categories));
        deferred.resolve(categories);
      }).catch(function(e) {
        var message = JSON.stringify(e);
        console.log(message);
        deferred.reject(message);
      });
      return deferred.promise;
    };

    service.getItemsForCategory = function (categoryId) {
      var deferred = $q.defer();
      var menuItems;
      console.log("getItemsForCategory() + searching for items by "+ categoryId);
      var catUrl = service.itemsUrl+categoryId;

      $http.get(catUrl).then(function(response) {
        menuItems = response.data.menu_items;
        console.log("SUCCESS: Found " + menuItems.length + " items");
        //      console.log("details: "+ JSON.stringify(menuItems));
        deferred.resolve(menuItems);
      }).catch(function(e) {
        var message = JSON.stringify(e);
        console.log(message);
        deferred.reject(message);
      });
      return deferred.promise;
    };

  }

})();
