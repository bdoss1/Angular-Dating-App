(function () {

  'use strict';

  angular.module('myApp')
  .controller('LandingCtrl', LandingCtrl);

  LandingCtrl.$inject = ['$rootScope', '$scope', '$window'];

  function LandingCtrl($rootScope, $scope, $window) {

    $rootScope.loggedIn = false;

  }

})();