(function() {

    var app = angular.module('MenuApp');
    app.component('items', {
      templateUrl: 'src/itemsInCategoryTemplate.html',
      //controller: CategoriesController,
      bindings: {
        items: '<'
      }
    });

})();
