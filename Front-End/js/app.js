angular
.module('delivery-clone', ['ui.router', 'ngResource'])
.config(['$stateProvider', RouterFunction])
.controller('DCLandingController',['RestaurantFactory',function(RestaurantFactory){
    // this.featured = RestaurantFactory.get({featured: true})
}])
.controller('DCIndexController',['RestaurantFactory',function(RestaurantFactory){
    this.restaurants = RestaurantFactory.query()
}])
.controller('DCShowController',['$stateParams','RestaurantFactory',function($stateParams ,RestaurantFactory){
    this.restaurant = RestaurantFactory.get({id: $stateParams.id})
    console.log(this.restaurant)
}])
.controller('OrderIndexController', ['RestaurantFactory', function($stateParams, RestaurantFactory){
    this.orders = RestaurantFactory.query()
}])
.controller('OrderShowController', ['RestaurantFactory', function($stateParams, RestaurantFactory){
    this.order = RestaurantFactory.get({[id: $stateParams.id]})
    console.log(this.order)
}])
.factory('RestaurantFactory', ['$resource', function($resource){
        return $resource('http://localhost:3000/restaurants/:id.json',{},{'query': {method: 'GET', isArray: true}})
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
        url: '/restaurants',
        templateUrl: 'js/ng-views/restaurant-index.html',
        controller: 'DCIndexController',
        controllerAs: 'vm'
    })
    .state('dcShow', {
        url: '/restaurants/:id',
        templateUrl: 'js/ng-views/restaurant-show.html',
        controller: 'DCShowController',
        controllerAs: 'vm'
    })
    .state('OrderIndex', {
        url: '/orders',
        templateUrl: 'js/ng-views/index-order.html',
        controller: 'OrderIndexController',
        controllerAs: 'vm'
    })
    .state('OrderShow', {
        url: '/orders/:id',
        templateUrl: 'js/ng-views/show-order.html',
        controller: 'OrderShowController',
        controllerAs: 'vm'
    })
}