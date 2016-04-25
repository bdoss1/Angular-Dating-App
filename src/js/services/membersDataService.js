(function () {

  'use strict';

  angular.module('myApp')
    .service('membersDataService', membersDataService);

  membersDataService.$inject = ['$rootScope', 'crudService'];

  function membersDataService($rootScope, crudService) {

    return {
      getAllMembers: function() {
        return crudService.getAll('members')
          .then(function(members) {
            return members;
          });
      },
      getOneMember: function(memberID) {
        return crudService.getOne('members/' + memberID)
          .then(function(member) {
            return member;
          });
      },
      addMember: function(payload) {
        crudService.addOne('members', payload)
          .then(function(student) {
            return student;
          });
      },
      editMember: function(payload) {
        return crudService.editOne('members/' + payload._id, payload)
          .then(function(member) {
            return member;
          });
      },
      removeMember: function(memberID) {
        crudService.removeOne('members', studentID)
          .then(function(student) {
            return student;
          });
      },
      getConversation: function(userID, friendID) {

        var arg = userID + "/conversations/" + friendID;
        console.log("arg", arg);
        return crudService.getOne('members/' + arg)
          .then(function(conversation) {
            return conversation;
          });
      },
      sendMessage: function (message) {
        var url = 'members/' + message.id +'/conversations';
        return crudService.addOne(url, message)
          .then(function(conversation) {
            return conversation;
          });
      }
    };
  }

})();