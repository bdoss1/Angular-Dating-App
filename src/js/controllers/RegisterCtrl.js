(function () {

  'use strict';

  angular.module('myApp')
    .controller('RegisterCtrl', RegisterCtrl);

  RegisterCtrl.$inject = ['$rootScope', '$scope', '$location', 'authService'];

  function RegisterCtrl($rootScope, $scope, $location, authService) {
    $scope.user = {};
    $scope.register = function() {
      authService.register($scope.user)
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

    $scope.loginAsGuest = function() {
      var guestUser = {
        email: "corrine_reinger274@yahoo.com",
        password: "mypassword"
      };

      authService.login(guestUser)
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
