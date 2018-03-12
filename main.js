var bingo = angular.module("bingo", []);
bingo.controller("bingoController", ['$scope', function ($scope) {
    $scope.numArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25'];
    $scope.numArr.sort(function(a, b){return 0.5 - Math.random()});
    console.log($scope.numArr);
    $scope.guessArr = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
}]);
