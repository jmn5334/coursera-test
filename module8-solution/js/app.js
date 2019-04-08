(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
	var ddo = {
		templateUrl: 'foundItems.html',
		scope: {
			items: '<',
			nothingFound: '<',
			onRemove: '&'
		},
		controller: FoundItemsDirectiveController,
		controllerAs: 'list',
		bindToController: true
	};
	return ddo;
}

function FoundItemsDirectiveController() {
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
	var list = this;
	list.items = [];
	list.nothingFound = false;
	list.searchMenuItems = function(searchTerm) {
		var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
		promise.then(function(response) {
			var foundItems = response;
			list.items = foundItems;
			list.nothingFound = (list.items.length === 0);
		})
		.catch(function(error) {
			console.log("Error: search for menu items failed.");
		});
	};
	list.removeItem = function (itemIndex) {
		MenuSearchService.removeItem(itemIndex);
	};
	list.wasNothingFound = function () {
		console.log(list.nothingFound);
		return list.nothingFound;
	}
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
	var service = this;
	var foundItems = [];
	service.getMatchedMenuItems = function (searchTerm) {
		return $http({
			method: "GET",
			url: "https://davids-restaurant.herokuapp.com/menu_items.json"
		}).then(function(response) {
			foundItems = [];
			if (!searchTerm) {
				return foundItems;
			}
			for(var index in response.data['menu_items']) {
				var item = response.data['menu_items'][index];
				if(item.description.indexOf(searchTerm) !== -1) {
					foundItems.push(item);
				}
			}
			return foundItems;
		});
	};
	service.removeItem = function(itemIndex) {
		foundItems.splice(itemIndex, 1);
	};
}

})();
