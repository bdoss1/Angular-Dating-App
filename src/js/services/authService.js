(function () {

  'use strict';

  /**
  1. login
  2. logout
  3. register
  4. set user info into localstorage
  5. get user info from localstorage
  **/

  angular.module('myApp')
    .service('authService', authService);

  authService.$inject = ['$http', '$window'];

  var URL = 'https://gdating-backend-api.herokuapp.com/gdating/auth/';

  function authService($http, $window) {
    var user = {};
    return {
      login: function(user) {
        return $http.post(URL + 'login', user);
      },
      logout: function(user) {
        user = null;
        $window.localStorage.clear();
      },
      register: function(user) {
        return $http.post(URL + 'register', user);
      },
      setUserInfo: function(userData) {
        $window.localStorage.setItem('user', JSON.stringify(userData.data.data.user));
        $window.localStorage.setItem('token', JSON.stringify(userData.data.data.token));
      },
      getUserInfo: function() {
        return $window.localStorage.getItem('user');
      }
    };
  }

})();