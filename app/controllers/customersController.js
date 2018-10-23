(() => {

    var CustomersController = ($scope) => {
        $scope.sortBy = 'name';
        $scope.reverse = false;

        $scope.customers =
            [
                { joined: '2000-12-02', name: 'vlad', city: 'cardiff' },
                { joined: '2001-04-21', name: 'barb', city: 'hell' },
                { joined: '2012-11-27', name: 'etti', city: 'huskvarna' },
                { joined: '2007-02-02', name: 'bajs', city: 'huskvarna' },
                { joined: '2005-05-14', name: 'bajskorv', city: 'huskvarna' }
            ];
        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };   
    };
    
    CustomersController.$inject = ['$scope'];
    
    angular.module('customersApp')
        .controller('CustomersController', CustomersController );
})();