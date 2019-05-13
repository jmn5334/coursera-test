(function () {
"use strict";

angular.module('public').directive('menuItemExist', MenuItemExist);

MenuItemExist.$inject = ['$http', '$q', 'MenuService'];
function MenuItemExist($http, $q, MenuService) {
    var ddo = {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
            ngModel.$asyncValidators.menuItemExist = function(modelValue, viewValue) {
                return MenuService.doesMenuItemExist(viewValue);
            };
        }
    }
    return ddo;
}

})();