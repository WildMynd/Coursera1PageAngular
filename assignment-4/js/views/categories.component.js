(function () {
  'use strict';

  angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'js/views/templates/categories.template.html',
    bindings: {
      items: '<'
    }
  });

})();
