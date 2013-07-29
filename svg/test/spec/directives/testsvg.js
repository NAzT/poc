'use strict';

describe('Directive: testsvg', function () {
  beforeEach(module('svgApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<testsvg></testsvg>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the testsvg directive');
  }));
});
