angular
.module('delivery-clone', ['ui.router', 'ngResource'])
.config(['$stateProvider', RouterFunction])
.controller('RootController',['RestaurantFactory',function(RestaurantFactory){
    // this.featured = RestaurantFactory.get({featured: true})
}])

// Below is Controllers for 'Restaurant'

.controller('RestaurantIndexController',['RestaurantFactory',function(RestaurantFactory){
    this.restaurants = RestaurantFactory.query()
    console.log(this.restaurants)
}])
.controller('RestaurantShowController',['$stateParams','RestaurantFactory',function($stateParams ,RestaurantFactory){
    this.restaurant = RestaurantFactory.get({id: $stateParams.id })
    console.log(this.restaurant)
}])

// Below is Controllers for 'Blog'

.controller('BlogIndexController', ['BlogFactory', function(BlogFactory){
    this.blogs = BlogFactory.query()
    console.log(this.blogs)
}])
.controller('BlogShowController', ['$stateParams','BlogFactory', function($stateParams, BlogFactory){
    this.blog = BlogFactory.get({id: $stateParams.id })
    console.log(this.blog)
}])

// Below is Controllers for 'Order'

.controller('OrderIndexController', ['RestaurantFactory', function(RestaurantFactory){
    this.orders = RestaurantFactory.query()
}])
// .controller('OrderCreateController', ['$stateParams', 'RestaurantFactory', function($stateParams, RestaurantFactory){
//     this.order = RestaurantFactory.create({
//         restaurant_id: $stateParams.restaurant_id,
//         id: $stateParams.id
//     })
//     console.log(this.order)
// }])
// .controller('OrderNewController', ['$stateParams', 'RestaurantFactory', function($stateParams, RestaurantFactory){
//     this.order = RestaurantFactory.get({restaurant_id: $stateParams.restaurant_id})
//     console.log(this.order)
// }])
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
.factory('BlogFactory', ['$resource', function($resource){
    return $resource('http://localhost:3000/blogs/:id.json',{},{'query': {method: 'GET', isArray: false}})
}])
.factory('RestaurantFactory', ['$resource', function($resource){
    return $resource('http://localhost:3000/restaurants/:id.json',{},{'query': {method: 'GET', isArray: true}})
}])
function RouterFunction($stateProvider){
    $stateProvider
    .state('landing', {
        url: '/',
        templateUrl: 'js/ng-views/landing.html',
        controller: 'RootController',
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
        templateUrl: 'js/ng-views/order-index.html',
        controller: 'OrderIndexController',
        controllerAs: 'vm'
    })
    .state('OrderEdit', {
        url: '/orders/id',
        templateUrl: 'js/ng-views/order-edit.html',
        controller: 'OrdersEditController',
        controllerAs: 'vm'
    })
    .state('OrderShow', {
        url: '/orders/:id',
        templateUrl: 'js/ng-views/order-show.html',
        controller: 'OrderShowController',
        controllerAs: 'vm'
    })
    .state('OrderUpdate', {
        url: '/orders/:id',
        controller: 'OrderUpdateController',
        controllerAs: 'vm'
    })
    .state('OrderDestroy', {
        url: '/orders/:id',
        controller: 'OrderDestroyController',
        controllerAs: 'vm'
    })
    .state('BlogIndex', {
        url: '/blogs',
        templateUrl: 'js/ng-views/blog-index.html',
        controller: 'BlogIndexController',
        controllerAs: 'vm'
    })
    .state('BlogShow', {
        url: '/blogs/:id',
        templateUrl: 'js/ng-views/blog-show.',
        controller: 'BlogShowController',
        controllerAs: 'vm'
    })
}