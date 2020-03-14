var newApp = angular.module("app1", []);

newApp.controller("myCtrl1", function($scope) {
    $scope.name = "Priyanka";

    $scope.helloName = function() {
        $scope.name;
    }

    $scope.employees = [
        { "name": "Lance", "country": "U.S" },
        { "name": "Priyanka", "country": "India" },
        { "name": "Vinod", "country": "India" },
        { "name": "Brett", "country": "Africa" }

    ]

    $scope.candidates = ["Jani", "Carl", "Margareth", "Hege", "Joe", "Gustav", "Birgit", "Mary", "Kai"]

    $scope
});

newApp.directive("returnTemplate", function() {
    return { template: "<h1>I am made by Directive!</h1>" }
})