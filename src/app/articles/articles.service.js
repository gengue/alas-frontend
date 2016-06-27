
class ArticlesService {

  constructor($http, CONFIG){
    this.$http = $http;
    this.URL = CONFIG.API_URL+'home/';
  }

  /*
   * fetch headings list 
   */
  getAll(callback) {
      return this.$http.get(this.URL)
                 .then(callback, this.handleError);

  };

  /*
   * print error
   */
  handleError(res) {
    console.warn(res);
  }

}

angular.module('app.articles').service('ArticlesService', ArticlesService); 
