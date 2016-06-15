'use strict'

var pow = function(base, exp) {
	if (base == 0) {
		return 0;
	} else if (base == 1 || exp == 0) {
		return 1;
	} else if (exp > 0) {
		return base * pow(base, exp - 1);
	} else if (exp < 0) {
		return (1 / base) * pow(base, exp + 1);
	}
};

for (var i = -10; i < 10; i++) {
	for (var j = -10; j < 10; j++) {
		console.log(i + '^' + j + ' = ' + pow(i, j));
	}
	console.log('\n');
}

module.exports = pow;
