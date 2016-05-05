(function () {

  'use strict';

  angular.module('myApp')
    .service('crudService', crudService);

  crudService.$inject = ['$http'];

  var URL = 'https://gdating-backend-api.herokuapp.com/gdating/';

  function crudService($http) {

    return {
      getAll: function(resource) {
        return $http.get(URL+resource)
          .then(function(res){
            return res;
          })
          .catch(function(err){
            return err;
          });
      },
      getOne: function(resource) {
        return $http.get(URL+resource)
          .then(function(res){
            return res;
          })
          .catch(function(err){
            return err;
          });
      },
      addOne: function(resource, payload) {
        return $http.post(URL + resource, payload)
          .then(function(res){
            return res;
          })
          .catch(function(err){
            return err;
          });
      },
      editOne: function(resource, payload) {
        return $http.put(URL + resource, payload)
          .then(function(res){
            console.log(res);
            return res;
          })
          .catch(function(err){
            return err;
          });
      },
      removeOne: function(resource, uuid) {
        return $http.delete('/'+resource+'/'+uuid)
          .then(function(res){
            return res;
          })
          .catch(function(err){
            return err;
          });
      }
    };

  }

})();