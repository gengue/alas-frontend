
class LoginCtrl {

  constructor(LoginService, $location) {
    this.LoginService = LoginService;
    this.$location = $location;
    this.user = {};
    this.busy = false;
    this.errors = [];
  }

  /* fired when the user click to "Entrar" */
  login() {
    const {LoginService, $location } = this;
    this.busy = true;
    this.errors = [];

    LoginService.requestToken(this.user, (response) => {
      LoginService.login(response.data.token, (response) => {
        /* get user data, create a session and redirect to home*/
        console.log(response);
        this.busy = false;
        $location.path('/');
      });
    }, this.onError.bind(this));
  }

  /* handle errors on login */
  onError(response) {
    console.log(response); 
    this.busy = false;
    if(response.data) 
      this.errors = response.data.non_field_errors;
  }
}

angular.module('app.auth').controller('LoginCtrl', LoginCtrl); 
