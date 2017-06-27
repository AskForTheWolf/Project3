angular
.module('delivery-clone', ['ui.router', 'ngResource'])
.config(['$stateProvider', RouterFunction])
.controller('RootController',['RestaurantFactory',function(RestaurantFactory){
    // this.featured = RestaurantFactory.get({featured: true})
}])

// Below is Controllers for 'Restaurant'

.controller('RestaurantIndexController',['RestaurantFactory',function(RestaurantFactory){
    this.restaurants = RestaurantFactory.query()
}])
.controller('RestaurantShowController',['$stateParams','RestaurantFactory',function($stateParams ,RestaurantFactory){
    this.restaurant = RestaurantFactory.get({id: $stateParams.id })
    console.log(this.restaurant)
}])

// Below is Controllers for 'Blog'

.controller('BlogIndexController', ['RestaurantFactory', function($RestaurantFactory){
    this.blog = RestaurantFactory.query({id: $stateParams.id })
    console.log(this.blog)
}])
.controller('BlogShowController', ['$stateParams','RestaurantFactory', function($stateParams, RestaurantFactory){
    this.blog = RestaurantFactory.get({id: $stateParams.id })
    console.log(this.blog)
}])

// Below is Controllers for 'Order'

.controller('OrderIndexController', ['RestaurantFactory', function(RestaurantFactory){
    this.orders = RestaurantFactory.query()
}])
.controller('OrderCreateController', ['$stateParams', 'RestaurantFactory', function($stateParams, RestaurantFactory){
    this.order = RestaurantFactory.create({
        restaurant_id: $stateParams.restaurant_id,
        id: $stateParams.id
    })
    console.log(this.order)
}])
.controller('OrderNewController', ['$stateParams', 'RestaurantFactory', function($stateParams, RestaurantFactory){
    this.order = RestaurantFactory.({
        restaurant_id: $stateParams.restaurant_id,
        id: $stateParams.id
    })
    console.log(this.order)
}])
.controller('OrderEditController', ['$stateParams', 'RestaurantFactory', function($stateParams, RestaurantFactory){
    this.order = RestaurantFactory.edit({
        restaurant_id: $stateParams.restaurant_id,
        id: $stateParams.id
    })
    console.log(this.order)
}])
.controller('OrderShowController', ['$stateParams','RestaurantFactory', function($stateParams, RestaurantFactory){
    this.order = RestaurantFactory.get({
        restaurant_id: $stateParams.restaurant_id,
        id: $stateParams.id
    })
    this.itemDets = [];
    console.log(this.order)
}])
.controller('OrderUpdateController', ['$stateParams', 'RestaurantFactory', function($stateParams, RestaurantFactory){
    this.order = RestaurantFactory.update({
        restaurant_id: $stateParams.restaurant_id,
        id: $stateParams.id
    })
    console.log(this.order)
}])
.controller('OrderDestroyController', ['$stateParams', 'RestaurantFactory', function($stateParams, RestaurantFactory){
    this.order = RestaurantFactory.destroy({
        restaurant_id: $stateParams.restaurant_id,
        id: $stateParams.id
    })
    console.log(this.order)
}])
.controller('')
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
    .state('RestaurantIndex', {
        url: '/restaurants',
        templateUrl: 'js/ng-views/restaurant-index.html',
        controller: 'RestaurantIndexController',
        controllerAs: 'vm'
    })
    .state('RestaurantShow', {
        url: '/restaurants/:id',
        templateUrl: 'js/ng-views/restaurant-show.html',
        controller: 'RestaurantShowController',
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