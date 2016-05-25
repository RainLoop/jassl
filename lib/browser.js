
'use strict';

require('es6-promise-polyfill');

var w = typeof window !== 'undefined' ? window : {};
w.jassl = w.jassl || require('./jassl.js');
