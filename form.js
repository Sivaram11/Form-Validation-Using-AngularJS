angular.module('myApp',[]);
angular.module('myApp').controller('Control',['$scope',function($scope){
	$scope.numberPattern=/^([0-9]){5}$/;
	$scope.nameFormat=/^[a-zA-Z '-]*$/;
	$scope.mobileFormat= /^([0-9]){3}([-.\s])([0-9]){3}([-.\s])([0-9]){4}$/;
	$scope.emailFormat=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+[a-zA-Z]*$/;	
}]);	