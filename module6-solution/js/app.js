(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
	$scope.checkIfTooMuch = function () {
		var lunchListToSplit = $scope.lunchList;
		var message = "Please enter data first";
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
			} else if (count > 0) {
				message = "Enjoy!";
			} else {
				message = "No valid data entered.";
			}
		}
		$scope.message = message;
	}
}

})();