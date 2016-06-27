
angular.module("app")
  .constant("CONFIG", {
    ROOT_UR: "http://localhost:8080/",
    API_URL: "http://localhost:8000/api/v1/"
  })
  .constant("AUTH_EVENTS", {
    notAuthenticated: "auth-not-authenticated", 
    notAuthorized: "auth-not-authorized",
    logout: "auth-logout"
  });

