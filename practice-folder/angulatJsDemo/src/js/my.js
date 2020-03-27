var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";

    $scope.helloName = function() {
        $scope.firstName = "Hello" + $scope.firstName;
    }

    $scope.saveData = function() {
        // http post call to server
    }
});