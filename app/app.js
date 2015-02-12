angular.module('instagram', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'instamaticModule']);

angular.module('instagram').config(function ($stateProvider, $urlRouterProvider) {

  /* Add New States Above */
  $urlRouterProvider.otherwise('/instamatic');

});

angular.module('instagram').value('clientId', '2122e774bdd44005ba53fb84478e67d6');

angular.module('instagram').run(function ($rootScope) {

  $rootScope.safeApply = function (fn) {
    var phase = $rootScope.$$phase;
    if (phase === '$apply' || phase === '$digest') {
      if (fn && (typeof(fn) === 'function')) {
        fn();
      }
    } else {
      this.$apply(fn);
    }
  };

});
