(function () {
'use strict';

function MyFilterFactory() {
  return function(input, arg1) {
    var changedInput;
    //change input]
    if (Number.isInteger(arg1)) {
      changedInput = arg1 + " items -- "+input;
    }
    return changedInput;
  }
}

angular.module('LunchApp', [])
.controller('LunchCheckController', LunchCheckController)
.filter('my',MyFilterFactory);



LunchCheckController.$inject = ['$scope', 'myFilter'];
function LunchCheckController($scope, myFilter) {
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
        $scope.foodMessage = "Too much!";
      }
      var countMessage = myFilter($scope.foodMessage,count);
      $scope.foodMessage = countMessage;
    } else {
      $scope.foodMessage = "Please enter data first";
    }
  };
}

})()
