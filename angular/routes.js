myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {


    $routeProvider
        .when('/', {
            // location of the template
            templateUrl: 'views/home.html',
            //Which controller it should use 
            controller: 'usersController',
            //what is the alias of that controller.
            controllerAs: 'userCtrl'
        })
        .otherwise({
            //redirectTo:'/'
            template: '<h1>404 page not found</h1>'
        });

    $locationProvider.html5Mode(true);
}]);