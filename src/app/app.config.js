
angular.module('app').config(['$httpProvider', function ($httpProvider) {
  $httpProvider.interceptors.push(['$injector', function ($injector) {
    return $injector.get('AuthInterceptor');
  }
  ]);
}])

.config(function($mdThemingProvider) {

  let customBlueMap = $mdThemingProvider.extendPalette('indigo', {
    //'contrastDefaultColor': 'light',
    //'contrastDarkColors': ['50'],
    '50': 'ffffff'
  });
  $mdThemingProvider.definePalette('customBlue', customBlueMap);
  
  $mdThemingProvider.theme('default')
  .primaryPalette('customBlue', {
    'default': '500',
    'hue-1': '50'
  })
  .accentPalette('pink');

  $mdThemingProvider.theme('input', 'default')
  .primaryPalette('grey')
});
