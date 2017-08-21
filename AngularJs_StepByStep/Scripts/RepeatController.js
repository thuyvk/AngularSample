/// <reference path="angular.js" />

(function () {
    'use strict';
    var myApp = angular.module('app', []);
    myApp.controller('RepeatController', ['$scope', function ($scope) {
        $scope.message = "Hello world";
        var employees = [
            { name: 'Join Smirt', age: '18', address: '21 main street' },
            { name: 'Maria Ozawa', age: '17', address: '07 Anapolist' }
        ];
        $scope.employees = employees;
    }]);

})();
