(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  var menuItem = {};

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.setMenuItem = function (shortName) {
    return $http.get(ApiPath + '/menu_items/' + shortName + ".json").then(function (response) {
      menuItem = response.data;
      return response.data;
    });
  };
  service.getMenuItem = function () {
    return menuItem;
  };

  service.doesMenuItemExist = function (shortName) {
    return $http.get(ApiPath + '/menu_items/' + shortName + ".json")
        .then(
         function(response) {
            return true;
        }
    );
  }

}



})();
