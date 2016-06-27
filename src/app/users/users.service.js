
angular.module('app.users')

.service('UsersService', ['$http', 'CONFIG', function($http,  CONFIG){
    this.url = CONFIG.API_URL+'users/';
    this.currentUser = null; 

    this.getAll = function(callback){
      return $http.get(this.url).then(callback);
    };

    this.getUser = function(id, callback){
      return $http.get(this.url+id+'/').then(callback);
    };

    this.setCurrentUser = function(user){
      this.currentUser = user;
    };

    this.getCurrentUser = function(){
      return this.currentUser;
    };
}]);
