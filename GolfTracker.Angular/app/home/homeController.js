(function () {
    'use strict';

    angular.module('golftracker')
        .controller('homeController', ["authService", "eventAggregator", "$scope", "$rootScope", function (authService, eventAggregator, $scope, $rootScope) {
            var vm = this;

            vm.userName = authService.authentication.userName;
            vm.isAuthenticated = authService.authentication.isAuth;

            console.log("home/vm.isAuthenticated: " + vm.isAuthenticated);

            $scope.$on('user-authenticated', function (evt, data) {
                console.log("user authenticated called")
                vm.isAuthenticated = data.isAuthenticated;
                vm.userName = data.userName;
            });

            vm.logOut = function () {
                authService.logOut();
                //eventAggregator.trigger("isAuthenticated", false);
                vm.isAuthenticated = false;
                console.log("home/vm.logOut()/vm.isAuthenticated: " + vm.isAuthenticated);

                $location.path('/home');
            };

        }]);
})();
