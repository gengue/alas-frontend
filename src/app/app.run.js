angular.module('app')
.run(['$rootScope', 'AUTH_EVENTS', 'Session', '$state', 
  function ($rootScope, AUTH_EVENTS, Session, $state) {

    /**
     * Cerrar sesion
     * Elimina la session del usuario y lo envia
     * a la vista de login.
     */
    const logout = () => {
      Session.destroy();
      $state.go('login');
    }

    /*
     * Recibe la señal de que el usuario no esta autenticado
     * y lo desloguea
     */
    $rootScope.$on(AUTH_EVENTS.notAuthenticated, () => {
      logout();
      console.info('se activo interceptor not authenticated');
    });

    /*
     * Recibe la señal de que el usuario no esta autorizado 
     * y lo desloguea
     */
    $rootScope.$on(AUTH_EVENTS.notAuthorized, () => {
      logout();
      console.info('se activo interceptor not authorized');
    });

    /*
     * El usuario ha solicitado cerrar la sesion 
     */
    $rootScope.$on(AUTH_EVENTS.logout, () => {
      logout();
      console.info('se cerrara la sesion');
    });

    /*
     * Escucha los cambios en la url para verificar 
     * permisos de usuario 
     */
    $rootScope.$on('$stateChangeStart', (event, next) => {
      if (next.url !== '/login'){
        if(!Session.isAuthenticated()){
          logout(); 
        } 
      }
    });

    /**
     * redirecciona a una url interna
     *
     * @param {string} state url state target
     */
    $rootScope.goTo = state => { $state.go(state) };

}]);
