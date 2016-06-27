angular.module('app.auth')
.factory('AuthInterceptor', ['$rootScope', '$q', 'AUTH_EVENTS', 'Session', 
  function ($rootScope, $q, AUTH_EVENTS, Session) {
    return {
      // poner el token en cada request
      request: function(config){
        let token = Session.getToken();
        if (token){
          config.headers.Authorization = `Token ${token}`;
        }
        return config;
      },
      responseError: function (response) { 
        console.log("entro por interceptor de error");
        $rootScope.$broadcast({
          401: AUTH_EVENTS.notAuthenticated,
          403: AUTH_EVENTS.notAuthorized
        }[response.status], response);
        return $q.reject(response);
      }
    };
}])
