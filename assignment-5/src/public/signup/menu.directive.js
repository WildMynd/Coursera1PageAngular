(function () {
"use strict";

//this is a placeholder for inline form validation
  angular.module('public');
  .directive('menuDirective', function() {
    return {
      require: 'ngModel',
      link: function(scope, element, attr, mCtrl) {
        function myValidation(value) {
          if (value.indexOf("e") > -1) {
            mCtrl.$setValidity('validMenu', true);
          } else {
            mCtrl.$setValidity('validMenu', false);
          }
          return value;
        }
        mCtrl.$parsers.push(myValidation);
      }
    };
  });

})();
