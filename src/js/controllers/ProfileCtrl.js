(function () {

  'use strict';

  angular.module('myApp')
  .controller('ProfileCtrl', ProfileCtrl);

  ProfileCtrl.$inject = ['$rootScope', '$scope', '$window', 'membersDataService', 'authService'];

  function ProfileCtrl($rootScope, $scope, $window, membersDataService, authService) {

    //User is logged in when they come to this page
    $rootScope.loggedIn = true;

    $rootScope.user = JSON.parse(authService.getUserInfo());
  }

})();