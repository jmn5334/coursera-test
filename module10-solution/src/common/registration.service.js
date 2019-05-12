(function () {
"use strict";

angular.module('common')
.service('RegistrationService', RegistrationService);

function RegistrationService() {
  var service = this;
  var user;

  service.setRegistration = function (user) {
    console.log("User set: ", user);
  };
  service.getRegistration = function (user) {
    console.log("Getting user: ", user);
  };
}



})();