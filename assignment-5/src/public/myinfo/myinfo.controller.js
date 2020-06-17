(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['userData','ApiPath'];
function MyInfoController(userData,ApiPath) {
  var myInfo = this;
  myInfo.registered = false;
  myInfo.user = {};
  myInfo.basePath = ApiPath;
  if (typeof userData == "object" && userData != null) {
      myInfo.user = userData;
      myInfo.registered = true;
  }
}

})();
