(function () {
'use strict';

angular.module('NarrowItDownApp',[])

.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective(){
  var ddo = {
    templateUrl: 'foundItems.html',
    scope:{
      items: '<',
      onDelete: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };
  return ddo;
}

function FoundItemsDirectiveController(){
  var list = this;
}

NarrowItDownController.$inject = ['MenuSearchService', '$scope'];
function NarrowItDownController(MenuSearchService, $scope) {
  $scope.searchTerm = ""
  $scope.searchItems = function() {
    if ($scope.searchTerm){
      MenuSearchService.getMatchedMenuItems($scope.searchTerm).then(function(data) {
        $scope.items = data;
      })
    } else {
      delete $scope.items;
    }
  }
  $scope.onDelete = function(index){
    if ($scope.items.length){
      $scope.items.splice(index, 1);
    }
  }
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {

  this.getMatchedMenuItems = function(searchTerm) {
    return $http({
      method: 'GET',
      url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
    }).then(function (result) {
    // process result and only keep items that match
    var data = result.data.menu_items,
        res = [],
        i = 0;
    for (; i < data.length; i++){
      if (data[i].description.includes(searchTerm)) {
        res.push(data[i]);
      }
    }
    // return processed items
    return res;
    });
  }

}

})();
