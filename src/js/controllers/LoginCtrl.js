(function () {

  'use strict';

  angular.module('myApp')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$rootScope', '$scope', '$location', 'authService'];

  function LoginCtrl($rootScope, $scope, $location, authService) {

    //User is logged out when they come to this page
    $rootScope.loggedIn = false;

    $scope.user = {};
    $scope.login = function() {
      authService.login($scope.user)
        .then(function(user) {

          authService.setUserInfo(user);
          $location.path('/');
          $rootScope.currentUser = authService.getUserInfo();
        })
        .catch(function(err) {
          // check status code, send appropriate message
          console.log(err);
        });
    };
  }

})();