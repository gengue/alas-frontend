
angular.module('app', 
               [
                 'ui.router',
                 'templates',
                 'ngAnimate',
                 'ngMaterial',
                 'md.data.table',
                 'ngMdIcons',
                 'app.auth',
                 'app.layouts',
                 'app.headings',
                 'app.articles',
                 'app.favs',
                 'app.users'
               ]);

angular.module('app.layouts', [])
angular.module('app.auth', [])
angular.module('app.headings', [])
angular.module('app.articles', [])
angular.module('app.favs', [])
angular.module('app.users', [])
