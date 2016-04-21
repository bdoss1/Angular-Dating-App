(function (){

  'use strict';

  angular.module('myApp')
    .config(appConfig)
    .run(routeChange);

  appConfig.$inject = ['$routeProvider', '$httpProvider'];
  routeChange.$inject = ['$rootScope', '$location', '$window', 'authService'];

  function appConfig($routeProvider, $httpProvider) {
    $routeProvider
    // landing page
    .when('/', {
      templateUrl: '../partials/landing.html',
      controller: 'LandingCtrl',
      restricted: false,
      preventLoggedIn: true
    })
    .when('/login', {
      templateUrl: '../partials/login.html',
      controller: 'LoginCtrl',
      restricted: false,
      preventLoggedIn: true
    })
    .when('/register', {
      templateUrl: '../partials/register.html',
      controller: 'RegisterCtrl',
      restricted: false,
      preventLoggedIn: true
    })
    .when('/members', {
      templateUrl: '../partials/members.html',
      controller: 'MembersCtrl',
      restricted: true,
      preventLoggedIn: false
    })
    .when('/profile', {
      templateUrl: '../partials/profile.html',
      controller: 'ProfileCtrl',
      restricted: true,
      preventLoggedIn: false
    })
    .when('/logout', {
      restricted: false,
      preventLoggedIn: false,
      resolve: {
        test: function(authService, $rootScope, $location) {
          authService.logout();
          $rootScope.currentUser = authService.getUserInfo();
          $location.path('/login');
        }
      }
    })
    .otherwise({redirectTo: '/login'});
    $httpProvider.interceptors.push('authInterceptor');
  }

  function routeChange($rootScope, $location, $window, authService) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
      // if route us restricted and no token is present
      if(next.restricted && !$window.localStorage.getItem('token')) {
        $location.path('/login');
      }
      // if token and prevent logging in is true
      if(next.preventLoggedIn && $window.localStorage.getItem('token')) {
        $location.path('/');
      }
    });
  }

})();