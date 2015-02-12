angular.module('instamaticModule').service('instamaticService', ['$http', '$q', 'clientId', function($http, $q, clientId) {

  // assumes a node server running on port 9000
  // export PORT=9000
  //var SERVICE_URL_PREFIX = 'http://localhost:9000';
  var instagramURI = 'https://api.instagram.com/v1/tags/skateboard/';

  /**
   * function getPopularImages
   * service call pattern using angular $q promises
   * resolve returns response, reject returns error
   * @returns {promise.promise|jQuery.promise}
   */
  this.getPopularImages = function() {
    var deferred = $q.defer();
    var url = instagramURI + 'media/recent?client_id=' + clientId + '&callback=JSON_CALLBACK';

    $http.jsonp(url)
      .success(function (results) {
        var data = results || [];
        deferred.resolve(data);
      })
      .error(function (error) {
        deferred.reject (error);
      });

    return deferred.promise;
  };



}]);
