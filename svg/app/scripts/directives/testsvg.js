'use strict';

angular.module('svgApp')
  .directive('testsvg', function (SvgData, $window) {
    return {
      template: '<div class="nat"></div>',
      restrict: 'E',
      controller: function($scope, $attrs) {
        console.log('in directive controller')
      },
      link: function postLink(scope, element, attrs) {
		    var svg = jQuery('.nat').svg({width: 300, height: 200});
        console.log('svg', svg)
        // LOAD SVG
        // SvgData.getData(function(succ) {
        //   svg.load(succ)
        // });
        svg.load('/svg/map-test.svg', 'get', function(mapdata) {        
          console.log("LOAD DONE", arguments)
        })
      }
    }
  });
