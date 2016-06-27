

class FavsCtrl{
  constructor(FavsService, $timeout) {
    this.FavsService = FavsService;
  }
}

angular.module('app.favs').controller('FavsCtrl', FavsCtrl);
