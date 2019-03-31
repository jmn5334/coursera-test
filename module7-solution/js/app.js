(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService)
.filter('tripleDollar', TripleDollarFilter);

function Item(itemName, quantity, pricePerItem) {
	var item = this;
	item.itemName = itemName;
	item.quantity = quantity;
	item.pricePerItem = pricePerItem;
}

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService) {
	var buyList = this;
	buyList.items = ShoppingListCheckOffService.getItemsToBuy();
	buyList.buyItem = function(itemIndex) {
		ShoppingListCheckOffService.buyItem(itemIndex);
	}
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService','tripleDollarFilter'];
function AlreadyBoughtController (ShoppingListCheckOffService,tripleDollarFilter) {
	var boughtList = this;
	boughtList.items = ShoppingListCheckOffService.getItemsBought();
	boughtList.calculateTotalPrice = function(item) {
		return ShoppingListCheckOffService.calculateTotalPrice(item);
	}
}

function TripleDollarFilter() {
	return function (input) {
		input = "$$$" + input;
		return input;
	}
}

function ShoppingListCheckOffService() {
	var service = this;

	// list of items to buy
	var itemsToBuy = [];
	// list of items bought
	var itemsBought = [];

	// prepopulate list with 5 items
	itemsToBuy.push(new Item("cookies", 10, 2));
	itemsToBuy.push(new Item("bags of chips", 5, 2));
	itemsToBuy.push(new Item("bottles of soda", 3, 1));
	itemsToBuy.push(new Item("frozen pizzas", 2, 10));
	itemsToBuy.push(new Item("cartons of milk", 2, 3));

	// moves an item from the shopping list to bought
	service.buyItem = function (itemIndex) {
		// only move item if the quantity is defined
		var item = itemsToBuy[itemIndex];
		if(item.quantity < 1) {
			return;
		}
		itemsToBuy.splice(itemIndex, 1);
		itemsBought.push(item);
	}
	service.getItemsToBuy = function () {
		return itemsToBuy;
	}
	service.getItemsBought = function () {
		return itemsBought;
	}
	service.calculateTotalPrice = function(item) {
		return item.quantity * item.pricePerItem;
	}
}

})();