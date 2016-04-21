(function () {

  'use strict';

  angular.module('myApp')
  .controller('MembersCtrl', MembersCtrl);

  MembersCtrl.$inject = ['$scope', '$window', 'membersDataService'];

  function MembersCtrl($scope, $window, membersDataService) {

    //Individual view is initally false
    $scope.showMember = false;

    //Gets all members
    $scope.members = membersDataService.getAllMembers()
    .then(function(members) {
        //Filter out inactive members
      var activeMembers = members.data.data.filter(function (el){
          return el.active;
      });

      $scope.members = activeMembers;

    });

    //Displays the individual view of a member
    $scope.showIndividualView = function (memberID) {
      //Toggle individual view
      $scope.showMember = true;
      //Get data for the one member
      $scope.memberData = membersDataService.getOneMember(memberID)
      .then(function(member) {
        $scope.memberData = member.data.data;
      });
    };
  }

})();