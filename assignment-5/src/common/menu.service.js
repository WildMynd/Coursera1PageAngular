(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath','$q'];
function MenuService($http, ApiPath, $q) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getMenuItem = function (menuId) {
    return $http.get(ApiPath + '/menu_items/' + menuId + '.json').then(function (response) {
      return response.data;
    });
  };

  service.checkMenuItem = function (menuId) {
    var deferred = $q.defer();
    var message = {status: false, menu_item: null};
    $http.get(ApiPath + '/menu_items.json').then(function (response) {
      console.log(response);
      var allItems = response.data.menu_items;
      console.log(allItems.length);
      for (var i = 0; i < allItems.length; i++) {
        if (allItems[i].short_name == menuId) {
          message.status = true;
          message.menu_item = allItems[i];
          deferred.resolve(message);
        }
      }
      deferred.resolve(message);
    });
    return deferred.promise;
  };


}



})();
