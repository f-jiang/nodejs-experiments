// to run test: ./node_modules/jasmine-node/bin/jasmine-node spec/powSpec.js 

'use strict'

var pow = require('../src/pow');

describe('pow', function() {
	it('should work for positive exponents', function() {
		expect(pow(3, 4)).toEqual(81);
		expect(pow(2, 3)).toEqual(8);
		expect(pow(-2, 2)).toEqual(4);
		expect(pow(-2, 3)).toEqual(-8);
	});

	it('should work for negative exponents', function() {
		expect(pow(2, -1)).toEqual(0.5);
		expect(pow(3, -2)).toEqual(1/9);
		expect(pow(-2, -2)).toEqual(0.25);
		expect(pow(-2, -3)).toEqual(-0.125);
	});

	it('should return 1 if the exponent is 0', function() {
		expect(pow(-2, 0)).toEqual(1);
	});

	it('should return 0 if the exponent is 0', function() {
		expect(pow(0, 1)).toEqual(0);
		expect(pow(0, 0)).toEqual(0);
	});
});
