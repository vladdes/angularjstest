(function() {
    var CustomersController = function($scope, customersFactory, ordersFactory) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        
        function init() {
            $scope.customers = customersFactory.getCustomers();
            $scope.customersAmount = ordersFactory.getAmountOfOrders().length;
        }
        
        init();
        
        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };  
        
        
    };
    
    CustomersController.$inject = ['$scope', 'customersFactory', 'ordersFactory'];
    
    angular.module('customersApp')
        .controller('CustomersController', CustomersController );
}());

