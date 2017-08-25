/// <reference path="D:\GitHubs_Project\AngularSample\AngularJs_StepByStep\Scripts/angular.js" />
/// <reference path="D:\GitHubs_Project\AngularSample\AngularJs_StepByStep\Scripts/app.js" />

myApp.controller('myFormController', ['$scope', '$http', '$log', function ($scope, $http, $log) {
    $scope.message = "AngularJS Form";
    //init data
    $scope.initStudent = {
        firstName: 'Join',
        lastName: 'Smirt',
        dob: new Date('02/07/1987'),
        traningType: 'online',
        maths : false,
        physics: false,
        chemistry: false,
        gender: 'male'
    };

    //fill data for First Load
    $scope.student = angular.copy($scope.initStudent);

    $scope.SubmitForm = function(){
        $log.info($scope.student);
    };

    $scope.ResetForm = function(){
        $scope.student = angular.copy($scope.initStudent);
    };
}]);