'use strict';

describe('Service: SvgData', function () {

  // load the service's module
  beforeEach(module('svgApp'));

  // instantiate service
  var SvgData;
  beforeEach(inject(function (_SvgData_) {
    SvgData = _SvgData_;
  }));

  it('should do something', function () {
    expect(!!SvgData).toBe(true);
  });

});
