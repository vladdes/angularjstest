(function(){
    var ordersFactory = function(){
       var customers =
            [
                {   
                    joined: '2000-12-02',
                    name: 'vlad',
                    city: 'cardiff',
                    orders: [
                        {
                            id: 1,
                            product: 'Shoes',
                            total: 9.9956
                        }
                    ]
                },
                { 
                    joined: '2001-04-21', 
                    name: 'barb', 
                    city: 'hell',
                    orders: [
                        {
                            id: 2,
                            product: 'Baseball',
                            total: 9.995
                        },
                        {
                            id: 3,
                            product: 'Bat',
                            total: 9.995
                        }
                    ]
                },
                { 
                    joined: '2012-11-27', 
                    name: 'etti', 
                    city: 'huskvarna',
                    orders: [
                        {
                            id: 4,
                            product: 'Headphones',
                            total: 44.99
                        }
                    ]    
                },
                { 
                    joined: '2007-02-02', 
                    name: 'bajs', 
                    city: 'huskvarna',
                    orders: [
                        {
                            id: 1,
                            product: 'Shoes',
                            total: 9.9956
                        },
                        {
                            id: 5,
                            product: 'Kindle',
                            total: 101.50
                        }
                     ]
                },
                {
                    joined: '2005-05-14', 
                    name: 'bajskorv', 
                    city: 'huskvarna',
                    orders: [
                        {
                            id: 5,
                            product: 'Kindle',
                            total: 101.50
                        }
                    ]
                }
            ];
           
        var factory = {};
        
        factory.getAmountOfOrders = function(customerId) {
            
            return customers;
        };
        
        return factory;
    };

    angular.module('customersApp').factory('ordersFactory', ordersFactory);
}())