
'use strict';

var
	jassl = require('../')
;

exports['Simple jassl test'] = function(test) {
	if (typeof jassl !== 'function') {
		throw new Error('jassl should be a function');
	}
	test.done();
};
