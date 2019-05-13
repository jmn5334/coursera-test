(function () {
"use strict";

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['RegistrationService', 'MenuService'];
function RegistrationController(RegistrationService, MenuService) {
  var reg = this;
  reg.submit = function () {
  	var data = MenuService.setMenuItem(reg.user.favmenuitem);
  	RegistrationService.setRegistration(reg.user);
    reg.completed = true;
  };
}


})();