(function(){
'use strict';

angular.module('flickrFeed', ['ngMaterial'])
  .controller('ListController', ['$scope', '$http', function($scope, $http){

    $scope.results = [];

    $scope.isSearching= false;

    $scope.search = function(){

    
      $http.jsonp('https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSON_CALLBACK&tags=').success(function(data){
        console.log(data.items)
        $scope.results = data.items;
      });

    };
  }]);
})();
