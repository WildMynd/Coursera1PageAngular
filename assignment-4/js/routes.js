(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'js/views/templates/home.template.html'
    })

    .state('categories', {
      url: '/mainCategories',
      templateUrl: 'js/views/templates/main-categorylist.template.html',
      controller: 'MainCategoryListController as categoriesList',
      resolve: {
        cats: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getCategories();
        }]
      }
    })

    .state('items', {
      url: '/itemsList/{catId}',
      templateUrl: 'js/views/templates/itemsList.template.html',
      controller: 'ItemsController as itemsList',
      resolve: {
        list: function (MenuDataService, $stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.catId);
        },
        catId: function ($stateParams) {
          return $stateParams.catId;
        }
      }
    });

  }

})();
