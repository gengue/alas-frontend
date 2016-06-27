
class TariffInfoCtrl{

  constructor(data, $mdDialog) {
    console.log(data);
    this.tariff = data;
    this.mdDialog = $mdDialog;
  }

  cancel() {
    this.mdDialog.cancel();
  };

  answer(answer) {
    this.mdDialog.hide(answer);
  };

}

angular.module('app.headings').controller('TariffInfoCtrl', TariffInfoCtrl);
