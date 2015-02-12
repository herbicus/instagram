angular.module('instamaticModule', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('instamaticModule').config(function($stateProvider) {

    /* Add New States Above */
  $stateProvider.state('instamatic', {
    url:'/instamatic',
    templateUrl: 'app/framework/components/view/instamatic-view.html',
    controller: 'instamaticController',
    controllerAs: 'instamaticCtrl'
  });
});
