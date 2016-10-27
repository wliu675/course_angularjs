(function (){

var app = angular.module('data');
app.factory('MenuDataService', MenuDataServiceFunction);

// service funcitons
MenuDataServiceFunction.$inject = ['$http'];
function MenuDataServiceFunction($http) {
    var ddo = {
      getAllCategories: GetAllCategories,
      getItemsForCategory: GetItemsForCategory
    };
    function GetAllCategories() {
      return $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/categories.json'
      });
    }
    function GetItemsForCategory(categoryShortName) {
      return $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json?category='+categoryShortName
      });
    }
    return ddo;
}

})();
