(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['userData'];
function MyInfoController(userData) {
  var myInfo = this;
  myInfo.registered = false;
  myInfo.user = {};
  if (typeof userData == "object" && userData != null) {
      myInfo.user = userData;
      myInfo.registered = true;
  }
}

})();
