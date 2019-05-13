(function () {
"use strict";

angular.module('common')
.service('RegistrationService', RegistrationService);

function RegistrationService() {
  var service = this;
  var user;

  service.setRegistration = function (user_updated) {
    user = user_updated;

  };
  service.getRegistration = function () {
    return user;
  };
}



})();