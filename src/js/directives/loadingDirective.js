(function () {

	'use strict';

	angular.module('myApp')

	.directive('loadingDirective', loadingDirective);

	loadingDirective.$inject = ['$scope','$http'];

	function loadingDirective ($scope, $http) {
		return {
			restrict: 'A',
			link: function ($scope, $elm, $attrs)
			{
				$scope.isLoading = function () {
					return $http.pendingRequests.length > 0;
				};

				$scope.$watch($scope.isLoading, function (v)
				{
					if(v){
						elm.css('display', 'block');
					}else{
						elm.css('display', 'none');
					}
				});
			}
		};

	}
})();