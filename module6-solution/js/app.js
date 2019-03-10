(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
	$scope.checkIfTooMuch = function () {
		var lunchListToSplit = $scope.lunchList;
		var message = "Please enter data first";
		$scope.color = {"color":"red"};
		$scope.border = {"border-color":"red"};
		if(lunchListToSplit) {
			var lunchList = lunchListToSplit.split(',');
			var count = 0;
			for (var i in lunchList) {
				if (lunchList[i].trim()) {
					count++;
				}
			}
			if (count > 3) {
				message = "Too much!";
				$scope.color = {"color":"green"};
				$scope.border = {"border-color":"green"};
			} else if (count > 0) {
				message = "Enjoy!";
				$scope.color = {"color":"green"};
				$scope.border = {"border-color":"green"};
			} else {
				message = "No valid data entered.";
			}
		}
		$scope.message = message;
	}
}
})();