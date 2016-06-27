
class MainCtrl {
  constructor($rootScope, AUTH_EVENTS, Session) {
    this.AUTH_EVENTS = AUTH_EVENTS;
    this.$rootScope = $rootScope;
    this.user = Session.getUser();
    this.expand = true;
  }

  logout() {
    this.$rootScope.$broadcast(this.AUTH_EVENTS.logout);
  }
}

angular.module('app.layouts').controller('MainCtrl', MainCtrl);
