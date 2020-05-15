(function () {
'use strict';

angular.module('LunchApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope) {
  $scope.food = "";
  $scope.foodMessage;

  $scope.countFood = function () {
    if ($scope.food.length > 0) {
      var foodArr;
      var count;
      foodArr = $scope.food.split(",");
      count = foodArr.length;
      $scope.foodMessage = "Found "+count+" food items";
    } else {
      $scope.foodMessage = "Please enter a value";
    }
  };
}

})()
