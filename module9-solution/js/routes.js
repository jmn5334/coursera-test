(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // home view
  .state('home', {
    url: '/',
    templateUrl: 'templates/home.template.html'
  })

  // categories view
  .state('categories', {
    url: '/categories',
    templateUrl: 'templates/categories.template.html',
    controller: 'CategoriesController as ctrl',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // items view
  .state('items', {
    url: '/items/{category}',
    templateUrl: 'templates/items.template.html',
    controller: 'ItemsController as ctrl',
    resolve: {
      items: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService,) {
        return MenuDataService.getItemsForCategory($stateParams.category);
      }]
    }
  });
}

})();