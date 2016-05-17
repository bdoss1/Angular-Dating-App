(function () {

  'use strict';

  angular.module('myApp')
  .controller('MembersCtrl', MembersCtrl);

  MembersCtrl.$inject = ['$rootScope', '$scope', '$window', 'membersDataService', 'authService'];

  function MembersCtrl($rootScope, $scope, $window, membersDataService, authService) {
    //Show the loading spinner
    $scope.loading = true;

    //User is logged in when they come to this page
    $rootScope.loggedIn = true;

    //Individual view is initally false
    $scope.showMember = false;

    //Get all members
    membersDataService.getAllMembers()
    .then(function(members) {

      $rootScope.user = JSON.parse(authService.getUserInfo());

      //Filter out inactive members
      var activeMembers = members.data.data.filter(function (el){
          return el.active;
      });
      console.log(activeMembers);
      console.log($rootScope.user);
      //Filter current user
      activeMembers = members.data.data.filter(function (el){
          return $rootScope.user.username !== el.username;
      });

      $scope.members = activeMembers;

      //Hide the loading spinner
      $scope.loading = false;
    });

    //Displays the individual view of a selected member
    $scope.showIndividualView = function (memberID) {
      //Toggle individual view
      $scope.showMember = true;

      // variable for new message in text area
      $scope.message = {
        id: $rootScope.user._id
      };

      //The recipient of textarea message
      $scope.message._recipient = memberID;

      //Reset conversation
      $scope.conversation = [];

      //Get data for the one member
      membersDataService.getOneMember(memberID)
      .then(function(member) {
        $scope.memberData = member.data.data;

      });
      //Get their conversation, if any
      membersDataService.getConversation($rootScope.user._id, memberID)
      .then(function(conversation) {
        $scope.conversation = conversation.data.data[0].messages || [];
      });
    };

    //Determines a left or right bubble position, returns the appropriate class
    $scope.bubblePosition = function (senderID) {

    return (senderID === $rootScope.user._id ? "right-top": "left-top");
    };

    //Helps determine chat bubble position
    $scope.bubbleRight = function (senderID) {
      return senderID === $rootScope.user._id;
    };

    //Sends a new message to the api
    $scope.sendMessage = function () {
      membersDataService.sendMessage($scope.message)
      .then(function(res) {
        $scope.conversation = res.data.data.messages;
        $scope.message.content = "";
      });
    };
  }

})();