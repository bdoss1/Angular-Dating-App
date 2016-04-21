(function () {

  'use strict';

  angular.module('myApp')
    .filter('interestedInFilter', interestedInFilter);

  var interestKey = {
    0: 'Men',
    1: 'Women',
    2: 'Non-binaries',
    3: 'Two Spirits',
    4: 'Other'
  };

  function interestedInFilter() {
    return function (input) {
      return interestKey[input];
    };
  }

})();