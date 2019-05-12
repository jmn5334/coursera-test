(function () {
"use strict";

angular.module('public').directive('menuItemExist', MenuItemExist);

MenuItemExist.$inject = ['$http', '$q', 'ApiPath'];
function MenuItemExist($http, $q, ApiPath) {
    var ddo = {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
            ngModel.$asyncValidators.menuItemExist = function(modelValue, viewValue) {
                return $http.get(ApiPath + '/menu_items/' + viewValue + ".json")
                    .then(
                     function(response) {
                        return true;
                    }
                );
            };
        }
    }
    return ddo;
}

})();