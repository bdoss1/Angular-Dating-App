(function () {

  'use strict';

  angular.module('myApp')
    .filter('genderFilter', genderFilter);

  var genderKey = {
    0: 'Male',
    1: 'Female',
    2: 'Male',
    3: 'Non-binary',
    4: 'Two Spirit'
  };

  function genderFilter() {
    return function (input) {
      return genderKey[input];
    };
  }

})();