

class TariffPanelCtrl {
  constructor ($rootScope, HeadingsService, $timeout, $mdDialog, $mdMedia) {
    this.heading = null;
    this.expand = true;
    this.mdDialog = $mdDialog;
    this.mdMedia = $mdMedia;

    const TARIFF_TYPES = [
      { code: 1, title: 'Gravamen'},
      { code: 2, title: 'IVA'},
      { code: 3, title: 'Regimen de importacion'},
      { code: 4, title: 'Sistema de aranceles variables'},
      { code: 5, title: 'Otros derechos de aduana'},
      { code: 6, title: 'Otros impuestos o contribuciones'},
      { code: 7, title: 'Descripciones minimas'},
      { code: 8, title: 'Normas tecnicas colombianas'},
      { code: 9, title: 'Productos sujetos a control'},
      { code: 10, title: 'Otras restriciones o permisos'},
      { code: 11, title: 'Declaracion anticipada'},
      { code: 12, title: 'Otras normas sobre importacion'},
      { code: 13, title: 'Puede requerir registro o licencia'},
      { code: 14, title: 'Acuerdos internacionales'},
      { code: 15, title: 'Exenciones de derechos de aduana'},
      { code: 16, title: 'Otras exenciones o derechos IVA'},
      { code: 17, title: 'Precios de referencia'},
      { code: 18, title: 'Bienes de capital'},
      { code: 19, title: 'Sistema de licencias anuales'},
      { code: 20, title: 'Bienes no producidos en subregion'},
      { code: 21, title: 'Otras normas sobre exportacion'},
      { code: 22, title: 'Clasificaciones arancelarias'},
      { code: 23, title: 'Normas legales relacionadas'},
      { code: 24, title: 'No requiere registro o licencia'}
    ];

    /* main signal */
    const onSelectHeading = (ev, value) => {
      this.heading = value;
      if (this.heading) this.heading.tariffData = [];
      
      $timeout(() => {
        let tariffDataCount = Math.round(Math.random() * 10) + 1;
        for (let i=0; i<tariffDataCount; i++) {
          let random = Math.round(Math.random() * 23); 
          if (this.heading.tariffData.length) {
            let found = false;
            for (let j=0; j<this.heading.tariffData.length; j++) {
              if (this.heading.tariffData[j].code == TARIFF_TYPES[random].code) {
                found = true;
                break;
              } 
            }
            if (!found) this.heading.tariffData.push(TARIFF_TYPES[random]);
          } else {
            this.heading.tariffData.push(TARIFF_TYPES[random]);
          }
        }
      }, 1000);
    };
    $rootScope.$on('tariffPanel', onSelectHeading );
  }

  showDetail(item, ev) {
    let { mdMedia, mdDialog } = this;
    //const useFullScreen = mdMedia('sm') || mdMedia('xs');

    mdDialog.show({
      controller: 'TariffInfoCtrl', 
      controllerAs: 'ctrl', 
      templateUrl: 'app/headings/tariff-info.html',
      locals: { data: item },                
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true
    })

    .then((answer) => {
      this.status = 'You said the information was "' + answer + '".';
    }, () => {
      this.status = 'You cancelled the dialog.';
    });
  }

}

  angular.module('app.headings').component('t3bsTariffPanel', {
    bindings: {},
    controller: TariffPanelCtrl,
    controllerAs: 'ctrl',
    templateUrl: 'app/headings/tariff-panel.html'
  });

