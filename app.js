(function(){
'use strict';

angular.module('flickrFeed', ['ngMaterial'])
  .controller('ListController', ['$scope', '$http', function($scope, $http){

    $scope.results = [];

    $scope.isSearching = false;

    $scope.search = function(){

    $scope.isSearching = true;
      $http({
        url: 'https://api.flickr.com/services/feeds/photos_public.gne?&callback=?',
        params: {
          api_key: '0d9a81629077f3ee2cdefcdc91d09826',
          tags: $scope.searchTerm,
          format: 'json',
        }
      }).success(function (data){
        $scope.results = data;
        $scope.isSearching = false;
          console.log(data);
      }).error(function(error) {
        console.log(error);
        $scope.isSearching = false;
      });

    };
  }]);
})();
