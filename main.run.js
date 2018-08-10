app.run(['$rootScope','$location','userAuthenticate',function($rootScope,$location,userAuthenticate){
    $rootScope.$on('$routeChangeStart',function(event){
        if(userAuthenticate.checkUserAcces()){
            $location.path('/dashboard');
        }
        else{
            // event.preventDefault();
            $location.path('/home');
        }
    })
}]
);