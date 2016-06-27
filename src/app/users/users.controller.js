
angular.module('app.users')

.controller('UsersCtrl', ['$scope', 'UsersService', '$location', 
  function($scope, UsersService, $location) {

    $scope.users = [];

    UsersService.getAll(function(response){
      $scope.users = response.data.results; 
    });

    $scope.userDetail = function(user){
      UsersService.setCurrentUser(user);
      $location.path('/usuarios/'+user.id);
    };

}]);
