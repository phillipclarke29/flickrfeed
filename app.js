var app = angular.module('flickrFeed', ['ngMaterial'])

app.controller('ListController', ['$scope', '$http', function($scope, $http){

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
  app.factory('verifyDelete', function($mdDialog) {
    return function(user) {
      var confirm = $mdDialog.confirm()
        .title('Confirm Your Choice')
        .content('Are you sure you want to delete ' + user.firstName + ' ' + user.lastName + '?')
        .ariaLabel('Delete User')
        .ok('Delete User')
        .cancel('Cancel');
      return $mdDialog.show(confirm);
    }
  })



  app.controller('mainCtrl', function($scope, verifyDelete) {
    $scope.users = [{
      firstName: 'Obi-Wan',
      lastName: 'Kenobi'
    }, {
      firstName: 'Boba',
      lastName: 'Fett'
    }, {
      firstName: 'Han',
      lastName: 'Solo'
    }];

    $scope.delete = function(user) {
      verifyDelete(user).then(function() {
        var index = $scope.users.indexOf(user);
        $scope.users.splice(index, 1);
      });
    }
  });
