// Code readability and organization would be improved through the use of nmamed functions. This would be separating concerns of config and execution.

// Additionally, this method of writing AngularJS code is dated. The advantage of having the injected dependencies right next to the function declaration is nice, but having anonymous functions can make debugging harder in some circumstances, and can limit the usefulness of a stack trace.

// There exists a better practice. You can combine all of the advice above for much more readable, maintainable code. This isn't my advice, it's John Papa's.

// reference
// https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#data-services

// be mindful about not only code organization, but how you indent your code as well.


angular
.module('delivery-clone', ['ui.router', 'ngResource'])
.config(['$stateProvider', RouterFunction])
.controller('RootController',['RestaurantFactory',function(RestaurantFactory){
    this.featured = RestaurantFactory.query()
    console.log(this.featured)
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
    this.blogs = BlogFactory.query();
    $.getJSON('http://localhost:3000/blogs.json', function(data){
        const posts = data;
        // use .forEach instead. This is an abstraction you're expected to use rather than a for-loop, which might be preferred in a lower level language like C, but is generally seen as visual noise in JS development.
        // at any rate, you appear to be using this jquery block in place of ng-repeat, but haven't documented why, and i don't see the use case for this approach
        for(let i = 0; i < data.collections.length; i++) {
            // You should be using ng-repeat and have your html in your view template rather than in a string. This is what is called a 'spaghetti code' approach and doesn't take full advantage of the framework you are using (AngularJS) and its 2-way data-binding
            // making this change will improve separation of concerns and make the code easier to navigate
            // Changes made by jQuery won't be registered by AngularJS's event loop
            // using ng-repeat as you had elsewhere is less code
            $('#blogs').append(`<div class="row"><a href="${data.collections[i].collection.url}"><div class="col-lg-12 blog-post"><h2>${data.collections[i].collection.title}</h2><img class="blog-img" src="${data.collections[i].collection.image_url}"><h4>${data.collections[i].collection.description}</h4></div></a></div>`)
        }
    })
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
.controller('OrderNewController', ['$stateParams', 'RestaurantFactory', function($stateParams, RestaurantFactory){
    this.order = RestaurantFactory.get({
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


// You can get away with one factory, configured like this:

// function HangryFactory ($resource) {
//   return {
//     Restaurant: $resource('/restaurants/:id', {id: '@id'}),
//     Blogs:  $resource('/blogs/:id', {id: '@id'}),
//     Orders: $resource('/restaurants/:restaurant_id/orders/:id', {id: '@id', restaurant_id: @restaurant_id}),
//   };
// };
// you can inject HangryFactory as you normally would and access the different  requests method for each endpoint like this:
// HangryFactory.Blogs.query()

// https://stackoverflow.com/questions/17233481/angularjs-creating-multiple-factories-for-every-endpoint

.factory('BlogFactory', ['$resource', function($resource){
    //
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

    // Might be overkill to have a state for each CRUD action or 'subaction'
    // edit/delete could be incorporated into show, and you can manage views using conditional directives for leaner code/fewer states. Having separate controllers for each is overkill
    .state('OrderIndex', {
        url: '/orders',
        templateUrl: 'js/ng-views/order-index.html',
        controller: 'OrderIndexController',
        controllerAs: 'vm'
    })
    .state('OrderNew', {
        url: '/restaurants/:restaurant_id/order/new',
        templateUrl: 'js/ng-views/order-new.html',
        controller: 'OrderNewController',
        controllerAs: 'vm'
    })
    .state('OrderEdit', {
        url: '/restaurants/:restaurant_id/order/:id/edit',
        templateUrl: 'js/ng-views/order-edit.html',
        controller: 'OrderEditController',
        controllerAs: 'vm'
    })
    .state('OrderShow', {
        url: '/restaurants/:restaurant_id/order/:id',
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
}
