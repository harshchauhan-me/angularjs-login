app.controller("loginCtrl", ['$scope', 'userAuthenticate', '$location', function ($scope, userAuthenticate, $location) {
    $scope.welcome = "LOGIN";

    $scope.getUserAcces = function (uname, pass) {
        var user = {
            name: uname,
            pass: pass
        }
        userAuthenticate.getUserAcces(user);
        if (userAuthenticate.checkUserAcces()) {
            console.log(userAuthenticate.checkUserAcces());
            $location.path('/dashboard');
        }
    };
}]
);