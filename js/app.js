(function(){
	'use strict';
	
	angular.module('MsgApp', [])
	.controller('MsgController', MsgController);
	
	MsgController.$inject = ['$scope'];
	function MsgController($scope){
		$scope.name = "Robert";
		$scope.stateOfBeing = "start";
		
		$scope.sayMessage = function(){
			return "Robert likes to play Mobile Legends!";
		}
		
		$scope.multiRobert = function(){
			$scope.stateOfBeing = "multi";
			$scope.sayMessage = function(){
				return "Let's Goooooo!";
			}
		}
	}
  
})();