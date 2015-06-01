'use strict';

angular.module('requestControl.controllers',[])

    .controller('LoginCtrl', function($scope){
        $scope.login = function(){
            console.log('Enter!');
        }
    });
