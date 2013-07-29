'use strict';

angular.module('svgApp')
  .factory('SvgData', function ($http) {
    // Service logic
    // ...
    // Public API here
    return {
      getData: function (succ, err) {
        $http.get('/svg/map-test.svg').success(function(data) {
          succ.call(this, data);
        }).error(function(){ 
          err.call(this, data)
        })
      }
    };
  });
