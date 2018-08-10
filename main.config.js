app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: "/views/login.html",
            controller: "loginCtrl"
        })
        .when('/dashboard', {
            templateUrl: "/views/dashboard.html"
        })
        .otherwise('/home');
}])