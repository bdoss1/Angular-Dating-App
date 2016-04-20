(function () {

  'use strict';

  angular.module('myApp')
  .controller('LandingCtrl', LandingCtrl);

  LandingCtrl.$inject = ['$scope', '$window'];

  function LandingCtrl($scope, $window) {

    $scope.greeting = "jjj";

  }

})();