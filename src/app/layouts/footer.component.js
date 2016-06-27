
class T3bsFooterCtrl {

  constructor($location, $rootScope){
    this.$location = $location;
    this.$rootScope = $rootScope;
  }
}

angular.module('app.layouts').component('t3bsFooter', {
  bindings: {},
  controller: T3bsFooterCtrl,
  controllerAs: 'ctrl',
  template: ` 
    <div layout="column" layout-align="center center">
      <small>The3ballsoft</small>
    </div>
  ` 
});

