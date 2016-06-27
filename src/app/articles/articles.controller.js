

class ArticlesCtrl{
  constructor(ArticlesService, $timeout) {
    this.ArticlesService = ArticlesService;
  }
}

angular.module('app.articles').controller('ArticlesCtrl', ArticlesCtrl);
