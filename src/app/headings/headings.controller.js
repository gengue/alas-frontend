

class HeadingsCtrl{

  constructor(HeadingsService, $timeout, $mdDialog, $mdMedia, $rootScope) {
    this.rootScope = $rootScope;
    this.HeadingsService = HeadingsService;
    this.$mdDialog = $mdDialog;
    this.$mdMedia = $mdMedia;
    this.selected = [];
    this.submenuIsOpen = false;
    this.topDirections = ['left', 'up'];
      this.bottomDirections = ['down', 'right'];
      this.isOpen = false;
      this.availableModes = ['md-fling', 'md-scale'];
      this.selectedMode = 'md-fling';
      this.availableDirections = ['up', 'down', 'left', 'right'];
      this.selectedDirection = 'up';
    //fetch
    this.promise = $timeout(() => {
      this.HeadingsService.getAll(response => { 
        this.data = response 
      })
    }, 1600); ;
  }

  /* Send a signal for tariff-panel component */
  showTariffInfo(heading, ev){
    let { selected, HeadingsService, rootScope } = this;

    /* Check if deselect */
    if(selected.length) {
      if(selected[0].code == heading.code){
        HeadingsService.setCurrentHeading(null);
        rootScope.$broadcast('tariffPanel', null);
        return false;
      } 
    } 

    HeadingsService.setCurrentHeading(heading);
    rootScope.$broadcast('tariffPanel', heading);
  }
}

angular.module('app.headings').controller('HeadingsCtrl', HeadingsCtrl);
