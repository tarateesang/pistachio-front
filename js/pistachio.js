// create module
var app = angular.module('pistachio', ['ngRoute']);
//configure for routing
// taratsang / -> template home.html and controller mainController
// taratsang /about -> template about.html and controller mainController
// taratsang /portfolio -> template portfolio.html and controller mainController
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    //route for the home page
        .when('/home', {
            templateUrl: 'pages/home.html',
            controller: 'mainController',
            title: 'HOME.'
        })
        .when('/giza', {
            templateUrl: 'pages/giza.html',
            controller: 'mainController',
            title: 'Giza.'
        })
        // route for the about page
        .when('/china', {
            templateUrl: 'pages/china.html',
            controller: 'mainController',
            title: 'China'
        }).otherwise({
            redirectTo: '/home'
        })
}]);
//mainController holds the icons and links of outsourced projects
app.controller('mainController', function($scope) {
    $scope.message = "hello world";
});
app.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
        $rootScope.title = current.$$route.title;
        // $rootScope.selected = current.$$route.selected;
        // $rootScope.selected1 = current.$$route.selected1;
        // $rootScope.selected2 = current.$$route.selected2;
    });
}]);