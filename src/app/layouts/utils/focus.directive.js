
function focusMeDirective($timeout, $parse) {
  return {
    link: function(scope, element, attrs) {
      let model = $parse(attrs.focusMe);
      scope.$watch(model, function(value) {
        if(value === true) { 
          $timeout(function() {
            element[0].focus(); 
          });
        }
      });
      element.bind('blur', function() {
        scope.$apply(model.assign(scope, false));
      })
    }
  };
}

angular.module('app.layouts').directive('focusMe', focusMeDirective); 

