var app = angular.module('flickrFeed', ['ngMaterial'])

app.controller('ListController', ['$scope', '$http', '$mdDialog', function($scope, $http, $mdDialog){

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
    var tmpl = "<md-dialog>\n" +
       "<md-dialog-content>\n" +
       "    <input type=\"text\" ng-model=\"username\"></br></br>\n" +
       "    <input type=\"checkbox\" ng-model=\"multiple\">upload multiple file</br></br>\n" +
       "    watching model:\n" +
       "    <div class=\"button\" ngf-select ng-model=\"files\" ngf-multiple=\"multiple\">Select File</div>\n" +
       "    on file change:\n" +
       "    <div class=\"button\" ngf-select ngf-change=\"upload($files)\" ngf-multiple=\"multiple\">Select File</div>\n" +
       "    Drop File:\n" +
       "    <div ngf-drop ngf-select ng-model=\"files\" class=\"drop-box\" \n" +
       "        ngf-drag-over-class=\"dragover\" ngf-multiple=\"true\" ngf-allow-dir=\"true\"\n" +
       "        accept=\"image/*,application/pdf\">Drop pdfs or images here or click to upload</div>\n" +
       "    <div ngf-no-file-drop>File Drag/Drop is not supported for this browser</div>\n" +
       "    Image thumbnail: <img ngf-src=\"files[0]\">\n" +
       "    Files:\n" +
       "    <ul>\n" +
       "        <li ng-repeat=\"f in files\" style=\"font:smaller\">{{f.name}}</li>\n" +
       "    </ul>\n" +
       "    Upload Log:\n" +
       "    <pre>{{log}}</pre>\n" +
       "<md-action><div class=\"button\" ng-click=\"close()\">close!</div></md-action>\n" +
       "<md-action><div class=\"button\" ng-click=\"upload()\">upload!</div></md-action>\n" +
       "</md-dialog-content>\n" +
       "</md-dialog>";

    $scope.openDialog = function () {
      console.log('hello world');
      $mdDialog.show({
    		parent: angular.element(document.body),
    		template: tmpl,
    		scope: $scope,
    		controller: 'ListController'
    	});
    };
  }]);
