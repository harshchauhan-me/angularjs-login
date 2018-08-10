app.factory("userAuthenticate", ['$http', function ($http) {
    var userObject = {};
    this.user;
    var setPageChange = false;

    userObject.getUserAcces = function (user) {
        $http.get('/data/user.json').success(function (data, response) {
            if (data.userName == user.name && data.password == user.pass) {
                console.log(response);
                setPageChange = true;
                // console.log(setPageChange);
            }
        });
    };

    // debugger;
    userObject.checkUserAcces = function () {
        console.log(setPageChange);
        return setPageChange;
    };

    return userObject;
}]
);
