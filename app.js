(function(){
'use strict';

angular.module('flickrFeed', ['ngMaterial'])
  .controller('ListController', ['$scope', '$http', function($scope, $http){

    $scope.results = [];

    $scope.isSearching= false;

    $scope.search = function(){


      $http({
        method: 'GET',
        url: 'https://api.flickr.com/services/rest',
        params: {
          method: 'flickr.photos.search',
          api_key: '0d9a81629077f3ee2cdefcdc91d09826',
          text: $scope.searchTerm,
          format: 'json',
          nojsoncallback: 1
        }
      }).success(function (data){
        $scope.results = data;
          console.log(data);
      }).error(function(error) {
        console.log(error);
      });

    };
  }]);
})();
