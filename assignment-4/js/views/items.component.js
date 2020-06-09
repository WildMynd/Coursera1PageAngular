(function () {
  'use strict';

  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'js/views/templates/items.template.html',
    bindings: {
      list: '<'
    }
  });

})();
