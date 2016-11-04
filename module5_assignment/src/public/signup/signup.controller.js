(function () {
"use strict";
console.log("this is sign up");
angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['SignupService'];
function SignupController(SignupService) {
  var $ctrl = this;
  $ctrl.flag = false;
  $ctrl.submit = function (info) {
      SignupService.getFavouriteDish($ctrl.user.menunumber)
      .then(function(data){
          $ctrl.completed = true;
          $ctrl.flag = true;
      }, function(error){
          $ctrl.completed = true;
          $ctrl.flag = false;
          console.log(error);
      })
      SignupService.setUserInfo(info);
  };

}

})();
