(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['RegistrationService', 'MenuService'];
function InfoController(RegistrationService, MenuService) {
  var info = this;
  info.menuItem = MenuService.getMenuItem();
  info.user = RegistrationService.getRegistration();
  console.log(info.user);
}


})();