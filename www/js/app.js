// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('requestControl', ['ionic', 'ionic-material', 'mm.acl',
    'requestControl.controllers', 'requestControl.directives'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })
    .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {


        $urlRouterProvider.otherwise('/login');

        //cache off
        $ionicConfigProvider.views.maxCache(0);

        $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: "js/login/partials/login.html",
                controller: 'LoginCtrl'
            }).state('park', {
                url: "/park",
                templateUrl: "js/park/partials/park.html"
            });

    }).config(['AclServiceProvider', function (AclServiceProvider) {
        var aclConfig = {
            storage: 'localStorage',
            storageKey: 'aclProvider'
        };
    }]);
