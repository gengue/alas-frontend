
class T3bsHeaderCtrl {

  constructor($location, $rootScope, $state){
    this.$location = $location;
    this.$rootScope = $rootScope;
    this.$state = $state;
    this.showSearchBar = false;
    this.query = '';
    this.tabs = [
      { 
        title: 'Arancel', 
        state: 'arancel', 
        isActive: true 
      },
      { 
        title: 'Indice', 
        state: 'indice', 
        isActive: false 
      },
      { 
        title: 'Favoritos', 
        state: 'favoritos', 
        isActive: false 
      }
    ];

    this.tabs.forEach(tab => {
        tab.isActive = ($state.current.name == tab.state) ? true : false;
    });
  }

  selectTab(tab){
    this.tabs.forEach(item => { item.isActive = false });
    tab.isActive = true;
    this.$state.go(tab.state);
  }
}

angular.module('app.layouts').component('t3bsHeader', {
  bindings: {},
  controller: T3bsHeaderCtrl,
  controllerAs: 'ctrl',
  templateUrl: 'app/layouts/header.html' 
});

