(function(){
'use strict';

angular.module('flickrFeed', ['ngMaterial', 'angularModalService'])
  .controller('ListController', ['$scope', '$http', function($scope, $http){

    $scope.results = [];

      $scope.isSearching= false;

    $scope.search = function(){

      $scope.isSearching= true;

      var term = $scope.searchTerm.split(" ")
      var url = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSON_CALLBACK' + '&tags="potato,"' + term

      $http.jsonp(url).success(function(data){

        $scope.results = data.items;
        console.log(data.items[0])
        $scope.isSearching= false;
      });

    };
  }]);
})();
