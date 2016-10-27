(function() {

  var app = angular.module('MenuApp');
  app.component('categories', {
    templateUrl: 'src/categoryItemsTemplate.html',
    //controller: CategoriesController,
    bindings: {
      items: '<'
    }
  });
})();
