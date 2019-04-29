(function () {
'use strict';

angular.module('MenuApp')
.component('itemsList', {
  templateUrl: 'templates/itemslist.template.html',
  bindings: {
    items: '<'
  }
});

})();