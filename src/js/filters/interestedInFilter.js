(function () {

  'use strict';

  angular.module('myApp')
    .filter('interestedInFilter', interestedInFilter);

  var interestKey = {
    0: 'Friendship',
    1: 'Dating',
    2: 'Marriage',
    3: 'Long-term commitment',
    4: 'Random Play'
  };

  function interestedInFilter() {
    return function (input) {
      return interestKey[input];
    };
  }

})();