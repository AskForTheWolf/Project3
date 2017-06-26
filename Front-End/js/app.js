angular
.module('delivery-clone', ['ui.router', 'ngResource'])
.config(['$stateProvider', RouterFunction])
.controller('DCLandingController',['RestaurantFactory',function(){}])
.factory('RestaurantFactory', ['$resource', function($resource){
        return $resource('http://localhost:3000/restaurants/:id.json',{},{'query': {method: 'GET', isArray: true}})
    };
}])
function RouterFunction($stateProvider){
    $stateProvider
    .state('landing', {
        url: '/',
        templateUrl: 'js/ng-views/landing.html',
        controller: 'DCLandingController',
        controllerAs: 'vm'
    })
    .state('dcIndex', {
        url: '###',
        templateUrl: 'js/ng-views/desktop-index.html',
        controller: 'DCIndexController',
        controllerAs: 'vm'
    })
    .state('dcShow', {
        url: '####',
        templateUrl: 'js/ng-views/mobile-show.html',
        controller: 'DCShowController',
        controllerAs: 'vm'
    })
}