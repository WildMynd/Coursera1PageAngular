(function () {
"use strict";

angular.module('public')
.controller('SignUpController',SignUpController);

SignUpController.$inject = ['UserService', 'MenuService','$scope'];
function SignUpController(UserService,MenuService,$scope) {
  var reg = this;

  reg.submit = function () {
    MenuService.checkMenuItem(reg.user.menufav).then(function(result) {
      if (!result.status) {
        reg.completed = false;
        reg.menuInvalid = true;
      } else {
        UserService.saveUser(reg.user,result.menu_item);
        reg.completed = true;
        reg.menuInvalid = false;
      }
    });
  };

//  reg.validateMenuItem = function(elem, menuId) {
//    console.log(elem);
//    var result = false;
//    if (typeof menuid != "undefined") {
//      if (!MenuService.checkMenuItem(menuId)) {
//      if (!result) {
//        elem.regForm.menufav.$setValidity('menuValid','false',elem);
//      } else {
//        elem.regForm.menufav.$setValidity('menuValid','true',elem);
//      }
//    }
//  }

  reg.reset = function (form) {
    reg.user.firstname = "";
    reg.user.lastname = "";
    reg.user.email = "";
    reg.user.phone = "";
    reg.user.menufav = "";
    reg.completed = false;
//    console.log($scope);
    form.$setPristine();
    form.$setUntouched();

//    console.log("In reg.reset()");
  };
}

})();
