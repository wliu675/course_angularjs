(function () {

angular.module('MenuApp',['ui.router', 'data'])
.config(MenuAppConfigFunction)
.controller('itemsController', ['items', function(items){
  console.log(items);
  var itemsCtrl = this;
  itemsCtrl.items = items.data;
}])
.controller('categoriesController', ['categories', function(categories){
  console.log(categories);
  var categoriesCtrl = this;
  categoriesCtrl.items = categories.data;

}]);

MenuAppConfigFunction.$inject = ['$stateProvider', '$urlRouterProvider'];
function MenuAppConfigFunction($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/'
  })
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/categoriesTemplate.html',
    controller: 'categoriesController',
    controllerAs: 'categoriesCtrl',
    resolve: {
      categories: ['MenuDataService', function(service){
        return service.getAllCategories()
      }]
    }
  })
  .state('items', {
    url: '/items/{category}',
    templateUrl: 'src/itemsTemplate.html',
    controller: 'itemsController',
    controllerAs: 'itemsCtrl',
    resolve: {
      items: ['$stateParams', 'MenuDataService', function($stateParams, service){
        console.log($stateParams);
        return service.getItemsForCategory($stateParams.category);
      }]
    }
  })

}

// angular.module('MenuApp')
// .config(RoutesConfig);
//
// RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
// function RoutesConfig($stateProvider, $urlRouterProvider) {
//
//   // Redirect to tab 1 if no other URL matches
//   $urlRouterProvider.otherwise('/tab1');
//
//   // Set up UI states
//   $stateProvider
//     .state('tab1', {
//       url: '/tab1',
//       templateUrl: 'src/tab1.html'
//     })
//
//     .state('tab2', {
//       url: '/tab2',
//       templateUrl: 'src/tab2.html'
//     });
// }
//

})();
