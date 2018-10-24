(() => {
    
    var app = angular.module('customersApp', ['ngRoute']);
    app.config(($routeProvider) => {
        $routeProvider
            .when('/', 
            {
                controller: 'CustomersController',
                templateUrl: '/app/views/customers.html'
            })
            .when('/order',
                {
                controller: 'OrdersController',
                templateUrl: '/app/views/orders.html'
            })
            .otherwise({ redirectTo: '/'});
    });
})();