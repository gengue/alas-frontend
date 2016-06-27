angular.module('app.users')

.controller('UserDetailCtrl', ['$scope', 'UsersService', '$routeParams', 
  function($scope, UsersService, $routeParams) {

    $scope.user = UsersService.getCurrentUser();

    if(!$scope.user){
      UsersService.getUser($routeParams.id, function(response){
        $scope.user = response.data; 
      });
    }

}]);
