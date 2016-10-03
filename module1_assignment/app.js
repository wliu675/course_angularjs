(function () {
'use strict';

angular.module('LunchCheck',[])

.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
  $scope.dishes = "";
  $scope.countNum = function(){
    if($scope.dishes === ""){
      $scope.myMessage = "Please enter data first";
      return;
    }
    var dishArr = $scope.dishes.split(',');
    var temp = 0, i;
    for(i = 0; i < dishArr.length; i++ ){
      if (dishArr[i] != ""){
        temp++;
      }
    }
    if(temp <= 3) {
      $scope.myMessage = "Enjoy!";
    }else{
      $scope.myMessage = "Too much!";
    }
  }
  $scope.myMessage = "";
}
})();
