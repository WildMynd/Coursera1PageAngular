(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);


//UserService.$inject = ['$http', 'ApiPath'];
//function UserService($http, ApiPath) {
function UserService() {
  var service = this;
  service.userdb = {};
  service.curEmail;

  service.saveUser = function (user) {
    console.log("UserService.saveUser: user = "+ user);
    var found = user.email in service.userdb;
    if (found) {
      console.log("userservice.saveUser: email "+ user.email + "already stored, updating");
    }
    service.userdb[user.email] = {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      phone: user.phone,
      menufav: user.menufav
    }
    service.curEmail = user.email;
  };

  service.getUserInfo = function (email) {
    var found = email in service.userdb;
    if (!found) {
      console.log("userservice.getUser: email "+ email + "not found");
      return null;
    }
    return service.userdb[email];
  };

  service.getCurUserInfo = function () {
    var result = service.getUserInfo(service.curEmail);
    return result;
  }

}



})();
