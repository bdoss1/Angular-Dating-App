(function () {

  'use strict';

  angular.module('myApp')
    .filter('genderFilter', genderFilter);

  var genderKey = {
    0: 'Man',
    1: 'Woman',
    2: 'Non-binary',
    3: 'Other',
    4: 'Two Spirit'
  };

  function genderFilter() {
    return function (input) {
      return genderKey[input];
    };
  }

})();