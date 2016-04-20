(function (){

  'use strict';

  angular.module('myApp')
    .config(appConfig);

  appConfig.$inject = ['$routeProvider', '$locationProvider'];

  function appConfig($routeProvider, $httpProvider) {
    $routeProvider
    .when('/', {
      templateUrl: '../partials/landing.html',
      controller: 'LandingCtrl'
    })
    .when('/login', {
      templateUrl: '../partials/login_register.html',
      controller: 'LoginCtrl'
    })
    .when('/register', {
      templateUrl: '../partials/login_register.html',
      controller: 'RegisterCtrl'//This name??
    })
    .when('/members', {
      templateUrl: '../partials/members.html',
      controller: 'MembersCtrl'
    })
    .otherwise('/');

  }

})();