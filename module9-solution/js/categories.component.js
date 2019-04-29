(function () {
'use strict';

angular.module('MenuApp')
.component('categoriesList', {
  templateUrl: 'templates/categorieslist.template.html',
  bindings: {
    categories: '<'
  }
});

})();