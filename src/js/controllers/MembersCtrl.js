(function () {

  'use strict';

  angular.module('myApp')
  .controller('MembersCtrl', MembersCtrl);

  MembersCtrl.$inject = ['$scope', '$window'];

  function MembersCtrl($scope, $window) {

    $scope.greeting = "Hiho!";

  }

})();