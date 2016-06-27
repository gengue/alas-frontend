
class Session {

  constructor(){
    this.token = null;
    this.user = null;
  }

  //create session from local storage
  _createLc(token, user) {
    window.localStorage.setItem('token', angular.toJson(token));
    window.localStorage.setItem('user', angular.toJson(user));
  };

 //destroy session from local storage 
  _destroyLc() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user');
  };

  //create session from memory 
  create(token, user) {
    this.token = token;
    this.user = user;
    this._createLc(token, user);
  };

  //destroy session from memory 
  destroy() {
    this.token = null;
    this.user = null;
    this._destroyLc();
  };

  setUser(token) {
    this.token = token;
    window.localStorage.setItem('token', angular.toJson(token));
  };

  //get token from memory or localStorage
  getToken() {
    let token = this.token;
    if(!token){
      token = angular.fromJson(window.localStorage.getItem('token'));  
    } 
    return token;
  };

  setUser(user) {
    this.user = user;
    window.localStorage.setItem('user', angular.toJson(user));
  };

  //get user from memory or localStorage
  getUser() {
    let user = this.user;
    if(!user){
      user = angular.fromJson(window.localStorage.getItem('user'));  
    } 
    return user;
  };

  isAuthenticated(){
    return (this.getToken() != null); 
  }
}

angular.module('app.auth').service('Session', Session); 

