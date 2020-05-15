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
      var count = 0;
      foodArr = $scope.food.split(",");
      for (var i = 0; i < foodArr.length; i++) {
        var entry = foodArr[i];
        if (entry.trim().length > 0) {
          count++;
        }
      }
      if (count <= 3) {
        $scope.foodMessage = "Enjoy!";
      } else {
        $scope.foodMessage = "Too Much!";
      }
    } else {
      $scope.foodMessage = "Please enter a value";
    }
  };
}

})()
