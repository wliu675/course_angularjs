(function () {
"use strict";
angular.module('public')
.controller('MyinfoController', MyinfoController);
MyinfoController.$inject = ['SignupService','ApiPath'];
function MyinfoController(SignupService, ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
  $ctrl.isLogedIn = SignupService.isSignedUp();
  $ctrl.userInfo = SignupService.getUserInfo();
  $ctrl.favouriteDish = SignupService.getDish();
}

})();
