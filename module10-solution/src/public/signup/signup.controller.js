(function () {
"use strict";

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['RegistrationService'];
function RegistrationController(RegistrationService) {
  var reg = this;
  reg.submit = function () {
  	console.log("submitted!");
  	RegistrationService.setRegistration(reg.user);
    reg.completed = true;
  };
}


})();