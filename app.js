(function(){
'use strict';

angular.module('flickrFeed', ['ngMaterial'])
  .controller('ListController', ['$scope', '$http', function($scope, $http){

    $scope.results = [];

    $scope.isSearching= false;

    $scope.search = function(){
      var term = $scope.searchTerm.split(" ")
      var url = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSON_CALLBACK' + '&tags="potato,"' + term

      $http.jsonp(url).success(function(data){

        $scope.results = data.items;
      });

    };
  }]);
})();
