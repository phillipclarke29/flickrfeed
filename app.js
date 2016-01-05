(function(){
'use strict';

angular.module('flickrFeed', ['ngMaterial'])
  .controller('ListController', ['$scope', '$http', function($scope, $http){
    $scope.search = function(){
      $http({
        method: 'GET',
        url: '/https://api.flickr.com/services/feeds/photos_public.gne'
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });

    }
  }]);
})();
