
/*
 * url routes
 */

angular.module('app') 
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise("/login");
    $locationProvider.html5Mode(true);

    $stateProvider
    .state('root', {
      templateUrl: 'app/layouts/base.html',
      controller: 'MainCtrl as mainctrl',
      abstract: true 
    })
    .state('arancel', { //inherit from your main
      url: '/arancel',
      parent: 'root',
      templateUrl: 'app/headings/headings.html',
      controller: 'HeadingsCtrl as ctrl'
    })
    .state('indice', { 
      url: '/indice',
      parent: 'root',
      templateUrl: 'app/articles/articles.html',
      controller: 'ArticlesCtrl as ctrl'
    })
    .state('favoritos', { 
      url: '/favoritos',
      parent: 'root',
      templateUrl: 'app/favorites/favs.html',
      controller: 'FavsCtrl as ctrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'app/auth/login.html',
      controller: 'LoginCtrl as ctrl'
    });
  }
]);

