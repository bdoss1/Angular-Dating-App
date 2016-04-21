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
        crudService.addOne('students', payload)
          .then(function(student) {
            return student;
          });
      },
      editMember: function(student) {
        crudService.editOne('students', student)
          .then(function(student) {
            return student;
          });
      },
      removeMember: function(studentID) {
        crudService.removeOne('students', studentID)
          .then(function(student) {
            return student;
          });
      }
    };
  }

})();