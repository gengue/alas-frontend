

class LoginService {

  constructor($http, CONFIG, Session){
    this.$http = $http;
    this.API_URL = CONFIG.API_URL;
    this.TOKEN_URL = CONFIG.API_URL+'auth/token/';
    this.Session = Session;
  }

  /*
   * api token request
   */
  requestToken(data, callback, error) {
      return this.$http.post(this.TOKEN_URL, data)
                 .then(callback, error);
  };

  /*
   * login, create a session
   */
  login(token, callback) {
    let config = {
      method : 'GET',
      url    : `${this.API_URL}users/me/`,
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=utf-8',
        'Authorization': `Token ${token}` 
      }
    };

    return this.$http(config)
               .then(response => {
                  this.Session.create(token, response.data);
                  callback(response) 
               }, this.handleError);
  }

  /*
   * print error
   */
  handleError(res) {
    console.warn(res);
  }

}

angular.module('app.auth').service('LoginService', LoginService); 
