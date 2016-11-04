(function() {
"use strict";

angular.module('public')
.service('SignupService', SignupService);

SignupService.$inject = ['$http', 'ApiPath'];
function SignupService($http, ApiPath) {
  var service = this;
  var userInfo = {};
  var favouriteDish = {};
  /** Retrieves an access token using a username and password */
  service.getFavouriteDish = function(name) {
    if (!name){
        return;
    }
    return $http.get(ApiPath + '/menu_items/' + name + '.json').then(function(response) {
        console.log(response.data);
    favouriteDish = response.data;
      return response.data;
  });
  };
  service.isSignedUp = function () {
      return Object.keys(userInfo).length !== 0;
  }
  service.getDish = function () {
      return favouriteDish;
  }
  service.setUserInfo = function (info) {
      userInfo = info;
  }
  service.getUserInfo = function () {
      if (Object.keys(userInfo).length !== 0){
          return userInfo;
      }
      return false;
  }

}


})();
