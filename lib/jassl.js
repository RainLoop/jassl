
'use strict';

var w = typeof window !== 'undefined' ? window : null;

var jassl = function (src, async) {

	if (!w || !w.document || !w.document.body)
	{
		throw new Error('window object is not available your environment.');
	}

	if (!w.Promise || !w.Promise.all)
	{
		throw new Error('Promises are not available your environment.');
	}

	if (!src)
	{
		throw new Error('src should not be empty.');
	}

	return new w.Promise(function(resolve, reject) {

		var element = w.document.createElement('script');

		element.onload = function() {
			resolve(src);
		};

		element.onerror = function() {
			reject(new Error(src));
		};

		element.async = true === async;
		element.src = src;

		w.document.body.appendChild(element);
	});
};

module.exports = jassl;
module.exports.jassl = jassl;
